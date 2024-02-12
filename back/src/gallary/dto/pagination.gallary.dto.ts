import { IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common/pagination.dto";

export class PaginationGallaryDto extends PaginationDto{
    @IsOptional()
    @IsString()
    tagName?: string
}