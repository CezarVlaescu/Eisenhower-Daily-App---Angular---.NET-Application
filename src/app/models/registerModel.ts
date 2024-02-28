export class RegisterModel {
    username: string;
    email?: string;
    password?: string
    firstname? : string;
    lastname? : string; 
    
    constructor(){
        this.username = "";
        this.email = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
    }
}