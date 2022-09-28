import { ApiProperty } from "@nestjs/swagger"

export enum chargeTypes {
    num = 0,
    weight = 1
}


export class craeteFeighttemplateDto  {


    @ApiProperty({ description:'运费模板名称' })
    name: string

 
    @ApiProperty({ description:'计价方式' })
    chargeType:chargeTypes

    @ApiProperty({ description:'默认重量' })
    firstWeight:number

    @ApiProperty({ description:'默认运费' })
    firstFee:number

    @ApiProperty({ description:'每增加重量' })
    continueWeight:number

    @ApiProperty({ description:'每增加重量增加的运费运费' })
    continueFee:number

    @ApiProperty({ description:'备注' })
    note: string
}