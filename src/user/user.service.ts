import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDto } from './Dto/user.dto';
import * as fs from 'fs';
// const prisma = new PrismaClient()
// import { nguoi_dung } from '@prisma/client';
// const compress_images = require("compress-images");

@Injectable()
export class UserService {
  prisma = new PrismaClient();
  async getUser(): Promise<[]> {
    return [];
  }

  async saveAvatar(userId: number, file: Express.Multer.File) {
    // const user = await this.prisma.nguoi_dung.findFirst({
    //   where: {
    //     id: Number(userId),
    //   },
    // });
    // const data = await fs.promises.readFile(
    //   process.cwd() + '/public/img/' + file.filename,
    // );
    // const result = `data:${file.mimetype};base64,${data.toString('base64')}`;
    // await fs.promises.unlink(process.cwd() + '/public/img/' + file.filename);

    // // user.hinh_dai_dien = result;
    // await this.prisma.nguoi_dung.update({
    //   data: { ...user, hinh_dai_dien: result },
    //   where: {
    //     id: Number(userId),
    //   },
    // });
    return 'result';
    // console.log('result', result);
    // return result;
    // return 'upload thanh cong';
  }
}
