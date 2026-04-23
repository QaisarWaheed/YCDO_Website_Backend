import { ContactSubject, ICreateContactDto } from '@ycdo/shared';
export declare class CreateContactDto implements ICreateContactDto {
    name: string;
    email: string;
    phone?: string;
    subject: ContactSubject;
    message: string;
}
