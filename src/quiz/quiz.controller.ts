import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import {
  Resource,
  RoleMatchingMode,
  Roles,
  Scopes,
} from 'nest-keycloak-connect';
import { Quiz } from './entities/quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
@Resource(Quiz.name)
export class QuizController extends BaseController<Quiz> {
  constructor(private readonly quizService: QuizService) {
    super(quizService);
  }

  @Post()
  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Create')
  create(@Body() body: Quiz) {
    return this.quizService.create(body);
  }
  @Roles({
    roles: ['realm:Admin'],
    mode: RoleMatchingMode.ANY,
  })
  @Scopes('Update')
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Quiz) {
    return this.quizService.update(id, body);
  }
}
