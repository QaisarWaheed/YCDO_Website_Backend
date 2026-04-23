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
exports.UpdateDonationStatusDto = exports.CreateDonationDto = void 0;
const class_validator_1 = require("class-validator");
const shared_1 = require("@ycdo/shared");
class CreateDonationDto {
    donorName;
    email;
    phone;
    amount;
    campaign;
    method;
    isZakat;
}
exports.CreateDonationDto = CreateDonationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "donorName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDonationDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(shared_1.DonationCampaign),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "campaign", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(shared_1.PaymentMethod),
    __metadata("design:type", String)
], CreateDonationDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDonationDto.prototype, "isZakat", void 0);
class UpdateDonationStatusDto {
    status;
}
exports.UpdateDonationStatusDto = UpdateDonationStatusDto;
__decorate([
    (0, class_validator_1.IsEnum)(shared_1.DonationStatus),
    __metadata("design:type", String)
], UpdateDonationStatusDto.prototype, "status", void 0);
//# sourceMappingURL=create-donation.dto.js.map