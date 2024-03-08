import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  Query,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto, PaginationDishDto, UpdateDishDto } from './dto';
import { RoleAuthGuard } from '@auth/guards';
import { RoleEnum } from '@/core/enums';
import { FileInterceptor } from '@nestjs/platform-express';

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @RoleAuthGuard(RoleEnum.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('photo'))
  @Post()
  create(
    @Body() dto: CreateDishDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })],
      }),
    )
    photo: Express.Multer.File,
  ) {
    return this.dishService.create(dto, photo);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() query: PaginationDishDto) {
    return this.dishService.findAll(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishService.findOne(id);
  }

  @RoleAuthGuard(RoleEnum.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDishDto) {
    return this.dishService.update(id, dto);
  }

  @RoleAuthGuard(RoleEnum.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishService.remove(id);
  }
}
