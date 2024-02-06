import { IsInt, Min, Max } from "class-validator";

export class ActiveAccountDto {
    @IsInt()
    @Max(999999)
    @Min(100000)
    code: number


    @IsInt()
    phone: number
}