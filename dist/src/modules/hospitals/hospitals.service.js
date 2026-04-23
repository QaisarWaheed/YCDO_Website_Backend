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
exports.HospitalsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hospital_schema_1 = require("./hospital.schema");
let HospitalsService = class HospitalsService {
    hospitalModel;
    constructor(hospitalModel) {
        this.hospitalModel = hospitalModel;
    }
    async onModuleInit() {
        const count = await this.hospitalModel.countDocuments();
        if (count > 0)
            return;
        await this.hospitalModel.insertMany([
            {
                name: 'YCDO Hospital & Diagnostic Center',
                address: 'Masoom Shah Road, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.1575, lng: 71.5249 },
                services: ['OPD', 'Laboratory', 'Emergency'],
                timings: 'Mon-Sat: 8AM-8PM',
            },
            {
                name: 'YCDO Hospital & Diagnostic Center',
                address: 'Surajkund Road, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.195, lng: 71.475 },
                services: ['OPD', 'Blood Bank', 'Laboratory'],
                timings: 'Mon-Sat: 8AM-8PM',
            },
            {
                name: 'YCDO Hospital & Diagnostic Center',
                address: 'Budhla Sant, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.21, lng: 71.51 },
                services: ['OPD', 'Free TB Screening'],
                timings: 'Mon-Sat: 9AM-5PM',
            },
            {
                name: 'YCDO Eye Hospital & Diagnostic Center',
                address: 'Hasanabad Gate No.2, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.18, lng: 71.49 },
                services: ['Eye Care', 'Surgery', 'OPD'],
                timings: 'Mon-Sat: 9AM-5PM',
            },
            {
                name: 'YCDO Hospital & Diagnostic Center (HQ)',
                address: 'Qasimpur Colony, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.165, lng: 71.485 },
                services: ['OPD', 'Admin', 'Emergency', 'Laboratory'],
                timings: 'Mon-Sun: 8AM-10PM',
            },
            {
                name: 'YCDO Health Care Center',
                address: 'Delhi Gate, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.17, lng: 71.5 },
                services: ['OPD', 'Basic Care'],
                timings: 'Mon-Sat: 9AM-5PM',
            },
            {
                name: 'YCDO Health Care Center',
                address: 'Basti Nagina Abad, Multan',
                city: 'Multan',
                phone: '03002022008',
                coordinates: { lat: 30.14, lng: 71.47 },
                services: ['OPD', 'Water Filtration'],
                timings: 'Mon-Sat: 9AM-3PM',
            },
        ]);
    }
    findAll(city) {
        const filter = city ? { city } : {};
        return this.hospitalModel.find(filter).sort({ createdAt: -1 });
    }
    async findOne(id) {
        const hospital = await this.hospitalModel.findById(id);
        if (!hospital)
            throw new common_1.NotFoundException('Hospital not found');
        return hospital;
    }
    create(dto) {
        return this.hospitalModel.create(dto);
    }
    async update(id, dto) {
        const hospital = await this.hospitalModel.findByIdAndUpdate(id, dto, { new: true });
        if (!hospital)
            throw new common_1.NotFoundException('Hospital not found');
        return hospital;
    }
    async remove(id) {
        const hospital = await this.hospitalModel.findByIdAndDelete(id);
        if (!hospital)
            throw new common_1.NotFoundException('Hospital not found');
        return { message: 'Hospital deleted' };
    }
};
exports.HospitalsService = HospitalsService;
exports.HospitalsService = HospitalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hospital_schema_1.Hospital.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HospitalsService);
//# sourceMappingURL=hospitals.service.js.map