import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto';
import { NewsArticle, NewsArticleDocument } from './news-article.schema';
export declare class NewsService implements OnModuleInit {
    private readonly newsModel;
    constructor(newsModel: Model<NewsArticleDocument>);
    onModuleInit(): Promise<void>;
    findAll(page?: number, limit?: number): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findAllAdmin(page?: number, limit?: number): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(slug: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    create(dto: CreateNewsDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateNewsDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & NewsArticle & {
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
