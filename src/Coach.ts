import {User} from './User';

export class Coach {
    id: number;
    firstName: String;
    lastName: String;
    email: String;
    age: number;
    postalCode: String;
    address: String;
    phone: String;
    userName: String;
    password: String;
    balance: number;
    student: Array<User>;
}