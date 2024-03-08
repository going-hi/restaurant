import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Basket, BasketSchema } from './schemas/basket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }])
  ],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
