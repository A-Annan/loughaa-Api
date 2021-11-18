import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { ScheduleDAO } from './DAO/schedule.dao';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class ScheduleService extends BaseService<Schedule> {
  constructor(private scheduleDAO: ScheduleDAO) {
    super(scheduleDAO);
  }
}
