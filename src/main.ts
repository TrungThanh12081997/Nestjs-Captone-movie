/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('swagger')
    .setDescription('descripton')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // link api swagger
  SwaggerModule.setup('swagger', app, document);
  app.enableCors({
    origin: '*',
  });
  app.use(express.static('./public/img/')); // định vi source load tai nguyen
  await app.listen(8080);
}
bootstrap();
// tạo moduke mới

// nest g module user --no-spec && nest g controller user  --no-spec && nest g service user --no-spec
// 3 lệnh luôn =>  nest g resource quanLyRap --no-spec

// yarn add prisma @prisma/client && yarn prisma init && yarn prisma db pull && yarn prisma generate
// yarn add @nestjs/swagger swagger-ui-express
// yarn add -D @types/multer

// yarn add @nestjs/serve-static
