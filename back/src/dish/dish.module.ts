import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { Dish, DishSchema } from './schemas/dish.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dish.name, schema: DishSchema }]),
    FileModule
  ],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
