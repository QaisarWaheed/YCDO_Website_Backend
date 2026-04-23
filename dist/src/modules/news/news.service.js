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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const news_article_schema_1 = require("./news-article.schema");
let NewsService = class NewsService {
    newsModel;
    constructor(newsModel) {
        this.newsModel = newsModel;
    }
    async onModuleInit() {
        const count = await this.newsModel.countDocuments();
        if (count > 0)
            return;
        await this.newsModel.insertMany([
            {
                title: 'YCDO Launches Free Medical Camp',
                slug: 'ycdo-launches-free-medical-camp',
                body: 'YCDO organized a free medical camp in Multan for underserved families.',
                category: 'healthcare',
                tags: ['medical', 'camp'],
                isPublished: true,
            },
            {
                title: 'Scholarship Distribution Ceremony Held',
                slug: 'scholarship-distribution-ceremony-held',
                body: 'Scholarships were distributed to deserving students under YCDO education program.',
                category: 'education',
                tags: ['scholarship', 'students'],
                isPublished: true,
            },
            {
                title: 'New Water Filtration Plant Inaugurated',
                slug: 'new-water-filtration-plant-inaugurated',
                body: 'A new RO plant was inaugurated to provide clean water to local residents.',
                category: 'water',
                tags: ['water', 'community'],
                isPublished: true,
            },
        ]);
    }
    async findAll(page = 1, limit = 6) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.newsModel
                .find({ isPublished: true })
                .sort({ publishedAt: -1 })
                .skip(skip)
                .limit(limit),
            this.newsModel.countDocuments({ isPublished: true }),
        ]);
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findAllAdmin(page = 1, limit = 50) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.newsModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
            this.newsModel.countDocuments(),
        ]);
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(slug) {
        const article = await this.newsModel.findOne({ slug });
        if (!article)
            throw new common_1.NotFoundException('News article not found');
        return article;
    }
    create(dto) {
        const slug = dto.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
        return this.newsModel.create({ ...dto, slug });
    }
    async update(id, dto) {
        const payload = { ...dto };
        if (payload.title) {
            payload.slug = payload.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]/g, '');
        }
        const article = await this.newsModel.findByIdAndUpdate(id, payload, { new: true });
        if (!article)
            throw new common_1.NotFoundException('News article not found');
        return article;
    }
    async remove(id) {
        const article = await this.newsModel.findByIdAndDelete(id);
        if (!article)
            throw new common_1.NotFoundException('News article not found');
        return { message: 'News article deleted' };
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(news_article_schema_1.NewsArticle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NewsService);
//# sourceMappingURL=news.service.js.map