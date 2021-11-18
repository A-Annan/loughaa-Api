import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Meet, MeetDocument } from './entities/meet.entity';

export class MeetDAO extends BaseDao<Meet> {
  constructor(@InjectModel('Meet') private MeetModel: Model<MeetDocument>) {
    super(MeetModel);
  }
}
