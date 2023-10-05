import { Controller, Get } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { c } from '@dgs/contracts'

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @TsRestHandler(c.getHealthz)
  getHealthz() {
    return tsRestHandler(c.getHealthz, async () => {
      return {
        status: 200,
        body: {
          ok: true
        }
      }
    })
  }
}
