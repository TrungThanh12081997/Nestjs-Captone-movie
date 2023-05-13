/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class DangNhapDto {

    @ApiProperty()
    email: string;

    @ApiProperty()
    mat_khau: string;
}