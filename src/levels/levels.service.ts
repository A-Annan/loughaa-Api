import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { LevelDAO } from './DAO/level.dao';
import { Level } from './entities/level.entity';

@Injectable()
export class LevelService extends BaseService<Level> {
  constructor(private LevelDAO: LevelDAO) {
    super(LevelDAO);
  }
}
