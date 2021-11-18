import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LevelDocument = Level & Document;

@Schema()
export class Level {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

const LevelSchema = SchemaFactory.createForClass(Level);

export default LevelSchema;
