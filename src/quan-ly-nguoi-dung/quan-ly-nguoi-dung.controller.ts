/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  Headers,
  Header,
  Req,
  HttpException
} from '@nestjs/common';
import { QuanLyNguoiDungService } from './quan-ly-nguoi-dung.service';
import { nguoiDung } from '@prisma/client';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { DangNhapDto } from './Dto/nguoiDung.dto';
import { AuthGuard } from '@nestjs/passport';


// @UseGuards(AuthGuard("jwt"))
@ApiTags('quản lý người dùng')
@Controller('/api/quanLyNguoiDung')
export class QuanLyNguoiDungController {
  constructor(
    private readonly quanLyNguoiDungService: QuanLyNguoiDungService,
  ) { }


  @Get('/layDanhSachLoaiNguoiDung')
  // @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  LayDanhSachLoaiNguoiDung(
    @Headers('authorization') auth: string
  ): Promise<string[]> | string {
    try {
      return auth
      // console.log('auth',auth)
      // return this.quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
    } catch (err) {
      throw new HttpException(err, 404);
    }
  }

  @ApiBody({
    description: 'Đăng nhập',
    type: DangNhapDto,
  })
  @Post('/dangNhap')
  dangNhap(@Body() body: nguoiDung) {
    return this.quanLyNguoiDungService.dangNhap(body);
  }

  @Post('/dangKy')
  dangKy(@Body() body: nguoiDung) {
    return this.quanLyNguoiDungService.dangKy(body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get('/layDanhSachNguoiDung')
  layDanhSachNguoiDung() {
    return this.quanLyNguoiDungService.layDanhSachNguoiDung();
  }

  @UseGuards(AuthGuard("jwt"))
  @Get('/layDanhSachNguoiDungPhanTrang')
  layDanhSachNguoiDungPhanTrang(
    @Query('soTrang') soTrang: number,
    @Query('soPhanTuTrenTrang') soPhanTuTrenTrang: number,
  ) {
    return this.quanLyNguoiDungService.layDanhSachNguoiDungPhanTrang(
      Number(soTrang),
      Number(soPhanTuTrenTrang),
    );
  }

  @UseGuards(AuthGuard("jwt"))
  @Get('/timKiemNguoiDung')
  timKiemNguoiDung(@Body() body: nguoiDung) {
    return this.quanLyNguoiDungService.timKiemNguoiDung(body);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get('/timKiemNguoiDungPhanTrang')
  timKiemNguoiDungPhanTrang(
    @Body() body: nguoiDung,
    @Query('soTrang') soTrang: number,
    @Query('soPhanTuTrenTrang') soPhanTuTrenTrang: number,
  ) {
    return this.quanLyNguoiDungService.timKiemNguoiDungPhanTrang(
      body,
      Number(soTrang),
      Number(soPhanTuTrenTrang),
    );
  }

  @UseGuards(AuthGuard("jwt"))
  @Post('/thongTinTaiKhoan/:id')
  thongTinTaiKhoan(@Body() body: nguoiDung, @Param('id') id: string) {
    return this.quanLyNguoiDungService.thongTinTaiKhoan(body, id.toString());
  }

  @UseGuards(AuthGuard("jwt"))
  @Post('/layThongTinNguoiDung/:id')
  layThongTinNguoiDung(@Param('id') id: string) {
    return this.quanLyNguoiDungService.layThongTinNguoiDung(id.toString());
  }

  @UseGuards(AuthGuard("jwt"))
  @Post('/themNguoiDung')
  themNguoiDung(@Body() body: nguoiDung) {
    return this.quanLyNguoiDungService.themNguoiDung(body);
  }

  @Put('/capNhatThongTinNguoiDung/:id')
  capNhatThongTinNguoiDungByIdParam(
    @Body() body: nguoiDung,
    @Param('id') id: string,
  ) {
    return this.quanLyNguoiDungService.capNhatThongTinNguoiDungByIdParam(
      body,
      Number(id),
    );
  }

  @Post('/capNhatThongTinNguoiDung')
  capNhatThongTinNguoiDung(@Body() body: nguoiDung) {
    return this.quanLyNguoiDungService.capNhatThongTinNguoiDung(
      body,
    );
  }


  @Delete('/xoaNguoiDung/:id')
  XoaNguoiDung(@Param('id') id: string) {
    return this.quanLyNguoiDungService.xoaNguoiDung(Number(id));
  }
}
