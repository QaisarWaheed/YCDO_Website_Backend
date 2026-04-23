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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shared_1 = require("@ycdo/shared");
const project_schema_1 = require("./project.schema");
let ProjectsService = class ProjectsService {
    projectModel;
    constructor(projectModel) {
        this.projectModel = projectModel;
    }
    async onModuleInit() {
        const count = await this.projectModel.countDocuments();
        if (count > 0)
            return;
        await this.projectModel.insertMany([
            {
                title: 'YCDO Health Program',
                category: shared_1.ProjectCategory.HEALTHCARE,
                description: 'Free & subsidized medical care through 16+ hospitals across Multan',
                impactStat: '50,000+ patients served annually',
                location: 'Multan',
            },
            {
                title: 'Scholarship Program',
                category: shared_1.ProjectCategory.EDUCATION,
                description: 'Financial support for brilliant but needy students at school, college and university',
                impactStat: '500+ scholarships awarded',
                location: 'Pakistan',
            },
            {
                title: 'Food & Kitchen Services',
                category: shared_1.ProjectCategory.FOOD,
                description: 'Daily nutritious meals for food-insecure families and individuals',
                impactStat: '5,000+ meals served monthly',
                location: 'Multan',
            },
            {
                title: 'Water Filtration (RO Plants)',
                category: shared_1.ProjectCategory.WATER,
                description: 'Clean drinking water through RO filtration plants, handpumps in rural areas',
                impactStat: '20+ filtration plants installed',
                location: 'Pakistan',
            },
            {
                title: 'Orphan Care Program',
                category: shared_1.ProjectCategory.ORPHAN,
                description: 'Comprehensive welfare support for orphaned children across Pakistan',
                impactStat: '200+ orphans supported',
                location: 'Pakistan',
            },
            {
                title: 'Community Welfare Services',
                category: shared_1.ProjectCategory.COMMUNITY,
                description: 'Winter packages, Ramadan food, Qurbani, Shadi boxes, Wheelchair distribution',
                impactStat: '10,000+ families benefited',
                location: 'Pakistan',
            },
        ]);
    }
    findAll(category) {
        const filter = category ? { category } : {};
        return this.projectModel.find(filter).sort({ order: 1, createdAt: -1 });
    }
    async findOne(id) {
        const project = await this.projectModel.findById(id);
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
    create(dto) {
        return this.projectModel.create(dto);
    }
    async update(id, dto) {
        const project = await this.projectModel.findByIdAndUpdate(id, dto, { new: true });
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
    async remove(id) {
        const project = await this.projectModel.findByIdAndDelete(id);
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return { message: 'Project deleted' };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map