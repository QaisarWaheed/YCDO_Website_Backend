import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    findByGroup(group: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    upsert(key: string, dto: UpdateSettingDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./setting.schema").Setting, {}, import("mongoose").DefaultSchemaOptions> & import("./setting.schema").Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "findOneAndUpdate", {}>;
}
