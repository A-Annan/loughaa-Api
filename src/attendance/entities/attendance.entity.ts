import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Student } from 'src/students/entities/student.entity';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance {
  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      autopopulate: { maxDepth: 1 },
    },
  ])
  presentStudents: Student[];

  @Prop()
  validated_At: Date;
}

export const AttedanceSchema = SchemaFactory.createForClass(Attendance);
