import { ICreateNewsDto } from '@ycdo/shared';
export declare class CreateNewsDto implements ICreateNewsDto {
    title: string;
    body: string;
    thumbnail?: string;
    author: string;
    category: string;
    tags?: string[];
    isPublished?: boolean;
}
export declare class UpdateNewsDto {
    title?: string;
    body?: string;
    thumbnail?: string;
    author?: string;
    category?: string;
    tags?: string[];
    isPublished?: boolean;
}
