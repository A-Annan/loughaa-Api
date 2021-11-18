import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Level } from 'src/levels/entities/level.entity';
import * as mongoose from 'mongoose';
import { Group } from 'src/groups/entities/group.entity';
import { Document } from 'mongoose';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import { UserSchema, User } from 'src/students/entities/user.entity';

export type TeacherDocument = Teacher & Document;

export class Teacher {
  @Prop(UserSchema)
  user: User;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      autopopulate: { maxDepth: 1 },
    },
  ])
  groups: Group[];

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
      autopopulate: { maxDepth: 1 },
    },
  ])
  schedules: Schedule[];
}
const TeacherSchema = SchemaFactory.createForClass(Teacher);

export default TeacherSchema;
