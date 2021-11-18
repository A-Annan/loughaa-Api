import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LevelDAO } from './DAO/level.dao';
import LevelSchema, { Level } from './entities/level.entity';
import { LevelController } from './levels.controller';
import { LevelService } from './levels.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Level.name, schema: LevelSchema }]),
  ],
  controllers: [LevelController],
  providers: [LevelService, LevelDAO],
})
export class LevelsModule {}
