import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, HttpStatus, HttpCode } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RoleAuth } from 'src/role/decorators';
import { Role } from 'src/role/Role.enum';


@UsePipes(new ValidationPipe({whitelist: true, transform: true}))
@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @HttpCode(HttpStatus.CREATED)
  @RoleAuth(Role.ADMIN)
  @UseInterceptors(FileInterceptor('photo'))
  @Post()
  create(
    @Body() createPromotionDto: CreatePromotionDto,
    @UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })]
			})
      ) photo: Express.Multer.File
  ) {
    return this.promotionService.create(createPromotionDto, photo);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.promotionService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @RoleAuth(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromotionDto: UpdatePromotionDto) {
    return this.promotionService.update(id, updatePromotionDto);
  }

  @HttpCode(HttpStatus.OK)
  @RoleAuth(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionService.remove(id);
  }
}
