import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import {
  Resource,
  RoleMatchingMode,
  Roles,
  Scopes,
} from 'nest-keycloak-connect';
import { Attendance } from './entities/attendance.entity';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
@Resource(Attendance.name)
export class AttendanceController extends BaseController<Attendance> {
  constructor(private readonly attendanceService: AttendanceService) {
    super(attendanceService);
  }

  @Post()
  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Create')
  create(@Body() body: Attendance) {
    return this.attendanceService.create(body);
  }
  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Update')
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Attendance) {
    return this.attendanceService.update(id, body);
  }
}
