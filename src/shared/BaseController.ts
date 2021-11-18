import { BadRequestException, Get, Param, Delete, Query } from '@nestjs/common';
import { Roles, Scopes, RoleMatchingMode } from 'nest-keycloak-connect';
import { IBaseService } from './BaseService';
import * as mongoose from 'mongoose';
import { pagination } from './BaseController.utility';

export abstract class BaseController<T> {
  constructor(private readonly service: IBaseService<T>) {}

  @Get()
  @Roles({
    roles: ['realm:Admin', 'realm:Developer'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Find')
  find(
    @Query('page') p: string,
    @Query('limit') l: string,
    @Query('select') s: string,
    @Query('search') se: string,
    @Query('filter') f: string,
    @Query('sort') so: string,
    @Query('populate') po: string,
  ) {
    let search;
    try {
      if (se) {
        search = JSON.parse(se);
        if (se.indexOf('_') >= 0) {
          search = this.searchNestedObject(search);
        }
      } else search = [{}];
    } catch (error) {
      throw new BadRequestException(
        error,
        'search query param must be an array of strings',
      );
    }
    return this.service.find(search, pagination<T>(p, l, s, f, so, po));
  }

  searchNestedObject(search: Array<any>) {
    return search.map((ele) => {
      const key = Object.keys(ele)[0];
      if (key.indexOf('_') >= 0) {
        const value = Object.values(ele)[0] as string;
        return { [key.substr(1)]: new mongoose.Types.ObjectId(value) };
      }
      return ele;
    });
  }
  @Roles({
    roles: ['realm:Admin', 'realm:Developer'],
    mode: RoleMatchingMode.ANY,
  })
  @Get(':id')
  @Scopes('FindOne')
  findById(@Param('id') id: string, @Query('populate') po: string) {
    let populate;
    //populate
    try {
      populate = po ? JSON.parse(po) : [];
    } catch (error) {
      throw new BadRequestException(error, 'populate param error');
    }
    return this.service.findOne(id, { populate });
  }

  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Delete(':id')
  @Scopes('Delete')
  delete(@Param('id') id: string, authorization?: string) {
    return this.service.delete(id);
  }
}
