import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateHospitalDto, UpdateHospitalDto } from './dto/create-hospital.dto';
import { Hospital, HospitalDocument } from './hospital.schema';
export declare class HospitalsService implements OnModuleInit {
    private readonly hospitalModel;
    constructor(hospitalModel: Model<HospitalDocument>);
    onModuleInit(): Promise<void>;
    findAll(city?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    create(dto: CreateHospitalDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateHospitalDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Hospital, {}, import("mongoose").DefaultSchemaOptions> & Hospital & {
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
