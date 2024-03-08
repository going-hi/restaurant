import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "@core/pagination";

export class PaginationDishDto extends PaginationDto {
    @IsOptional()
	@IsString()
    categoryId?: string
}