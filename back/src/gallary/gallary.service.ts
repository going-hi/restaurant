import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gallary } from './schemas/gallary.schema';
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { PaginationGallaryDto, CreateGallaryDto, UpdateGallaryDto } from './dto';
import { ReturnPagination } from 'src/common/return-pagination.dto';

@Injectable()
export class GallaryService {
  constructor(
    @InjectModel(Gallary.name) private gallaryModel: Model<Gallary>,
    private readonly fileService: FileService
  ) {}
  async create(dto: CreateGallaryDto, file: Express.Multer.File) {
    const url = await this.fileService.upload(file)
    const gallary = await this.gallaryModel.create({photo: url, tags: dto.tags})
    return gallary
  }

  async findAll({tagName, count, page}: PaginationGallaryDto) {
    let find = {}
    tagName ? find['tags'] =  {$all: [tagName]} : {}
    const gallaries = await this.gallaryModel.find(find, {}, {limit: count, skip: page * count - count, sort: {createAt: 1}})
    const countGallary= await this.gallaryModel.countDocuments(find)
    return new ReturnPagination(gallaries, countGallary, count)
  }

  async findOne(id: string) {
    const gallary = await this.gallaryModel.findById(id)
    if(!gallary) throw new NotFoundException()
    return gallary
  }

  async update(id: string, dto: UpdateGallaryDto) {
    const gallary = await this.findOne(id)
    gallary.tags = dto.tags
    return await gallary.save()
  }

  async remove(id: string) {
    const {photo} = await this.findOne(id)
    await this.gallaryModel.deleteOne({_id: id})
    await this.fileService.delete(photo)
  }
}
