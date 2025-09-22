
export class ProfileModel {
    profileId: number;
    userId: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    street?: string | null;
    city?: string | null;
    state?: string | null;
    countryId?: number | null;
    zipCode?: string | null;
    profilePictureUrl?: string | null;
    isProfileComplete: boolean = false;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();

}