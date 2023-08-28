export class ContactForm {
    id? : number; 
    firstname? : string ; 
    lastname? : string ; 
    email? : string ; 
    company? : string ; 
}; 

export class Contact {
    id? : number; 
    firstname? : string ; 
    lastname? : string ; 
    email? : string ; 
    company? : {
        id : number ; 
        name : string; 
        postcode : string;
    }
}