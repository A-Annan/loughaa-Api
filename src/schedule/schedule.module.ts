import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import ScheduleSchema, { Schedule } from './entities/schedule.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleDAO } from './DAO/schedule.dao';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Schedule.name, schema: ScheduleSchema },
    ]),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleDAO],
})
export class ScheduleModule {}
