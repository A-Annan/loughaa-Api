import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/BaseService';
import { Meet } from './entities/meet.entity';
import { MeetDAO } from './meet.dao';

@Injectable()
export class MeetService extends BaseService<Meet> {
  constructor(private meetDao: MeetDAO) {
    super(meetDao);
  }
}
