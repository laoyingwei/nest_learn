import { ApiProperty } from "@nestjs/swagger";


export class CreateMemberlevelDto {
    @ApiProperty({ description:"等级名称" })
    name: string

    @ApiProperty({ description:"等级" })
    level: number
}