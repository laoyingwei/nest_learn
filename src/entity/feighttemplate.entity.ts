import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";

export enum chargeTypes {
    num = 0,
    weight = 1
}

@Entity('feighttemplate',{ name:'运费模板' })
export class Feighttemplate extends Base {

    @Column({ comment:'运费模板名称',length:64 })
    @ApiProperty({ description:'运费模板名称' })
    name: string

    @Column({ comment:'计价方式 0 ->计件 1->计重', default:chargeTypes.num })
    @ApiProperty({ description:'计价方式 0 ->计件 1->计重' })
    chargeType:chargeTypes

    @Column({ comment:'默认重量', type:'decimal', precision:10,scale:2,default:0})
    @ApiProperty({ description:'默认重量' })
    firstWeight:number

    @Column({ comment:'默认运费', type:'decimal', precision:10, scale:2,default:0})
    @ApiProperty({ description:'默认运费' })
    firstFee:number

    @Column({ comment:'每增加重量', type:'decimal', precision:10, scale:2,default:0})
    @ApiProperty({ description:'每增加重量' })
    continueWeight:number

    @Column({ comment:'每增加重量增加的运费运费', type:'decimal', precision:10, scale:2,default:0})
    @ApiProperty({ description:'每增加重量增加的运费运费' })
    continueFee:number

    @Column({ comment:'备注',length:500 })
    @ApiProperty({ description:'备注' })
    note: string
   


    @OneToMany(
        () => Product,
        skustock => skustock.feightTemplate,
      )
      products: Product[];
    

}