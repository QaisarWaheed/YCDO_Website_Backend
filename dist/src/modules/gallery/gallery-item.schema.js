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
exports.GalleryItemSchema = exports.GalleryItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const shared_1 = require("@ycdo/shared");
let GalleryItem = class GalleryItem {
    url;
    caption;
    category;
    date;
    eventTag;
    type;
};
exports.GalleryItem = GalleryItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GalleryItem.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], GalleryItem.prototype, "caption", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shared_1.GalleryCategory }),
    __metadata("design:type", String)
], GalleryItem.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], GalleryItem.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], GalleryItem.prototype, "eventTag", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['image', 'video'], default: 'image' }),
    __metadata("design:type", String)
], GalleryItem.prototype, "type", void 0);
exports.GalleryItem = GalleryItem = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], GalleryItem);
exports.GalleryItemSchema = mongoose_1.SchemaFactory.createForClass(GalleryItem);
exports.GalleryItemSchema.index({ category: 1 });
//# sourceMappingURL=gallery-item.schema.js.map