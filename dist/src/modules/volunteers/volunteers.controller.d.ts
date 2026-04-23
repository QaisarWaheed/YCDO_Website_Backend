import { CreateVolunteerDto, UpdateVolunteerStatusDto } from './dto/create-volunteer.dto';
import { VolunteersService } from './volunteers.service';
export declare class VolunteersController {
    private readonly volunteersService;
    constructor(volunteersService: VolunteersService);
    create(dto: CreateVolunteerDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    updateStatus(id: string, dto: UpdateVolunteerStatusDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./volunteer.schema").Volunteer, {}, import("mongoose").DefaultSchemaOptions> & import("./volunteer.schema").Volunteer & {
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
