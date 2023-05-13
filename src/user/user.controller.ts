// import { user } from '@prisma/client';
// import { nguoi_dung } from '@prisma/client';
import { FileUploadDto } from './Dto/user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Body,
  UseGuards,
  HttpException,
  Headers,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Param, UploadedFile } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { File } from 'buffer';
// dto : data transfer object

// @UseGuards(AuthGuard("jwt"))
// ở đây nếu khóa hết user
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
    private config: ConfigService,
  ) {}

  @UseInterceptors(
    FileInterceptor(
      'file', // keyname
      {
        storage: diskStorage({
          destination: process.cwd() + '/public/img',
          filename: (req, file, callback) =>
            callback(null, Date.now() + '_' + file.originalname),
        }),
      },
    ), // middleware để xử lý hình
  )
  //
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File upload',
    type: FileUploadDto,
  })
  // upload swagger upload
  @Post('/upload-avatar/:user_id')
  uploadAva(
    @Param('user_id') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      return this.UserService.saveAvatar(Number(userId), file);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @ApiBearerAuth() // Bear khóa swagger
  @UseGuards(AuthGuard('jwt')) // middle cua jwt
  @Get('/get-user')
  getUser(
    @Body() body: any,
    @Headers('authorization') auth: string,
  ): Promise<any[]> {
    try {
      const data = this.config.get('TEST_ENV');
      //   throw new HttpException('lỗi BE', 200);

      return this.UserService.getUser();
    } catch (err) {
      throw new HttpException(err, 404);
      //   throw new HttpException('lỗi BE', HttpStatus.NOT_FOUND);
    }
  }

  @Get('/get-user/:id')
  getUserById() {
    return 'get user by id';
  }
}
