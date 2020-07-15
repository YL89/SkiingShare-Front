import {Coach} from './Coach';

export  class User{ 
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
    coach: Array<Coach>;
    item: [];
    rentItem: [];
}