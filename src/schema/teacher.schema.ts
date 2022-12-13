import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Teacher {
  @Prop({ required: true })
  name: string;
  @Prop()
  gender: string;
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
