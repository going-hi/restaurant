import { ConfigService } from "@nestjs/config";
import { MongooseModuleFactoryOptions } from "@nestjs/mongoose";

export const mongoConfigOptions = (configService: ConfigService): MongooseModuleFactoryOptions  => ({
    uri: configService.get("DB_URL")
})