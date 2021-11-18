import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { Schedule } from './entities/schedule.entity';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController extends BaseController<Schedule> {
  constructor(private readonly scheduleService: ScheduleService) {
    super(scheduleService);
  }

  @Post()
  create(@Body() body: Schedule) {
    return this.scheduleService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Schedule) {
    return this.scheduleService.update(id, body);
  }
}
