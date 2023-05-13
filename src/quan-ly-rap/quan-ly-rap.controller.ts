import { QuanLyRapService } from './quan-ly-rap.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
@ApiTags('Quản lý phim')
@Controller('/api/quanLyRap')
export class QuanLyRapController {
  constructor(private readonly quanLyRapService: QuanLyRapService) {}

  @Get('/layThongTinHeThongRap')
  layThongTinHeThongRap() {
    return this.quanLyRapService.layThongTinHeThongRap();
  }

  @Get('/layThongTinCumRapTheoHeThong/:ma_cum_rap')
  layThongTinCumRapTheoHeThong(@Param('ma_cum_rap') ma_cum_rap: number) {
    return this.quanLyRapService.layThongTinCumRapTheoHeThong(ma_cum_rap);
  }

  @Get('/layThongTinLichChieuHeThongRap/:ma_rap')
  layThongTinLichChieuHeThongRap(@Param('ma_rap') ma_rap: number) {
    return this.quanLyRapService.layThongTinLichChieuHeThongRap(ma_rap);
  }

  @Get('/layThongTinLichChieuPhim/:ma_phim')
  layThongTinLichChieuPhim(@Param('ma_phim') ma_phim: number) {
    return this.quanLyRapService.layThongTinLichChieuPhim(Number(ma_phim));
  }
}
