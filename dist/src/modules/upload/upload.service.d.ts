import { ConfigService } from '@nestjs/config';
export declare class UploadService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
        publicId: string;
    }>;
    deleteImage(publicId: string): Promise<{
        message: string;
    }>;
}
