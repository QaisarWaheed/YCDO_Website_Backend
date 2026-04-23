import { CreateEventDto, UpdateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    findUpcoming(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    create(dto: CreateEventDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateEventDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & {
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
