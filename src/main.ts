import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import Configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swaggar config
  const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);


  await app.listen(Configuration().port);
}
bootstrap();
