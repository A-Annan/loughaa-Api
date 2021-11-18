import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Schedule, ScheduleDocument } from '../entities/schedule.entity';

export class ScheduleDAO extends BaseDao<Schedule> {
  constructor(
    @InjectModel('Schedule') private ScheduleModel: Model<ScheduleDocument>,
  ) {
    super(ScheduleModel);
  }
}
