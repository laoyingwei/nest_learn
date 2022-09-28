import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagination, Pagination } from 'src/common/specialModules/pagination';
import { Brand } from 'src/entity/brand.entity';
import { Product } from 'src/entity/product.entity';
import { Attributecategory } from 'src/entity/productattributecategory.entity';
import { Category } from 'src/entity/productcategory.entity';
import { getConnection, getManager, Repository } from 'typeorm';
import { BrandService } from '../brand/brand.service';
import { FeighttemplateService } from '../feighttemplate/feighttemplate.service';
import { status } from '../member/memberDto';
import { ProductattributecategoryService } from '../productattributecategory/productattributecategory.service';
import { ProductcategoryService } from '../productcategory/productcategory.service';
import { ProductfullreductionService } from '../productfullreduction/productfullreduction.service';
import { ProductladderService } from '../productladder/productladder.service';
import { SkustockService } from '../skustock/skustock.service';
import { createProductDto } from './productDto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private usersRepository: Repository<Product>,
    private readonly skustockService: SkustockService,
    private readonly productladderService: ProductladderService,
    private readonly productfullreductionService: ProductfullreductionService,
    private readonly productcategoryService: ProductcategoryService,
    private readonly brandService: BrandService,
    private readonly productattributecategoryService: ProductattributecategoryService,
    private readonly feighttemplateService: FeighttemplateService,
  ) {}

  /**
   *
   * @param data
   * @returns 新建商品
   */
  async createProduct(data: createProductDto) {
    const { skustocks } = data;
    // try {

    //     return await this.usersRepository.save(data)
    // } catch (error) {
    //     throw new HttpException('创建商品失败',500)
    // }
    // 开启事务
    await getManager().transaction(async transactionalEntityManager => {
      const isSameName = await this.usersRepository.findOne({ name: data.name });
      if (isSameName) throw new HttpException('商品名称已存在', 500);
      const newProduct = new Product();
      Object.keys(data).forEach(key => {
        newProduct[key] = data[key];
      });
      newProduct.category = await this.productcategoryService.getCategoryOne(data.categoryId);
      newProduct.attributecategory = await this.productattributecategoryService.findProductattributecategoryOne(
        data.attributecategoryId,
      );
      newProduct.brand = await this.brandService.findBrandOne(data.brandId);
      newProduct.feightTemplate = await this.feighttemplateService.findFeighttemplateOne(
        data.feightTemplateId,
      );

      const product: Product = await transactionalEntityManager.save(Product, newProduct);
      if (product && product.id) {
        skustocks.forEach(item => {
          item.productId = product;
        });
        const skustockResults = await this.skustockService.createSkustock(
          skustocks,
          transactionalEntityManager,
        );

        switch (product.promotionType) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            await this.productladderService.createProductladder(
              {
                ...data.discount,
                productId: product,
              },
              transactionalEntityManager,
            );
            break;
          case 4:
            await this.productfullreductionService.createProductfullreduction(
              {
                ...data.discount,
                productId: product,
              },
              transactionalEntityManager,
            );
            break;
          default:
            break;
        }
      }
    });
  }
  // relations:['skustocks','categoryId','brandId','ladders','attributecategoryId','feightTemplateId']
  async getProductDetail(id: any) {
    return this.usersRepository.findOne(id, { relations: [] });
  }
  /**
   * 获取产品
   */
  async getProductList(pagination: IPagination, filter: any = {}) {
    const query = this.usersRepository
      .createQueryBuilder('product')
      .where({ deleteStatus:0  })
      .take(pagination.limit)
      .skip(pagination.page)
      .orderBy('product.createTime', 'DESC');
    const [results, total] = await query.getManyAndCount();
    return new Pagination<Product>({ results, total });
  }

  /**
   * 上架
   */
  async editPublishStatus (params:{ id:number,status:number }) {
     return await  this.usersRepository.update(params.id,{
        publishStatus:params.status
      })

  }
}
