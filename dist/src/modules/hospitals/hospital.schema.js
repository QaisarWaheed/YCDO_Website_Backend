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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalSchema = exports.Hospital = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Hospital = class Hospital {
    name;
    address;
    city;
    phone;
    services;
    timings;
    coordinates;
    photos;
    isActive;
};
exports.Hospital = Hospital;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Multan' }),
    __metadata("design:type", String)
], Hospital.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hospital.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Hospital.prototype, "services", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hospital.prototype, "timings", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { lat: Number, lng: Number },
        default: { lat: 30.1575, lng: 71.5249 },
    }),
    __metadata("design:type", Object)
], Hospital.prototype, "coordinates", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Hospital.prototype, "photos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Hospital.prototype, "isActive", void 0);
exports.Hospital = Hospital = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Hospital);
exports.HospitalSchema = mongoose_1.SchemaFactory.createForClass(Hospital);
exports.HospitalSchema.index({ city: 1 });
exports.HospitalSchema.index({ isActive: 1 });
//# sourceMappingURL=hospital.schema.js.map