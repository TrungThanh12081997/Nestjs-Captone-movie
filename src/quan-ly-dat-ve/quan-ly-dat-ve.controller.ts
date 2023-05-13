import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { QuanLyDatVeService } from './quan-ly-dat-ve.service';
import { datVe, lichChieu } from '@prisma/client';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DatVeDto } from './dto/datVe.dto';

@ApiTags('Quản lý đặt vé')
@Controller('/api/quanLyDatVe')
export class QuanLyDatVeController {
  constructor(private readonly quanLyDatVeService: QuanLyDatVeService) {}

  @ApiBody({
    description: 'Đặt vé',
    type: DatVeDto,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post('/datve')
  DatVe(@Body() body: datVe) {
    return this.quanLyDatVeService.datVe(body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get('/layDanhSachPhongVe')
  LayDanhSachPhongVe() {
    return this.quanLyDatVeService.layDanhSachPhongVe();
  }

  @ApiBody({
    description: 'Tạo lịch chiếu',
    type: DatVeDto,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post('/taoLichChieu')
  TaoLichChieu(@Body() body: lichChieu) {
    return this.quanLyDatVeService.TaoLichChieu(body);
  }
}
