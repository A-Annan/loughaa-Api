import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Group } from 'src/groups/entities/group.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';

@Schema()
export class StudentAttandance {
  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      autopopulate: { maxDepth: 1 },
    },
  ])
  group: Group;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
      autopopulate: { maxDepth: 1 },
    },
  ])
  schedule: Schedule;
}

export const StudentAttandanceSchema =
  SchemaFactory.createForClass(StudentAttandance);
