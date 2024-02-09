import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDishDto {
    @IsString()
    name: string
    
    @IsOptional()
    @IsString()
    description: string
    
    @Type(() => Number)
    @IsNumber()
    price: number

    @IsOptional()
	@IsString({ each: true })
	@IsArray()
	categories: string[] = []
}
