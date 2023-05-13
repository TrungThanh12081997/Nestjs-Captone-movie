import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuanLyDatVeService } from './quan-ly-dat-ve.service';
import { datVe, lichChieu } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('quản lý đặt vé')
@Controller('/api/quanLyDatVe')
export class QuanLyDatVeController {
  constructor(private readonly quanLyDatVeService: QuanLyDatVeService) {}

  @Post('/datve')
  DatVe(@Body() body: datVe) {
    return this.quanLyDatVeService.datVe(body);
  }

  @Get('/layDanhSachPhongVe')
  LayDanhSachPhongVe() {
    return this.quanLyDatVeService.layDanhSachPhongVe();
  }

  @Post('/taoLichChieu')
  TaoLichChieu(@Body() body: lichChieu) {
    return this.quanLyDatVeService.TaoLichChieu(body);
  }
}
