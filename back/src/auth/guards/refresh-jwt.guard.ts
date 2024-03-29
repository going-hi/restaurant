import { AuthGuard } from "@nestjs/passport";
import { REFRESH_JWT_STRATEGY } from "../constants/auth.constant";
import { UseGuards } from "@nestjs/common";

export const RefreshJwtGuard = () => UseGuards(AuthGuard(REFRESH_JWT_STRATEGY))