import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagination, Pagination } from 'src/common/specialModules/pagination';
import { createCompareTimeSql } from 'src/common/utils/typeormUtil';
import { Attribute } from 'src/entity/productattribute.entity';
import { Category } from 'src/entity/productcategory.entity';
import { getConnection, getManager, getRepository, Repository, TreeRepository } from 'typeorm';
import { ProductattributeService } from '../productattribute/productattribute.service';

@Injectable()
export class ProductcategoryService {
  constructor(
    @InjectRepository(Category) private usersRepository: Repository<Category>,
    @InjectRepository(Category) private useTreeRepository: TreeRepository<Category>,
    private readonly productattributeService: ProductattributeService,
  ) {}
  /**
   *
   * @param params
   * @returns 创建分类
   */
  async createCategory(params) {
    const { name, icon, keywords, level, productUnit, sort, text, parentId, attributes } = params;
    const categoryDto = new Category();
    (categoryDto.name = name),
      // categoryDto.icon = 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      (categoryDto.icon = icon);
    categoryDto.keywords = keywords;
    categoryDto.level = level;
    categoryDto.productUnit = productUnit;
    categoryDto.sort = sort;
    categoryDto.text = text;
    if (attributes && attributes.length) {
      categoryDto.attributes = await this.productattributeService.getAttributeListIds(attributes);
    }
    if (parentId) {
      const parent = await this.usersRepository.findOne({
        where: {
          id: parentId,
        },
      });

      categoryDto.parent = parent;
    }
    const category = await this.useTreeRepository.save(categoryDto);
    return category;
  }

  async getTree() {
    const manager = getManager();
    const trees = await manager.getTreeRepository(Category).findTrees();
    return trees;
  }
  /**
   *
   * @param params
   * @returns 更新分类
   */
  async uploadCategory(params) {
    const {
      name,
      icon,
      keywords,
      level,
      productUnit,
      sort,
      text,
      parentId,
      id,
      attributes,
    } = params;
    const categoryDto = new Category();
    (categoryDto.name = name), (categoryDto.icon = icon);
    categoryDto.keywords = keywords;
    categoryDto.level = level;
    categoryDto.productUnit = productUnit;
    categoryDto.sort = sort;
    categoryDto.text = text;
    categoryDto.id = id;
    if (parentId) {
      const parent = await this.usersRepository.findOne({
        where: {
          id: parentId,
        },
      });

      categoryDto.parent = parent;
    } else {
      categoryDto.parent = null;
    }
    if (attributes && attributes.length) {
      categoryDto.attributes = await this.productattributeService.getAttributeListIds(attributes);
    }
    const category = await this.useTreeRepository.save(categoryDto);
    return category;
  }

  /**
   * 获取分类分页
   */
  async getCategoryList(pagination: IPagination, filter: any = {}) {
    const startTime = filter.startTime;
    const endTime = filter.endTime;
    const timeSql = createCompareTimeSql(startTime, endTime);

    const query = getRepository(Category)
      .createQueryBuilder('category')
      .andWhere(timeSql.sqlStr, timeSql.value)
      .take(pagination.limit)
      .skip(pagination.page)
      .orderBy('category.createTime', 'ASC');

    // console.log(query.getSql())
    const [results, total] = await query.getManyAndCount();
    return new Pagination<Category>({ results, total });
  }

  
  async getCategoryOne (id:any) {
    return await this.usersRepository.findOne({
      where: {
        id
      },
      relations: ["attributes"] 
    })
  }

}
