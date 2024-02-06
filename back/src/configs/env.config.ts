import { ConfigModuleOptions } from "@nestjs/config";
import { IsNumber, IsString } from "class-validator";
import { envValidate } from "src/common/env.validation";

export class EnviromentVariables {
    @IsNumber()
    PORT: number

    @IsString()
    DB_URL: string
}

export const envConfigOptions: ConfigModuleOptions = {
    validate: envValidate(EnviromentVariables),
    isGlobal: true
}