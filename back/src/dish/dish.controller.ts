import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, Query } from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto, PaginationDishDto, UpdateDishDto } from './dto';
import { RoleAuth } from 'src/role/decorators';
import { Role } from 'src/role/Role.enum';
import { FileInterceptor } from '@nestjs/platform-express';

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @RoleAuth(Role.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('photo'))
  @Post()
  create(
    @Body() dto: CreateDishDto,
    @UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })]
			})
		)
		photo: Express.Multer.File
  ) {
    return this.dishService.create(dto, photo);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(
    @Query() query: PaginationDishDto
  ) {
    return this.dishService.findAll(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishService.findOne(id);
  }

  @RoleAuth(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDishDto) {
    return this.dishService.update(id, dto);
  }

  @RoleAuth(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishService.remove(id);
  }
}
