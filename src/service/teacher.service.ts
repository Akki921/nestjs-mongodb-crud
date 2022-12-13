import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTeacherDto } from 'src/dto/create-teacher.dto';
import { ITeacher } from 'src/interface/teacher.interface';
import { Model } from 'mongoose'; 
@Injectable()
export class TeacherService {
  constructor(@InjectModel('Teacher') private teacherModel: Model<ITeacher>) {}
  async createTeacher(createTeacherDto:CreateTeacherDto ): Promise<ITeacher> {
    console.log('createTeacherDto from servoice',createTeacherDto);
    
    const newTeacher = await new this.teacherModel(createTeacherDto);
    return newTeacher.save();
  }
//   async updateStudent(
//     studentId: string,
//     updateStudentDto: UpdateStudentDto,
//   ): Promise<ITeacher> {
//     const existingStudent = await this.studentModel.findByIdAndUpdate(
//       studentId,
//       updateStudentDto,
//       { new: true },
//     );
//     if (!existingStudent) {
//       throw new NotFoundException(`Student #${studentId} not found`);
//     }
//     return existingStudent;
//   }
  async getAllTeacher(): Promise<ITeacher[]> {
    const teacherData = await this.teacherModel.find()
    if (!teacherData || teacherData.length == 0) {
      throw new NotFoundException('Techer data not found!');
    }
    return teacherData;
  }
  async getTecher(teacherId: string): Promise<ITeacher> {
    const existingTeacher = await this.teacherModel.findById(teacherId).exec();
    if (!existingTeacher) {
      throw new NotFoundException(`Teacher #${teacherId} not found`);
    }
    return existingTeacher;
  }
  async deleteTeacher(teacherId: string): Promise<ITeacher> {
    const deletedTeacher = await this.teacherModel.findByIdAndDelete(teacherId);
    if (!deletedTeacher) {
      throw new NotFoundException(`Student #${teacherId} not found`);
    }
    return deletedTeacher;
  }
}
