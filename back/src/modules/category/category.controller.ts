import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto';
import { RoleAuthGuard } from '@auth/guards';
import { RoleEnum } from '@/core/enums';
import { PaginationDto } from 'src/common/pagination.dto';

@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @RoleAuthGuard(RoleEnum.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.categoryService.findAll(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @RoleAuthGuard(RoleEnum.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateCategoryDto) {
    return this.categoryService.update(id, dto);
  }

  @RoleAuthGuard(RoleEnum.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
