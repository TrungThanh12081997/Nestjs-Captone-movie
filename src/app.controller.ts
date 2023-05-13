import {
  Controller,
  Get,
  Param,
  HttpCode,
  Post,
  Req,
  Query,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ApiParam, ApiProperty } from '@nestjs/swagger';

interface person {
  id: number;
}

export class userType {
  @ApiProperty({
    description: 'id',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'email',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'ho_ten',
    type: String,
  })
  ho_ten: string;
}
@Controller('/app')
export class AppController {
  // hàm  tạo lấy giá trị service và module,bản chất là default value
  constructor(private readonly appService: AppService) {
    this.uName = 'avb'; // khai báo demo
  }
  // khai báo trước method hoặc value ( từ khóa diễn xuất )
  // private : chỉ trong oop
  // public : xài ở ngoài
  // protected : chỉ xài trong hàm con

  // thuộc tính
  uName = 'a';

  @Get('/get-hello/:idParam') // decorrator là GET,router ở truyền params
  @HttpCode(200)
  getHello(
    @Req() req: Request, // ko hiện swagger
    @Query() idQuery: string,
    @Param('idParam') idParam: string,
    @Body() body: person,
    // @Header() header:any
  ): string {
    // const { id} = req.query
    // const { idParams} = req.params
    // const {idBody,ten} = req.body
    // return this.appService.getHello();
    // return idParam;
    return idQuery;
  }

  // phương thức
  @Post('/get-total')
  getTotal(): number {
    return this.appService.getTotal(1, 2);
  }

  // @ApiParam({ name: 'id' })
  // @ApiBody()
  @Post('/get-demo/:id')
  getDemo(
    @Param() param: string,
    @Query('id') id: string,
    @Body()
    Body: userType,
  ) {
    return Body;
  }
}
// controller tạo API,req,response
