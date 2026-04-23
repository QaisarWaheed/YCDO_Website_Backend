import { Model } from 'mongoose';
import { AppointmentStatus } from '@ycdo/shared';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment, AppointmentDocument } from './appointment.schema';
export declare class AppointmentsService {
    private readonly appointmentModel;
    constructor(appointmentModel: Model<AppointmentDocument>);
    create(dto: CreateAppointmentDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    updateStatus(id: string, status: AppointmentStatus): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Appointment, {}, import("mongoose").DefaultSchemaOptions> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
