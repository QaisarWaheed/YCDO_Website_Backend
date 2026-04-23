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
exports.DonationSchema = exports.Donation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const shared_1 = require("@ycdo/shared");
let Donation = class Donation {
    donorName;
    email;
    phone;
    amount;
    campaign;
    method;
    isZakat;
    status;
};
exports.Donation = Donation;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Donation.prototype, "donorName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Donation.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Donation.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Donation.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shared_1.DonationCampaign }),
    __metadata("design:type", String)
], Donation.prototype, "campaign", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shared_1.PaymentMethod }),
    __metadata("design:type", String)
], Donation.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Donation.prototype, "isZakat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shared_1.DonationStatus, default: shared_1.DonationStatus.PENDING }),
    __metadata("design:type", String)
], Donation.prototype, "status", void 0);
exports.Donation = Donation = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Donation);
exports.DonationSchema = mongoose_1.SchemaFactory.createForClass(Donation);
//# sourceMappingURL=donation.schema.js.map