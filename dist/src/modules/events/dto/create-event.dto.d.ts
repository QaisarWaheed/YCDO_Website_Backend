import { ICreateEventDto } from '@ycdo/shared';
export declare class CreateEventDto implements ICreateEventDto {
    title: string;
    date: string;
    endDate?: string;
    location: string;
    description: string;
    registrationLink?: string;
    isActive?: boolean;
}
export declare class UpdateEventDto {
    title?: string;
    date?: string;
    endDate?: string;
    location?: string;
    description?: string;
    registrationLink?: string;
    isActive?: boolean;
}
