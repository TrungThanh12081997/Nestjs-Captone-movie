import { HttpException, Injectable } from '@nestjs/common';
import { CreateQuanLyDatVeDto } from './dto/create-quan-ly-dat-ve.dto';
import { PrismaClient, lichChieu } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class QuanLyDatVeService {
  async datVe(createQuanLyDatVeDto: CreateQuanLyDatVeDto) {
    try {
      const { ma_ghe, ma_lich_chieu, tai_khoan } = createQuanLyDatVeDto;

      await prisma.datVe.create({
        data: {
          ma_ghe,
          ma_lich_chieu,
          tai_khoan,
        },
      });
      return 'tạo lịch đặt vé ok';
    } catch (err) {
      throw new HttpException(err, 404)
    }
  }

  async layDanhSachPhongVe() {
    try {

      const danhSachPhongve = await prisma.rapPhim.findMany({
        include: {
          cumRap: true
        },

      });
      return danhSachPhongve;
    } catch (err) {
      throw new HttpException(err, 404)
    }
  }

  async TaoLichChieu(body: lichChieu) {
    try {

      await prisma.lichChieu.create({
        data: body,

      });
      return 'tạo lịch chiếu ok';
    } catch (err) {

      throw new HttpException(err, 404)
    }
  }


}
