import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { AssignementDAO } from './DAO/assignements.dao';
import { Assignement } from './entities/assignement.entity';

@Injectable()
export class AssignementService extends BaseService<Assignement> {
  constructor(private AssignementDAO: AssignementDAO) {
    super(AssignementDAO);
  }
}
