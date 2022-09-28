import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/entity/product.entity';

export class createSkustockDto {
  @ApiProperty({ description: '产品id' })
  @IsNotEmpty({ message: '产品id不能为空' })
  productId: Product;

  @ApiProperty({ description: '产品id' })
  @IsNotEmpty({ message: '产品id不能为空' })
  product: number;

  @ApiProperty({ description: 'sku编码' })
  skuCode: string;

  @ApiProperty({ description: '价格' })
  price: number;

  @ApiProperty({ description: '库存' })
  stock: number;

  @ApiProperty({ description: '预警库存' })
  lowStock: number;

  @ApiProperty({ description: '规格属性1' })
  sp1: string;

  @ApiProperty({ description: '规格属性2' })
  sp2: string;

  @ApiProperty({ description: '规格属性3' })
  sp3: string;

  @ApiProperty({ description: '展示图片' })
  pic: string;

  @ApiProperty({ description: '销量' })
  sale: number;

  @ApiProperty({ description: '单品促销价格' })
  promotionPrice: number;

  @ApiProperty({ description: '锁定库存' })
  lockStock: number;
}
