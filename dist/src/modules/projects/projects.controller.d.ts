import { CreateProjectDto, UpdateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(category?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    create(dto: CreateProjectDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateProjectDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./project.schema").Project, {}, import("mongoose").DefaultSchemaOptions> & import("./project.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
