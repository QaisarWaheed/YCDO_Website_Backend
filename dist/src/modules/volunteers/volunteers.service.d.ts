import { Model } from 'mongoose';
import { VolunteerStatus } from '@ycdo/shared';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { Volunteer, VolunteerDocument } from './volunteer.schema';
export declare class VolunteersService {
    private readonly volunteerModel;
    constructor(volunteerModel: Model<VolunteerDocument>);
    create(dto: CreateVolunteerDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    updateStatus(id: string, status: VolunteerStatus): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Volunteer, {}, import("mongoose").DefaultSchemaOptions> & Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(id: string): Promise<{
        ok: boolean;
    }>;
}
