import { Model } from 'mongoose';
import { CreateGalleryItemDto, UpdateGalleryItemDto } from './dto/create-gallery-item.dto';
import { GalleryItem, GalleryItemDocument } from './gallery-item.schema';
export declare class GalleryService {
    private readonly galleryModel;
    constructor(galleryModel: Model<GalleryItemDocument>);
    findAll(category?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    create(dto: CreateGalleryItemDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateGalleryItemDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & GalleryItem & {
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
