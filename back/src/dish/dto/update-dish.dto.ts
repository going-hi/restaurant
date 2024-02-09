import { PartialType } from '@nestjs/mapped-types';
import { CreateDishDto } from './create-dish.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateDishDto extends PartialType(CreateDishDto) {
    @IsOptional({ each: true })
    @IsString({ each: true })
    @IsArray()
    categories?: string[];
}
