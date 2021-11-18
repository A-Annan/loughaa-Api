import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseDao } from 'src/shared/BaseDao';
import {
  Assignement,
  AssignementDocument,
} from '../entities/assignement.entity';

export class AssignementDAO extends BaseDao<Assignement> {
  constructor(
    @InjectModel('Assignement')
    private assignementModel: Model<AssignementDocument>,
  ) {
    super(assignementModel);
  }
}
