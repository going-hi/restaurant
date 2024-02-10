import { ConfigService } from "@nestjs/config";
import { MongooseModuleFactoryOptions } from "@nestjs/mongoose";
import { ServeStaticModule, ServeStaticModuleOptions } from "@nestjs/serve-static";
import { join } from "path";

export const ServeStaticConfigOptions = (): ServeStaticModuleOptions  => ({
    rootPath: join(__dirname, '..', '../static')
})