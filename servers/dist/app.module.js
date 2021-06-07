"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nest_winston_1 = require("nest-winston");
const index_1 = require("./config/index");
const user_module_1 = require("./system/user/user.module");
const role_module_1 = require("./system/roles/role.module");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: index_1.default,
                isGlobal: true,
            }),
            nest_winston_1.WinstonModule.forRoot({}),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => ({
                    type: config.get('database.type'),
                    host: config.get('database.host'),
                    port: config.get('database.port'),
                    username: config.get('database.username'),
                    password: config.get('database.password'),
                    database: config.get('database.database'),
                    charset: config.get('database.charset'),
                    multipleStatements: config.get('datebase.multipleStatements'),
                    entities: ['dist/**/*.entity{.ts,.js}'],
                    synchronize: config.get('database.synchronize'),
                    logging: config.get('database.logging'),
                    logger: config.get('database.logger'),
                }),
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
            role_module_1.RoleModule,
        ],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map