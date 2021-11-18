import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { BaseController } from 'src/shared/BaseController';
import { AssignementService } from './assignements.service';
import { Assignement } from './entities/assignement.entity';

@Controller('assignements')
export class AssignementController extends BaseController<Assignement> {
  constructor(private readonly assignementService: AssignementService) {
    super(assignementService);
  }

  @Post()
  create(@Body() body: Assignement) {
    return this.assignementService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Assignement) {
    return this.assignementService.update(id, body);
  }
}
