import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Assignement } from 'src/assignements/entities/assignement.entity';
import * as mongoose from 'mongoose';

@Schema()
export class StudentAssignement {
  @Prop()
  date: Date;

  @Prop()
  note: number;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignement',
      autopopulate: { maxDepth: 1 },
    },
  ])
  assignement: Assignement;
}

export const StudentAssignementSchema =
  SchemaFactory.createForClass(StudentAssignement);
