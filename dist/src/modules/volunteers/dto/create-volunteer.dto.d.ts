import { ICreateVolunteerDto, VolunteerStatus } from '@ycdo/shared';
export declare class CreateVolunteerDto implements ICreateVolunteerDto {
    name: string;
    email: string;
    phone: string;
    skills: string[];
    availability: string;
}
export declare class UpdateVolunteerStatusDto {
    status: VolunteerStatus;
}
