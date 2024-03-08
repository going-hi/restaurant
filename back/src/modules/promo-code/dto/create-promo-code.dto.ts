import { IsEnum, IsInt, IsNotEmptyObject, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { DiscountType } from "../schemas/promo-code.schema";
import { Type } from "class-transformer";

export class Discount {
    @IsEnum(DiscountType)
    type: DiscountType

    @IsInt()
    count: number
}



export class CreatePromoCodeDto {
    @IsString()
    @IsOptional()
    description: string

    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => Discount)
    discount: Discount
}

