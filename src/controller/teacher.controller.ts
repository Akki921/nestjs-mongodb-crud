import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
  } from '@nestjs/common';
  import { CreateTeacherDto } from 'src/dto/create-teacher.dto';
 // import { UpdateStudentDto } from 'src/dto/update-student.dto';
  import { TeacherService } from 'src/service/teacher.service';
  @Controller('teacher')
  export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}
    @Post()
    async createStudent(
      @Res() response,
      @Body() creatTeacherDto: CreateTeacherDto,
    ) {
      try {
        console.log('creatTeacherDto',creatTeacherDto);
        
        const newTeacher = await this.teacherService.createTeacher(
            creatTeacherDto,
        );
        return response.status(HttpStatus.CREATED).json({
          message: 'Teacher has been created successfully',
          newTeacher,
        });
      } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Teacher not created!',
          error: 'Bad Request',
        });
      }
    }
    // @Put('/:id')
    // async updateStudent(
    //   @Res() response,
    //   @Param('id') studentId: string,
    //   @Body() updateStudentDto: UpdateStudentDto,
    // ) {
    //   try {
    //     const existingStudent = await this.studentService.updateStudent(
    //       studentId,
    //       updateStudentDto,
    //     );
    //     return response.status(HttpStatus.OK).json({
    //       message: 'Student has been successfully updated',
    //       existingStudent,
    //     });
    //   } catch (err) {
    //     return response.status(err.status).json(err.response);
    //   }
    // }
  
    @Get()
    async getTeacher(@Res() response) {
      try {
        const teacherData = await this.teacherService.getAllTeacher();
        return response.status(HttpStatus.OK).json({
          message: 'All Teacher data found successfully',
          teacherData,
        }); 
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
  
    @Get('/:id')
    async getStudent(@Res() response, @Param('id') teacherId: string) {
      try {
        const existingStudent = await this.teacherService.getTecher(teacherId);
        return response.status(HttpStatus.OK).json({
          message: 'Teacher found successfully',
          existingStudent,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
  
    // @Delete('/:id')
    // async deleteStudent(@Res() response, @Param('id') studentId: string) {
    //   try {
    //     const deletedStudent = await this.studentService.deleteStudent(studentId);
    //     return response.status(HttpStatus.OK).json({
    //       message: 'Student deleted successfully',
    //       deletedStudent,
    //     });
    //   } catch (err) {
    //     return response.status(err.status).json(err.response);
    //   }
    // }
  }
  