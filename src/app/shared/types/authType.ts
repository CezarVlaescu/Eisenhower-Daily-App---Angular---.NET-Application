export class SharedInput {
    email: string;
    password: string;

    constructor() {
        this. email = " ";   
        this.password = " ";   
    }
}

export class RegisterRequest {
    username!: string;
    shared!: SharedInput;
}