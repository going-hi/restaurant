import { AuthGuard } from "@nestjs/passport";
import { UseGuards } from "@nestjs/common";
import { ACCESS_JWT_STRATEGY } from "../constants/auth.constant";

export const AccessJwtGuard = () => UseGuards(AuthGuard(ACCESS_JWT_STRATEGY))
