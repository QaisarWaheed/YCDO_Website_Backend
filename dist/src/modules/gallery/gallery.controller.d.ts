import { CreateGalleryItemDto, UpdateGalleryItemDto } from './dto/create-gallery-item.dto';
import { GalleryService } from './gallery.service';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    findAll(category?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, "find", {}>;
    create(dto: CreateGalleryItemDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateGalleryItemDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./gallery-item.schema").GalleryItem, {}, import("mongoose").DefaultSchemaOptions> & import("./gallery-item.schema").GalleryItem & {
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
