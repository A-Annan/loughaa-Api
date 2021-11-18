import { BadRequestException } from '@nestjs/common';

export function pagination<T>(
  p: string,
  l: string,
  s: string,
  f: string,
  so: string,
  po: string,
) {
  const page = p ? parseInt(p, 10) : 1;
  const limit = l ? parseInt(l, 10) : 5;
  let select;
  let filter: T[] = [];
  let sort, populate;
  try {
    select = s ? JSON.parse(s) : [];
  } catch (error) {
    throw new BadRequestException(
      error,
      'select query param must be an array of strings',
    );
  }

  // filter
  try {
    filter = f ? JSON.parse(f) : [{}];
  } catch (error) {
    throw new BadRequestException(
      error,
      'filter query param must be an array of strings',
    );
  }

  //Sort
  try {
    //add createdAt: -1
    so = so ? so.replace('}', ',"createdAt":-1}') : '{"createdAt":-1}';
    sort = JSON.parse(so);
  } catch (error) {
    throw new BadRequestException(
      error,
      'sort query param must be an array of strings',
    );
  }
  // return { page, limit, select, filter, sort };

  //populate
  try {
    populate = po ? JSON.parse(po) : [];
  } catch (error) {
    throw new BadRequestException(error, 'populate param error');
  }

  return {
    page,
    limit,
    select,
    filter,
    sort,
    populate,
  };
}
