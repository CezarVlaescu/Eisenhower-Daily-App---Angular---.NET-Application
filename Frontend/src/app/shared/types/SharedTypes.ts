export type TTask = {
    id?: number;
    name: string;
    hour: Date;
    type: any;
    isCommented: boolean;
    comments? : string;
}

export type TTaskPoolResponse = {
    doTasks?: TTask[];
    decideTasks?: TTask[]
    delegateTasks? : TTask[];
    deleteTasks? : TTask[];
}

export type TButtonObject = {
    name: string;
    link?: string;
}

export type TRegisterUserInput = {
    username: string;
    email: string;
    password: string;
    image?: string;
}

export type TLoginInput = {
    email: string;
    password: string;
}

export type TLoginResponse = {
    token: string;
}

export type TUserData = {
    username: string;
    email?: string;
    image?: string;
}
