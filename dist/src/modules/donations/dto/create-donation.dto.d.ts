import { DonationCampaign, DonationStatus, ICreateDonationDto, PaymentMethod } from '@ycdo/shared';
export declare class CreateDonationDto implements ICreateDonationDto {
    donorName: string;
    email: string;
    phone: string;
    amount: number;
    campaign: DonationCampaign;
    method: PaymentMethod;
    isZakat?: boolean;
}
export declare class UpdateDonationStatusDto {
    status: DonationStatus;
}
