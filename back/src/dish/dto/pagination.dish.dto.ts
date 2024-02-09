import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common/pagination.dto";

export class PaginationDishDto extends PaginationDto {
    @IsOptional()
	@IsString()
    categoryId?: string
}