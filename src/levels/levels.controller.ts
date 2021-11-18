import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { Level } from './entities/level.entity';
import { LevelService } from './levels.service';

@Controller('levels')
export class LevelController extends BaseController<Level> {
  constructor(private readonly levelService: LevelService) {
    super(levelService);
  }

  @Post()
  create(@Body() body: Level) {
    return this.levelService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Level) {
    return this.levelService.update(id, body);
  }
}
