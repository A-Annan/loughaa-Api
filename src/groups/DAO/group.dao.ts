import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Group, GroupDocument } from '../entities/group.entity';

export class GroupDAO extends BaseDao<Group> {
  constructor(@InjectModel('Group') private groupModel: Model<GroupDocument>) {
    super(groupModel);
  }
}
