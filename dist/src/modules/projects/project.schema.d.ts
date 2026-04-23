import { HydratedDocument } from 'mongoose';
export type ProjectDocument = HydratedDocument<Project>;
export declare class Project {
    title: string;
    description: string;
    category: string;
    impactStat: string;
    location: string;
    images: string[];
    isActive: boolean;
    order: number;
}
export declare const ProjectSchema: import("mongoose").Schema<Project, import("mongoose").Model<Project, any, any, any, any, any, Project>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Project, import("mongoose").Document<unknown, {}, Project, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    impactStat?: import("mongoose").SchemaDefinitionProperty<string, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: import("mongoose").SchemaDefinitionProperty<string[], Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Project, import("mongoose").Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Project>;
