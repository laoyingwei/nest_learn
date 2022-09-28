import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagination, Pagination } from 'src/common/specialModules/pagination';
import { createCompareTimeSql } from 'src/common/utils/typeormUtil';
import { Attribute } from 'src/entity/productattribute.entity';
import { getRepository, Repository } from 'typeorm';
import { ProductattributecategoryService } from '../productattributecategory/productattributecategory.service';
import { createProductattribute, updateProductattribute } from './productattributeDto';

@Injectable()
export class ProductattributeService {
  constructor(
    @InjectRepository(Attribute) private usersRepository: Repository<Attribute>,
    private readonly productattributecategoryService: ProductattributecategoryService,
  ) {}

  /**
   *
   * @param data
   * @returns 创建商品属性表
   */
  async createAttribute(data: createProductattribute) {
    const attributecategory = await this.productattributecategoryService.findProductattributecategoryOne(
      data.attributeCategoryId
    );
    data.productAttributeCategoryId = attributecategory;
    return await this.usersRepository.save(data);
  }
  /**
   *
   * @param data
   * @returns 修改商品属性表
   */
  async updateAttribute(data: updateProductattribute) {
    const attributecategory = await this.productattributecategoryService.findProductattributecategoryOne(
      data.attributeCategoryId
    );
    data.productAttributeCategoryId = attributecategory;
    return await this.usersRepository.save(data);
  }

  /**
   * 商品属性列表
   */
  /**
   * 获取分类分页
   */
  async getAttributeList(pagination: IPagination, filter: any = {}) {
    const startTime = filter.startTime;
    const endTime = filter.endTime;
    const timeSql = createCompareTimeSql(startTime, endTime);

    const query = getRepository(Attribute)
      .createQueryBuilder('attribute')
      .andWhere(timeSql.sqlStr, timeSql.value)
      .take(pagination.limit)
      .skip(pagination.page)
      .orderBy('category.createTime', 'ASC');

    // console.log(query.getSql())
    const [results, total] = await query.getManyAndCount();
    return new Pagination<Attribute>({ results, total });
  }
  /**
   *
   * @param ids
   * @returns 删除属性
   */
  async delAttributeList(ids: any[]) {
    return this.usersRepository.delete(ids);
  }

  async getAttributeListIds(ids: any[]) {
    return this.usersRepository.findByIds(ids);
  }

  async getOneAttribute (id:string) {
    return this.usersRepository.findOne(id)
  }  
}
