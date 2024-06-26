 
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.create(module);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
  }
  
  bootstrap();
  