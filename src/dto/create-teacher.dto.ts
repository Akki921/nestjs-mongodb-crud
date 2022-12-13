import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
  } from 'class-validator';
  export class CreateTeacherDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;
  }
  