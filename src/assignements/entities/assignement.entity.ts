import { Prop, raw, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import QuestionSchema, { Question } from './question.entity';

export type AssignementDocument = Assignement & Document;

export class Assignement {
  @Prop([QuestionSchema])
  questions: Question[];

  @Prop()
  answer: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  createdBy: string;
}

const AssignementSchema = SchemaFactory.createForClass(Assignement);

export default AssignementSchema;
