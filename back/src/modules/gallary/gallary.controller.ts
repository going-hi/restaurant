import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  HttpCode,
  HttpStatus,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GallaryService } from './gallary.service';
import { RoleAuthGuard } from '@auth/guards';
import { RoleEnum } from '@/core/enums';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  CreateGallaryDto,
  PaginationGallaryDto,
  UpdateGallaryDto,
} from './dto';

@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
@Controller('gallary')
export class GallaryController {
  constructor(private readonly gallaryService: GallaryService) {}

  @UseInterceptors(FileInterceptor('photo'))
  @HttpCode(HttpStatus.CREATED)
  @RoleAuthGuard(RoleEnum.ADMIN)
  @Post()
  create(
    @Body() dto: CreateGallaryDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })],
      }),
    )
    photo: Express.Multer.File,
  ) {
    return this.gallaryService.create(dto, photo);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() query: PaginationGallaryDto) {
    return this.gallaryService.findAll(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gallaryService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGallaryDto: UpdateGallaryDto,
  ) {
    return this.gallaryService.update(id, updateGallaryDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gallaryService.remove(id);
  }
}
