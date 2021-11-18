import { Module } from '@nestjs/common';
import AssignementSchema, { Assignement } from './entities/assignement.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignementController } from './assignements.controller';
import { AssignementService } from './assignements.service';
import { AssignementDAO } from './DAO/assignements.dao';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assignement.name, schema: AssignementSchema },
    ]),
  ],
  controllers: [AssignementController],
  providers: [AssignementService, AssignementDAO],
})
export class AssignementsModule {}
