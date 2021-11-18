import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Attendance, AttendanceDocument } from '../entities/attendance.entity';

export class AttendanceDAO extends BaseDao<Attendance> {
  constructor(
    @InjectModel('Attendance')
    private attendanceModel: Model<AttendanceDocument>,
  ) {
    super(attendanceModel);
  }
}
