import { GalleryCategory, GalleryItemType, ICreateGalleryItemDto } from '@ycdo/shared';
export declare class CreateGalleryItemDto implements ICreateGalleryItemDto {
    url: string;
    caption: string;
    category: GalleryCategory;
    date: string;
    eventTag?: string;
    type: GalleryItemType;
}
export declare class UpdateGalleryItemDto {
    url?: string;
    caption?: string;
    category?: GalleryCategory;
    date?: string;
    eventTag?: string;
    type?: GalleryItemType;
}
