import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity('memberlevel')
export class Memberlevel extends Base {
    
    @Column({ comment:'等级名称',length:64,unique:true })
    @ApiProperty({ description:"等级名称" })
    name: string

    @Column({ comment:'等级',type:'int',default:0 })
    @ApiProperty({ description:"等级" })
    level: number
    
}