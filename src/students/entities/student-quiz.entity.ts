import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import * as mongoose from 'mongoose';

@Schema()
export class StudentQuiz {
  @Prop()
  date: Date;

  @Prop()
  note: number;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      autopopulate: { maxDepth: 1 },
    },
  ])
  quiz: Quiz;
}

export const StudenQuizSchema = SchemaFactory.createForClass(StudentQuiz);
