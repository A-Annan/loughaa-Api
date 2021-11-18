import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherDAO } from './DAO/teacher.dao';
import TeacherSchema, { Teacher } from './entities/teacher.entity';
import { TeacherController } from './teachers.controller';
import { TeacherService } from './teachers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService, TeacherDAO],
})
export class TeachersModule {}
