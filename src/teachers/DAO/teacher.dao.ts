import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Teacher, TeacherDocument } from '../entities/teacher.entity';

export class TeacherDAO extends BaseDao<Teacher> {
  constructor(
    @InjectModel('Teacher') private teacherModel: Model<TeacherDocument>,
  ) {
    super(teacherModel);
  }
}
