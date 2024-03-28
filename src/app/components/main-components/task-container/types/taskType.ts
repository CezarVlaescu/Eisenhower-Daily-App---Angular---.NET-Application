export enum Importance {
    Do = "Do",
    Decide = "Decide",
    Delegate = "Delegate",
    Delete = "Delete"
}


export class NewTask {
    taskName! : string;
    startDate!: Date;
    endDate!: Date;
    importance!: Importance;
    notes!: string;
}

export class DecidePool {
    tasks!: Array<NewTask>;
}  

export class DelegatePool {
    tasks!: Array<NewTask>;
}

export class DeletePool {
    tasks!: Array<NewTask>;
}

export class DoPool {
    tasks!: Array<NewTask>;
}

