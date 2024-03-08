import { ServeStaticModuleOptions } from "@nestjs/serve-static";
import { join } from "path";

export const ServeStaticConfigOptions = (): ServeStaticModuleOptions  => ({
    rootPath: join(__dirname, '..', '../static')
})