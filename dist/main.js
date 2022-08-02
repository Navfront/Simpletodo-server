"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function start() {
    const PORT = process.env.PORT || 5500;
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const config = new swagger_1.DocumentBuilder()
            .setTitle('ToDo Server')
            .setDescription('NESTJS Server for my SimpleToDo app.')
            .setVersion('1.0.0')
            .addTag('Navfront.ru')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/api/docs', app, document);
        await app.listen(PORT, () => {
            console.log(`Server starts on ${PORT} port!`);
        });
    }
    catch (e) {
        console.log(e);
    }
}
start();
//# sourceMappingURL=main.js.map