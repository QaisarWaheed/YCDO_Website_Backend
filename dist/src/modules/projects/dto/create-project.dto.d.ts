import { ICreateProjectDto, ProjectCategory } from '@ycdo/shared';
export declare class CreateProjectDto implements ICreateProjectDto {
    title: string;
    category: ProjectCategory;
    description: string;
    impactStat: string;
    location: string;
    order?: number;
}
export declare class UpdateProjectDto {
    title?: string;
    category?: ProjectCategory;
    description?: string;
    impactStat?: string;
    location?: string;
    order?: number;
    isActive?: boolean;
}
