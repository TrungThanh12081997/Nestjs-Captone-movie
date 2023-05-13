import { Injectable } from '@nestjs/common';

@Injectable() // module service
export class AppService {
  getHello(): string {
    return 'Hello NOĐÈ World!';
  }

  getTotal(number:number,numberTwo:number): number {
    return (number + numberTwo);
  }
}
// PROVIDER xử lý tính toán ,CRUD