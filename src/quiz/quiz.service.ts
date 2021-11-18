import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { QuizDAO } from './DAO/quiz.dao';
import { Quiz } from './entities/quiz.entity';

@Injectable()
export class QuizService extends BaseService<Quiz> {
  constructor(private QuizDAO: QuizDAO) {
    super(QuizDAO);
  }
}
