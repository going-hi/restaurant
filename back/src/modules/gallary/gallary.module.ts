import { Module } from '@nestjs/common';
import { GallaryService } from './gallary.service';
import { GallaryController } from './gallary.controller';
import { FileModule } from '@/core/file/file.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Gallary, GallarySchema } from './schemas/gallary.schema';

@Module({
  imports: [
    FileModule,
    MongooseModule.forFeature([{ name: Gallary.name, schema: GallarySchema }]),
  ],
  controllers: [GallaryController],
  providers: [GallaryService],
})
export class GallaryModule {}
