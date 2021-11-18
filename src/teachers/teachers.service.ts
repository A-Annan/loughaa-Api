import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { TeacherDAO } from './DAO/teacher.dao';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService extends BaseService<Teacher> {
  constructor(private teacherDAO: TeacherDAO) {
    super(teacherDAO);
  }
}
