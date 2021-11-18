import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { Group } from './entities/group.entity';
import { GroupService } from './groups.service';

@Controller('groups')
export class GroupController extends BaseController<Group> {
  constructor(private readonly GroupService: GroupService) {
    super(GroupService);
  }

  @Post()
  create(@Body() body: Group) {
    return this.GroupService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Group) {
    return this.GroupService.update(id, body);
  }
}
