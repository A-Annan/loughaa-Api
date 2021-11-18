import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import {
  Resource,
  RoleMatchingMode,
  Roles,
  Scopes,
} from 'nest-keycloak-connect';

@Controller('students')
@Resource(Student.name)
export class StudentsController extends BaseController<Student> {
  constructor(private readonly studentsService: StudentsService) {
    super(studentsService);
  }

  @Post()
  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Create')
  create(@Body() body: Student) {
    return this.studentsService.create(body);
  }
  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Update')
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Student) {
    return this.studentsService.update(id, body);
  }
}
