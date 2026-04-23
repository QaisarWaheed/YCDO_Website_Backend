import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProjectDto, UpdateProjectDto } from './dto/create-project.dto';
import { Project, ProjectDocument } from './project.schema';
export declare class ProjectsService implements OnModuleInit {
    private readonly projectModel;
    constructor(projectModel: Model<ProjectDocument>);
    onModuleInit(): Promise<void>;
    findAll(category?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    create(dto: CreateProjectDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateProjectDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Project, {}, import("mongoose").DefaultSchemaOptions> & Project & {
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
