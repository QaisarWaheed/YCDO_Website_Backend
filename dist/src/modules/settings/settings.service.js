"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const setting_schema_1 = require("./setting.schema");
let SettingsService = class SettingsService {
    settingModel;
    constructor(settingModel) {
        this.settingModel = settingModel;
    }
    async onModuleInit() {
        const count = await this.settingModel.countDocuments();
        if (count === 0) {
            await this.settingModel.insertMany([
                { key: 'contact_phone', value: '03002022008', label: 'Phone Number', group: 'contact' },
                { key: 'contact_email', value: 'info@ycdo.org.pk', label: 'Email', group: 'contact' },
                { key: 'contact_address', value: 'Qasimpur Colony, Multan, Pakistan', label: 'Address', group: 'contact' },
                { key: 'contact_working_hours', value: 'Mon–Sat: 9:00 AM – 5:00 PM', label: 'Working Hours', group: 'contact' },
                { key: 'bank_account_title', value: 'Youth Community Development Organization', label: 'Account Title', group: 'bank' },
                { key: 'bank_account_number', value: '0000-0000-0000', label: 'Account Number', group: 'bank' },
                { key: 'bank_name', value: 'Habib Bank Limited', label: 'Bank Name', group: 'bank' },
                { key: 'bank_iban', value: 'PK00HABB0000000000000000', label: 'IBAN', group: 'bank' },
                { key: 'facebook_url', value: 'https://facebook.com/YCDOPAKISTAN', label: 'Facebook', group: 'social' },
                { key: 'twitter_url', value: 'https://x.com/ycdoofficial', label: 'Twitter/X', group: 'social' },
                { key: 'instagram_url', value: '', label: 'Instagram', group: 'social' },
                { key: 'youtube_url', value: '', label: 'YouTube', group: 'social' },
            ]);
            return;
        }
        const ensure = [
            { key: 'contact_working_hours', value: 'Mon–Sat: 9:00 AM – 5:00 PM', label: 'Working Hours', group: 'contact' },
            { key: 'instagram_url', value: '', label: 'Instagram', group: 'social' },
            { key: 'youtube_url', value: '', label: 'YouTube', group: 'social' },
        ];
        for (const row of ensure) {
            await this.settingModel.updateOne({ key: row.key }, { $setOnInsert: { ...row } }, { upsert: true });
        }
    }
    findAll() {
        return this.settingModel.find().sort({ group: 1, key: 1 });
    }
    findByKey(key) {
        return this.settingModel.findOne({ key });
    }
    findByGroup(group) {
        return this.settingModel.find({ group }).sort({ key: 1 });
    }
    upsert(key, value) {
        return this.settingModel.findOneAndUpdate({ key }, { value }, { new: true, upsert: true });
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(setting_schema_1.Setting.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SettingsService);
//# sourceMappingURL=settings.service.js.map