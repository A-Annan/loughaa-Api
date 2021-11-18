import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Student, StudentDocument } from '../entities/student.entity';

export class StudentDAO extends BaseDao<Student> {
  constructor(
    @InjectModel('Student') private studentModel: Model<StudentDocument>,
  ) {
    super(studentModel);
  }
}
