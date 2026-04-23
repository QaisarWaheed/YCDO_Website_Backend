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
exports.VolunteersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const volunteer_schema_1 = require("./volunteer.schema");
let VolunteersService = class VolunteersService {
    volunteerModel;
    constructor(volunteerModel) {
        this.volunteerModel = volunteerModel;
    }
    create(dto) {
        return this.volunteerModel.create(dto);
    }
    findAll() {
        return this.volunteerModel.find().sort({ createdAt: -1 });
    }
    async updateStatus(id, status) {
        const volunteer = await this.volunteerModel.findByIdAndUpdate(id, { status }, { new: true });
        if (!volunteer)
            throw new common_1.NotFoundException('Volunteer not found');
        return volunteer;
    }
    async remove(id) {
        const volunteer = await this.volunteerModel.findByIdAndDelete(id);
        if (!volunteer)
            throw new common_1.NotFoundException('Volunteer not found');
        return { ok: true };
    }
};
exports.VolunteersService = VolunteersService;
exports.VolunteersService = VolunteersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(volunteer_schema_1.Volunteer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VolunteersService);
//# sourceMappingURL=volunteers.service.js.map