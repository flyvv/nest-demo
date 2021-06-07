"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const common_1 = require("@nestjs/common");
const port = process.env.PORT || 8080;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule, {
        cors: true,
        logger: nest_winston_1.WinstonModule.createLogger({}),
    });
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 1000,
    }));
    app.setGlobalPrefix('/api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('NEST STUDY')
        .setDescription('API 文档')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('user')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.use(helmet());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        skipMissingProperties: false,
        forbidUnknownValues: true,
    }));
    await app.listen(port);
    common_1.Logger.log(`http://localhost:${port}`, '服务启动成功');
}
bootstrap();
//# sourceMappingURL=main.js.map