export class SharedInput {
    email : string;
    password : string;

    constructor(){
        this.email = "";
        this.password = "";
    }
}

export class RegisterInput{
    username : string;
    sharedInput!: SharedInput;

    constructor(){
        this.username = "";
    }
}