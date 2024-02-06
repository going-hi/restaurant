import { ExecutionContext, createParamDecorator } from "@nestjs/common"


type UserDecorator = {
    id: string,
    phone: number,
    name: string
}

export const User = createParamDecorator(
    (data: keyof UserDecorator, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        const user = request.user
        return data ? user[data] : user
    }
)