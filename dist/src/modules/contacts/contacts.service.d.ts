import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact, ContactDocument } from './contact.schema';
export declare class ContactsService {
    private readonly contactModel;
    constructor(contactModel: Model<ContactDocument>);
    create(dto: CreateContactDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    markAsRead(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Contact, {}, import("mongoose").DefaultSchemaOptions> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getUnreadCount(): Promise<{
        count: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
