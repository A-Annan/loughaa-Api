import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Level } from 'src/levels/entities/level.entity';
import { Document } from 'mongoose';
import { User, UserSchema } from './user.entity';
import { StudenQuizSchema, StudentQuiz } from './student-quiz.entity';
import {
  StudentAssignement,
  StudentAssignementSchema,
} from './student-assignment.entity';
import {
  StudentAttandance,
  StudentAttandanceSchema,
} from './student-attendance.entity';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop(UserSchema)
  user: User;

  @Prop()
  status: 'trial' | 'enrolled';

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
    autopopulate: { maxDepth: 1 },
  })
  level: Level;

  @Prop([StudenQuizSchema])
  studentQuiz: StudentQuiz[];

  @Prop([StudentAssignementSchema])
  studentAssignement: StudentAssignement[];

  @Prop([StudentAttandanceSchema])
  studentAttandance: StudentAttandance[];
}

const StudentSchema = SchemaFactory.createForClass(Student);

export default StudentSchema;
