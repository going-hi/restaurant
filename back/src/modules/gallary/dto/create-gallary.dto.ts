import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateGallaryDto {
    @IsOptional()
	@IsString({ each: true })
	@IsArray()
    tags: string[] = []
}
