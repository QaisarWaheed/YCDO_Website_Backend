import { CreateDonationDto, UpdateDonationStatusDto } from './dto/create-donation.dto';
import { DonationsService } from './donations.service';
export declare class DonationsController {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
    create(dto: CreateDonationDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./donation.schema").Donation, {}, import("mongoose").DefaultSchemaOptions> & import("./donation.schema").Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./donation.schema").Donation, {}, import("mongoose").DefaultSchemaOptions> & import("./donation.schema").Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(page?: string, limit?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./donation.schema").Donation, {}, import("mongoose").DefaultSchemaOptions> & import("./donation.schema").Donation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./donation.schema").Donation, {}, import("mongoose").DefaultSchemaOptions> & import("./donation.schema").Donation & {
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
    updateStatus(id: string, dto: UpdateDonationStatusDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./donation.schema").Donation, {}, import("mongoose").DefaultSchemaOptions> & import("./donation.schema").Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<unknown, {}, import("./donation.schema").Donation, {}, import("mongoose").DefaultSchemaOptions> & import("./donation.schema").Donation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
