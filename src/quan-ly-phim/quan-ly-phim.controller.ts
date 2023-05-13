// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Query,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// // import { QuanLyPhimService } from './quan-ly-phim.service';
// import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
// import { phim } from '@prisma/client';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { FileUploadDto } from './Dto/phim.dto';

// @ApiTags('Quản lý phim')
// @Controller('/api/quanLyPhim')
// export class QuanLyPhimController {
//   constructor(private readonly quanLyPhimService: QuanLyPhimService) {}
//   @ApiConsumes('multipart/form-data')
//   @ApiBody({
//     description: 'File upload',
//     type: FileUploadDto,
//   })
//   @Get('/layDanhSachBanner')
//   layDanhSachBanner() {
//     return this.quanLyPhimService.layDanhSachBanner();
//   }

//   @Get('/layDanhSachPhim')
//   layDanhSachphim(@Body() body: phim) {
//     return this.quanLyPhimService.layDanhSachphim(body);
//   }

//   @Get('/layDanhSachPhimPhanTrang')
//   layDanhSachphimPhanTrang(
//     @Query('soTrang') soTrang: number,
//     @Query('soPhanTuTrenTrang') soPhanTuTrenTrang: number,
//   ) {
//     return this.quanLyPhimService.layDanhSachphimPhanTrang(
//       Number(soTrang),
//       Number(soPhanTuTrenTrang),
//     );
//   }

//   @Get('/layDanhSachPhimTheoNgay')
//   // eslint-disable-next-line prettier/prettier
//   layDanhSachphimTheoNgay(@Body() data: { timestart: Date; timeend: Date }) {
//     return this.quanLyPhimService.layDanhSachphimTheoNgay(data);
//   }

//   @UseInterceptors(
//     FileInterceptor(
//       'file', // keyname
//       {
//         storage: diskStorage({
//           destination: process.cwd() + '/public/img',
//           filename: (req, file, callback) =>
//             callback(null, Date.now() + '_' + file.originalname),
//         }),
//       },
//     ),
//   )
//   @Post('/uploadHinhChoPhim/:ma_phim')
//   uploadHinhChoPhim(
//     @Param('ma_phim') ma_phim: string,
//     @UploadedFile() file: Express.Multer.File,
//   ) {
//     return this.quanLyPhimService.uploadHinhChoPhim(ma_phim.toString(), file);
//   }

//   @Post('/capNhatPhim/:ma_phim')
//   capNhatPhim(@Body() body: phim, @Param('ma_phim') ma_phim: string) {
//     return this.quanLyPhimService.capNhatPhim(body, ma_phim.toString());
//   }

//   @Post('/timPhimTheoTen')
//   timPhimTheoTen(@Body() body: phim) {
//     return this.quanLyPhimService.timPhimTheoTen(body);
//   }

//   @Delete('/xoaPhimTheoTen/:ma_phim')
//   xoaPhimTheoTen(@Param('ma_phim') ma_phim: number) {
//     return this.quanLyPhimService.xoaPhimTheoTen(Number(ma_phim));
//   }

//   @Get('/layThongTinPhim/:ma_phim')
//   layThongTinPhim(@Param('ma_phim') ma_phim: number) {
//     return this.quanLyPhimService.layThongTinPhim(Number(ma_phim));
//   }
// }
