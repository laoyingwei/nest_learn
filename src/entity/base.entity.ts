import { Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

/**
* 表基类
*/

export class Base {

  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '创建时间', })
  @CreateDateColumn({ comment: '创建时间',type:'datetime'})
  createTime : Date;

  @ApiProperty({ description: '更新时间' })
  @CreateDateColumn({ comment: '更新时间',type:'datetime' })
  updateTime: Date;
}