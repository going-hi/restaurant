import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { PromoCodeService } from './promo-code.service';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo-code.dto';
import { RoleAuth } from 'src/role/decorators';
import { Role } from 'src/role/Role.enum';

@RoleAuth(Role.ADMIN)
@UsePipes(new ValidationPipe({whitelist: true, transform: true}))
@Controller('promocode')
export class PromoCodeController {
  constructor(private readonly promoCodeService: PromoCodeService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() dto: CreatePromoCodeDto) {
    return this.promoCodeService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.promoCodeService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promoCodeService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() dto: UpdatePromoCodeDto
  ) {
    return this.promoCodeService.update(id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promoCodeService.remove(id);
  }
}
