import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { Meet } from './entities/meet.entity';
import { MeetService } from './meet.service';

@Controller('meet')
export class MeetController extends BaseController<Meet> {
  constructor(private readonly meetService: MeetService) {
    super(meetService);
  }

  @Post()
  create(@Body() body: Meet) {
    return this.meetService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Meet) {
    return this.meetService.update(id, body);
  }
}
