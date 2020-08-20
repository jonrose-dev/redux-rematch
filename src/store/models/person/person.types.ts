export interface IPerson {
    firstName?: string;
    lastName?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
}

export interface IPersonState extends IPerson {
    loading: boolean;
}