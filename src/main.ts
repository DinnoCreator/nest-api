import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const corsOptions = {optionsSuccessStatus: 200, Credential:true, origin:'https://movie-viewer.onrender.com',};
  app.enableCors(corsOptions);
  await app.listen(3333);
}
bootstrap();