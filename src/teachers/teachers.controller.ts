import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { Teacher } from './entities/teacher.entity';
import { TeacherService } from './teachers.service';

@Controller('teachers')
export class TeacherController extends BaseController<Teacher> {
  constructor(private readonly teacherService: TeacherService) {
    super(teacherService);
  }

  @Post()
  create(@Body() body: Teacher) {
    return this.teacherService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Teacher) {
    return this.teacherService.update(id, body);
  }
}
