import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { GroupDAO } from './DAO/group.dao';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService extends BaseService<Group> {
  constructor(private groupDAO: GroupDAO) {
    super(groupDAO);
  }
}
