import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Meet } from 'src/meet/entities/meet.entity';

export type ScheduleDocument = Schedule & Document;
export class Schedule {
  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop()
  date: Date;

  @Prop()
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meet',
    autopopulate: { maxDepth: 1 },
  })
  meet: Meet;
}

const ScheduleSchema = SchemaFactory.createForClass(Schedule);

export default ScheduleSchema;
