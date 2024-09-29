import { User } from "../user-manager/user-manager.component.model";

export interface Cart {
    id?: number; 
    user: User;
    total: number; 
    createdAt: Date;
    ordered: boolean; 
  }