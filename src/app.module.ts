import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './controller/student.controller';
import { TeacherController } from './controller/teacher.controller';
import { StudentSchema } from './schema/student.schema';
import { TeacherSchema } from './schema/teacher.schema';
import { StudentService } from './service/student.service';
import { TeacherService } from './service/teacher.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema},{ name: 'Teacher', schema: TeacherSchema}]),
  ],
  controllers: [AppController, StudentController,TeacherController],
  providers: [AppService, StudentService,TeacherService],
})
export class AppModule {}
