import { AppointmentStatus, ICreateAppointmentDto } from '@ycdo/shared';
export declare class CreateAppointmentDto implements ICreateAppointmentDto {
    hospitalId: string;
    department: string;
    preferredDate: string;
    patientName: string;
    phone: string;
}
export declare class UpdateAppointmentStatusDto {
    status: AppointmentStatus;
}
