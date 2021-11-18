import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import QuestionSchema, {
  Question,
} from 'src/assignements/entities/question.entity';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop([QuestionSchema])
  questions: Question[];

  @Prop()
  date: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
