"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const hospitals_module_1 = require("./modules/hospitals/hospitals.module");
const projects_module_1 = require("./modules/projects/projects.module");
const news_module_1 = require("./modules/news/news.module");
const events_module_1 = require("./modules/events/events.module");
const gallery_module_1 = require("./modules/gallery/gallery.module");
const donations_module_1 = require("./modules/donations/donations.module");
const volunteers_module_1 = require("./modules/volunteers/volunteers.module");
const appointments_module_1 = require("./modules/appointments/appointments.module");
const contacts_module_1 = require("./modules/contacts/contacts.module");
const upload_module_1 = require("./modules/upload/upload.module");
const settings_module_1 = require("./modules/settings/settings.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                    connectionFactory: (connection) => {
                        connection.on('connected', () => console.log('✅ MongoDB Atlas connected'));
                        connection.on('error', (err) => console.error('❌ MongoDB error:', err));
                        return connection;
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            hospitals_module_1.HospitalsModule,
            projects_module_1.ProjectsModule,
            news_module_1.NewsModule,
            events_module_1.EventsModule,
            gallery_module_1.GalleryModule,
            donations_module_1.DonationsModule,
            volunteers_module_1.VolunteersModule,
            appointments_module_1.AppointmentsModule,
            contacts_module_1.ContactsModule,
            upload_module_1.UploadModule,
            settings_module_1.SettingsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map