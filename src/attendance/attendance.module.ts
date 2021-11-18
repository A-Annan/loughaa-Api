import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { AttendanceDAO } from './dao/attendance.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendance, AttedanceSchema } from './entities/attendance.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attendance.name, schema: AttedanceSchema },
    ]),
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService, AttendanceDAO],
})
export class AttendanceModule {}
