import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome. Explore the exposed APIs for a todo-app.';
  }
}
