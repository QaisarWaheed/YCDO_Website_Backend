import { Model } from 'mongoose';
import { DonationStatus } from '@ycdo/shared';
import { CreateDonationDto } from './dto/create-donation.dto';
import { Donation, DonationDocument } from './donation.schema';
export declare class DonationsService {
    private readonly donationModel;
    constructor(donationModel: Model<DonationDocument>);
    create(dto: CreateDonationDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Donation, {}, import("mongoose").DefaultSchemaOptions> & Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Donation, {}, import("mongoose").DefaultSchemaOptions> & Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(page?: number, limit?: number): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Donation, {}, import("mongoose").DefaultSchemaOptions> & Donation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Donation, {}, import("mongoose").DefaultSchemaOptions> & Donation & {
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
    getStats(): Promise<{
        total: any;
        count: any;
        byCampaign: any[];
        thisMonth: any;
    }>;
    updateStatus(id: string, status: DonationStatus): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Donation, {}, import("mongoose").DefaultSchemaOptions> & Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, Donation, {}, import("mongoose").DefaultSchemaOptions> & Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
