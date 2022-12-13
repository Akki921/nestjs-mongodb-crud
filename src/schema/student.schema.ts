import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Teacher } from './teacher.schema';
import * as mongoose from 'mongoose';
@Schema()
export class Student {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' })
  teacher: Teacher[];
  @Prop({ required: true })
  name: string;
  @Prop()
  roleNumber: number;
  @Prop()
  class: number;
  @Prop()
  gender: string;
  @Prop()
  marks: number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
