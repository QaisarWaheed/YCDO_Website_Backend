import { ICreateHospitalDto, IHospitalCoordinates } from '@ycdo/shared';
declare class HospitalCoordinatesDto implements IHospitalCoordinates {
    lat: number;
    lng: number;
}
export declare class CreateHospitalDto implements ICreateHospitalDto {
    name: string;
    address: string;
    city?: string;
    phone: string;
    services: string[];
    timings: string;
    coordinates: HospitalCoordinatesDto;
}
export declare class UpdateHospitalDto {
    name?: string;
    address?: string;
    city?: string;
    phone?: string;
    services?: string[];
    timings?: string;
    coordinates?: HospitalCoordinatesDto;
    photos?: string[];
    isActive?: boolean;
}
export {};
