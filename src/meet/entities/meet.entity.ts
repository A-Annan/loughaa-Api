import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Attendance } from 'src/attendance/entities/attendance.entity';

export type MeetDocument = Meet & Document;

@Schema()
export class Meet {
  @Prop()
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendance',
    autopopulate: { maxDepth: 1 },
  })
  attendance: Attendance;
}

const MeetSchema = SchemaFactory.createForClass(Meet);

export default MeetSchema;
