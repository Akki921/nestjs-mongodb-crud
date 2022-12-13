import { Document } from 'mongoose';
export interface ITeacher extends Document {
  readonly name: string;
  readonly gender: string;
}
