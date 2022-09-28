import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Base } from "./base.entity";
import { IsNotEmpty } from "class-validator";
import { Product } from "./product.entity";
export enum statusTypes {
    yes = 1,
    no =0

}
@Entity('brand')
export class Brand extends Base {
    @Column({ length: 64, comment:'品牌名称' })
    @IsNotEmpty({ message:"名称不能为空" })
    @ApiProperty({ description: '品牌名称' })
    name: string

    @Column({ length: 8, comment:'首字母' })
    @ApiProperty({ description: '首字母' })
    firstLetter: string

    @Column({ type:"int", comment:'排序' })
    @ApiProperty({ description: '排序' })
    sort: number

    @Column({ type:"int", comment:'是否为品牌制造商 0 -> 不是; 1 -> 是', default:0   })
    @ApiProperty({ description: '是否为品牌制造商 0 -> 不是; 1 -> 是' })
    factoryStatus: statusTypes

    @Column({ comment: '显示状态：0->不显示；1->显示', type: 'int',default:0  })
    @ApiProperty({ description: '显示状态：0->不显示；1->显示' })
    showStatus: statusTypes;

    @Column({ comment: '产品数量', type: 'int', default: 0 })
    @ApiProperty({ description: '产品数量' })
    productCount: number;

    @Column({ comment: '产品评论数量', type: 'int', default: 0 })
    @ApiProperty({ description: '产品评论数量' })
    productCommentCount: number;

    @Column({ length: 255, comment:'品牌logo' })
    @ApiProperty({ description: '品牌logo' })
    logo: string

    @Column({ length: 255, comment:'专区大图' })
    @ApiProperty({ description: '专区大图' })
    bigPic: string

    @Column({ type:'text', comment:'品牌故事' })
    @ApiProperty({ description: '品牌故事' })
    brandStory: string

    @OneToMany(() => Product, product => product.brand)
    products: Product[];
}

