import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagination, Pagination } from 'src/common/specialModules/pagination';
import { createCompareTimeSql } from 'src/common/utils/typeormUtil';
import { Attributecategory } from 'src/entity/productattributecategory.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateProductAttributecategoryDto, UpdateProductAttributecategoryDto } from './productattributecategoryDto';

@Injectable()
export class ProductattributecategoryService {
    constructor (
        @InjectRepository(Attributecategory) private usersRepository: Repository<Attributecategory>,
    ) {}
    /**
     * 
     * @param data 
     * @returns 新建品牌属性分类
     */
    async createProductattributecategory (data:CreateProductAttributecategoryDto) {
        const productattributecategory = this.usersRepository.create(data)
        return await this.usersRepository.save(productattributecategory)
    }
    /**
     * 
     * @param data 
     * @returns 修改品牌属性分类
     */
    async updateProductattributecategory (data:UpdateProductAttributecategoryDto) {
        const productattributecategory = this.usersRepository.create(data)
        return await this.usersRepository.save(productattributecategory)
    }
    
    /**
     * 品牌属性分类列表
     */
     async getProductattributecategoryList (pagination: IPagination, filter: any = {}) {
        // const startTime = filter.startTime;
        // const endTime = filter.endTime;
        // const timeSql = createCompareTimeSql(startTime, endTime);
    
        const query = getRepository(Attributecategory)
          .createQueryBuilder('attributecategory')
          .leftJoinAndSelect("attributecategory.attributes", "attributes")
        //   .andWhere(timeSql.sqlStr, timeSql.value)
          .take(pagination.limit)
          .skip(pagination.page)
        //   .orderBy('attributecategory.createTime', 'ASC');
    
        // console.log(query.getSql())
        const [results, total] = await query.getManyAndCount();
        return new Pagination<Attributecategory>({ results, total });
      }
    
    /**
     * 删除商品属性分类
     */
    async delProductattributecategoryList (ids: any[]) {
        return this.usersRepository.delete(ids)
    }

    /**
     * 
     * @param id 
     * @returns 查找商品属性详情
     */
    async findProductattributecategoryOne (id:any) {
        return await this.usersRepository.findOne(id)
    }

    async findProductattributes (cateId:string) {
      return this.usersRepository.findOne(cateId,{ relations:['attributes'] })
    }

    /**
     * 
     */

    async findAll () {
      return this.usersRepository.find()
    }

}
