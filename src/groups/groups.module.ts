import { Module } from '@nestjs/common';
import GroupSchema, { Group } from './entities/group.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupDAO } from './DAO/group.dao';
import { GroupController } from './groups.controller';
import { GroupService } from './groups.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  controllers: [GroupController],
  providers: [GroupService, GroupDAO],
})
export class GroupsModule {}
