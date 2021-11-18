import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { AttendanceDAO } from './dao/attendance.dao';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendanceService extends BaseService<Attendance> {
  constructor(private attendanceDAO: AttendanceDAO) {
    super(attendanceDAO);
  }
}
