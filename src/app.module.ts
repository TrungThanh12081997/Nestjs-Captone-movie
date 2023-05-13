import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { QuanLyDatVeModule } from './quan-ly-dat-ve/quan-ly-dat-ve.module';
import { QuanLyPhimModule } from './quan-ly-phim/quan-ly-phim.module';
import { QuanLyNguoiDungModule } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.module';
import { QuanLyRapModule } from './quan-ly-rap/quan-ly-rap.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    QuanLyDatVeModule,
    QuanLyPhimModule,
    QuanLyNguoiDungModule,
    QuanLyRapModule,
    JwtModule.register({}),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
