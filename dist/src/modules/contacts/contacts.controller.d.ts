import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(dto: CreateContactDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    remove(id: string): Promise<{
        message: string;
    }>;
    markAsRead(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./contact.schema").Contact, {}, import("mongoose").DefaultSchemaOptions> & import("./contact.schema").Contact & {
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
}
