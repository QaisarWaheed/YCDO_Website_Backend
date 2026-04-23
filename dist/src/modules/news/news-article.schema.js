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
exports.NewsArticleSchema = exports.NewsArticle = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let NewsArticle = class NewsArticle {
    title;
    slug;
    body;
    thumbnail;
    author;
    category;
    tags;
    publishedAt;
    isPublished;
};
exports.NewsArticle = NewsArticle;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NewsArticle.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], NewsArticle.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NewsArticle.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NewsArticle.prototype, "thumbnail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'YCDO Team' }),
    __metadata("design:type", String)
], NewsArticle.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NewsArticle.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], NewsArticle.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], NewsArticle.prototype, "publishedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], NewsArticle.prototype, "isPublished", void 0);
exports.NewsArticle = NewsArticle = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], NewsArticle);
exports.NewsArticleSchema = mongoose_1.SchemaFactory.createForClass(NewsArticle);
exports.NewsArticleSchema.index({ isPublished: 1, publishedAt: -1 });
//# sourceMappingURL=news-article.schema.js.map