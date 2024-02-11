import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto, UpdateBasketDto } from './dto';
import { AccessJwtGuard } from 'src/auth/decorators';
import { User } from 'src/user/decorators';
import { PaginationDto } from 'src/common/pagination.dto';
import { RoleAuth } from 'src/role/decorators';
import { Role } from 'src/role/Role.enum';


@UsePipes(new ValidationPipe({transform: true, whitelist: true}))
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @HttpCode(HttpStatus.CREATED)
  @AccessJwtGuard()
  @Post()
  create(
    @Body() dto: CreateBasketDto,
    @User('id') userId: string
  ) {
    return this.basketService.create(dto, userId);
  }

  @HttpCode(HttpStatus.OK)
  @AccessJwtGuard()
  @Get()
  findAll(
    @Query() query: PaginationDto,
    @User('id') userId: string
  ) {
    return this.basketService.findAll(query, userId);
  }

  @RoleAuth(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @AccessJwtGuard()
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() dto: UpdateBasketDto,
    @User('id') userId: string
  ) {
    return this.basketService.update(id, dto.count, userId);
  }

  @AccessJwtGuard()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @User('id') userId: string
  ) {
    return this.basketService.remove(id, userId); 
  }
}
