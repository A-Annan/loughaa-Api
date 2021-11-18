import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Question {
  @Prop()
  text: string;

  @Prop()
  type: 'QCM' | 'text';

  @Prop()
  answers: string[];

  @Prop()
  img: string;
}

const QuestionSchema = SchemaFactory.createForClass(Question);
export default QuestionSchema;
