import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
  Entity,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Orderitem } from './orderitem.entity';
import { Product } from './product.entity';
import { Attribute } from './productattribute.entity';

@Entity('category',{ name:'商品分类表' })
@Tree('closure-table')
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id' })
  id: number;

  @Column({ comment: '名称', nullable: true })
  @ApiProperty({ description: '名称' })
  name: string;

  @Column({ comment: '等级 0 一级 1 二级', type: 'int', default: 0 })
  @ApiProperty({ description: '等级' })
  level: type;

  @Column({ comment: '商品数量', type: 'int', default: 0 })
  @ApiProperty({ description: '商品数量' })
  productCount: number;

  @Column({ comment: '商品单位', type: 'varchar', nullable: true, length: 64 })
  @ApiProperty({ description: '商品单位' })
  productUnit: string;

  @Column({ comment: '是否显示在导航栏：0->不显示；1->显示', type: 'int', default: 0 })
  @ApiProperty({ description: '是否显示在导航栏：0->不显示；1->显示' })
  navStatus: type;

  @Column({ comment: '显示状态：0->不显示；1->显示', type: 'int', default: 0 })
  @ApiProperty({ description: '显示状态：0->不显示；1->显示' })
  showStatus: type;

  @Column({ comment: '排序', type: 'int' })
  @ApiProperty({ description: '排序' })
  sort: number;

  @Column({ comment: '图标', type: 'varchar' })
  @ApiProperty({ description: '图标' })
  icon: string;

  @Column({ comment: '关键字', type: 'varchar', length: 250 })
  @ApiProperty({ description: '关键字' })
  keywords: string;

  @Column({ comment: '描述', type: 'text' })
  @ApiProperty({ description: '描述' })
  text: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;

  @ApiProperty({ description: '创建时间' })
  @CreateDateColumn({ comment: '创建时间', type: 'datetime' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  @CreateDateColumn({ comment: '更新时间', type: 'datetime' })
  updateTime: Date;


  @ManyToMany(() => Attribute)
  @JoinTable()
  attributes: Attribute[];


  @OneToMany(() => Product, product => product.category)
  products: Product[];

  @OneToMany(() => Orderitem, orderitem => orderitem.category)
  orderitems: Orderitem[];
}

export enum type {
  have = 1,
  no = 0,
}
