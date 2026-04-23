import { CreateHospitalDto, UpdateHospitalDto } from './dto/create-hospital.dto';
import { HospitalsService } from './hospitals.service';
export declare class HospitalsController {
    private readonly hospitalsService;
    constructor(hospitalsService: HospitalsService);
    findAll(city?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    create(dto: CreateHospitalDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateHospitalDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./hospital.schema").Hospital, {}, import("mongoose").DefaultSchemaOptions> & import("./hospital.schema").Hospital & {
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
