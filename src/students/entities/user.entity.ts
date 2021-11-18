import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: string;

  @Prop()
  Birthday: string;

  @Prop()
  Gender: string;

  @Prop()
  email: string;

  @Prop()
  keycloackId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
