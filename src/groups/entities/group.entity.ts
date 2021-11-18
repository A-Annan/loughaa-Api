import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Level } from 'src/levels/entities/level.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';

export type GroupDocument = Group & Document;

@Schema()
export class Group {
  @Prop()
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
    autopopulate: { maxDepth: 1 },
  })
  level: Level;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
      autopopulate: { maxDepth: 1 },
    },
  ])
  calendarSchedule: Schedule[];
}

const GroupSchema = SchemaFactory.createForClass(Group);

export default GroupSchema;
