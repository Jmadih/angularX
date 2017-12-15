import {Link} from "./link";
export enum Status {
  AVAILABLE, UNAVAILABLE
}



export interface Introduction {
     id : number;
     firstname : string;
     lastname : string;
     imageUrl : string;
     birthDate : string;
     gender: string;
     email: string;
     status: Status;
     description: string;
     links : Link[];
     experience: number;
}
