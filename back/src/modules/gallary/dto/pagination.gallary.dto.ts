import { IsOptional, IsString } from "class-validator";
import { PaginationDto } from "@core/pagination";

export class PaginationGallaryDto extends PaginationDto{
    @IsOptional()
    @IsString()
    tagName?: string
}