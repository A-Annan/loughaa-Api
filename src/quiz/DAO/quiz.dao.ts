import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Quiz, QuizDocument } from '../entities/quiz.entity';

export class QuizDAO extends BaseDao<Quiz> {
  constructor(@InjectModel('Quiz') private quizModel: Model<QuizDocument>) {
    super(quizModel);
  }
}
