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
exports.VolunteerSchema = exports.Volunteer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const shared_1 = require("@ycdo/shared");
let Volunteer = class Volunteer {
    name;
    email;
    phone;
    skills;
    availability;
    status;
};
exports.Volunteer = Volunteer;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Volunteer.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Volunteer.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Volunteer.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Volunteer.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Volunteer.prototype, "availability", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shared_1.VolunteerStatus, default: shared_1.VolunteerStatus.PENDING }),
    __metadata("design:type", String)
], Volunteer.prototype, "status", void 0);
exports.Volunteer = Volunteer = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Volunteer);
exports.VolunteerSchema = mongoose_1.SchemaFactory.createForClass(Volunteer);
//# sourceMappingURL=volunteer.schema.js.map