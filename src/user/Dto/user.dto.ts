/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export interface UserDto {
  user_id: number;
  full_name: string;
  email: string;
  pass_word: string;
  token: string;
  dateLogin: string;
}

export interface UserTypeDto {
  token: string;
  dateLogin: string;
}

export class FileUploadDto {
    // eslint-disable-next-line prettier/prettier
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
  }