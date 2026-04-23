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
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contact_schema_1 = require("./contact.schema");
let ContactsService = class ContactsService {
    contactModel;
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    create(dto) {
        return this.contactModel.create(dto);
    }
    findAll() {
        return this.contactModel.find().sort({ isRead: 1, createdAt: -1 });
    }
    async markAsRead(id) {
        const contact = await this.contactModel.findByIdAndUpdate(id, { isRead: true }, { new: true });
        if (!contact)
            throw new common_1.NotFoundException('Contact not found');
        return contact;
    }
    async getUnreadCount() {
        const count = await this.contactModel.countDocuments({ isRead: false });
        return { count };
    }
    async remove(id) {
        const contact = await this.contactModel.findByIdAndDelete(id);
        if (!contact)
            throw new common_1.NotFoundException('Contact not found');
        return { message: 'Contact deleted' };
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_schema_1.Contact.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map