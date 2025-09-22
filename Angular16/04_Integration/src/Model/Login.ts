export interface LoginModel
{
    userName : string ;
    password:string 
}

export interface UserModel {
    UserId: number;
    roleId: number;
    isActive: boolean;
    lastLogin: string ;
    createdAt: string;
    updatedAt: string;      
}
