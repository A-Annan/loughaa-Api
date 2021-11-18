import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { StudentDAO } from './DAO/student.dao';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService extends BaseService<Student> {
  constructor(private studentDAO: StudentDAO) {
    super(studentDAO);
  }
}
