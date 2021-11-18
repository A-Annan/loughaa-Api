import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import { Level, LevelDocument } from '../entities/level.entity';

export class LevelDAO extends BaseDao<Level> {
  constructor(@InjectModel('Level') private levelModel: Model<LevelDocument>) {
    super(levelModel);
  }
}
