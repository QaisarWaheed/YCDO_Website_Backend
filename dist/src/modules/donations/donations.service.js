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
exports.DonationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shared_1 = require("@ycdo/shared");
const donation_schema_1 = require("./donation.schema");
let DonationsService = class DonationsService {
    donationModel;
    constructor(donationModel) {
        this.donationModel = donationModel;
    }
    create(dto) {
        return this.donationModel.create(dto);
    }
    async findAll(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.donationModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
            this.donationModel.countDocuments(),
        ]);
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getStats() {
        const now = new Date();
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const [overall, byCampaign, thisMonth] = await Promise.all([
            this.donationModel.aggregate([
                { $match: { status: shared_1.DonationStatus.COMPLETED } },
                { $group: { _id: null, total: { $sum: '$amount' }, count: { $sum: 1 } } },
            ]),
            this.donationModel.aggregate([
                { $match: { status: shared_1.DonationStatus.COMPLETED } },
                { $group: { _id: '$campaign', total: { $sum: '$amount' } } },
            ]),
            this.donationModel.aggregate([
                { $match: { status: shared_1.DonationStatus.COMPLETED, createdAt: { $gte: monthStart } } },
                { $group: { _id: null, total: { $sum: '$amount' } } },
            ]),
        ]);
        return {
            total: overall[0]?.total ?? 0,
            count: overall[0]?.count ?? 0,
            byCampaign,
            thisMonth: thisMonth[0]?.total ?? 0,
        };
    }
    async updateStatus(id, status) {
        const donation = await this.donationModel.findByIdAndUpdate(id, { status }, { new: true });
        if (!donation)
            throw new common_1.NotFoundException('Donation not found');
        return donation;
    }
};
exports.DonationsService = DonationsService;
exports.DonationsService = DonationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(donation_schema_1.Donation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DonationsService);
//# sourceMappingURL=donations.service.js.map