import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(appService: AppService) {
    appService
      .createUser()
      .then((user) => {
        console.log('user created successfully:', user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // using API
  @Post('/users')
  async createUser() {
    return this.createUser();
  }
}
