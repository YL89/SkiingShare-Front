import {Coach} from './Coach';
import {Item} from './Item'

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
    item: Array<Item>;
    rentItem: [];
    skillLevel: number;
}