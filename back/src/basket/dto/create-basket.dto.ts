import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateBasketDto {
    @IsString()
    dishId: string

    @IsOptional()
    @IsNumber()
    count: number = 1
}
