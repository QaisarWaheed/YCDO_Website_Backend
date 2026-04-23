import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto';
import { NewsService } from './news.service';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    findAll(page?: string, limit?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
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
    findAllAdmin(page?: string, limit?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
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
    findOne(slug: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    create(dto: CreateNewsDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateNewsDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./news-article.schema").NewsArticle, {}, import("mongoose").DefaultSchemaOptions> & import("./news-article.schema").NewsArticle & {
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
