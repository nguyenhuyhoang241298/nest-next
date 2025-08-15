import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(app.get(AuthGuard));
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
