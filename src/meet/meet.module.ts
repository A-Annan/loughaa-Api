import { Module } from '@nestjs/common';
import { MeetService } from './meet.service';
import { MeetController } from './meet.controller';
import MeetSchema, { Meet } from './entities/meet.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetDAO } from './meet.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meet.name, schema: MeetSchema }]),
  ],
  controllers: [MeetController],
  providers: [MeetDAO, MeetService],
})
export class MeetModule {}
