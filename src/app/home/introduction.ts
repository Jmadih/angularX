import {Link} from './link';

export enum Status {
  AVAILABLE, UNAVAILABLE
}

export class Introduction {

    private id: number;
    private firstname: string;
    private lastname: string;
    private imageUrl: string;
    private birthDate: string;
    private gender: string;
    private email: string;
    private status: Status;
    private description: string;
    private links: Link[];

    constructor() {
        this.links = new Array<Link>();
    }

    get _id(): number {
        return this.id;
    }

    set _id(value: number) {
        this.id = value;
    }

    get _firstname(): string {
        return this.firstname;
    }

    set _firstname(value: string) {
        this.firstname = value;
    }

    get _lastname(): string {
        return this.lastname;
    }

    set _lastname(value: string) {
        this.lastname = value;
    }

    get _imageUrl(): string {
        return this.imageUrl;
    }

    set _imageUrl(value: string) {
        this.imageUrl = value;
    }

    get _birthDate(): string {
        return this.birthDate;
    }

    set _birthDate(value: string) {
        this.birthDate = value;
    }

    get _gender(): string {
        return this.gender;
    }

    set _gender(value: string) {
        this.gender = value;
    }

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _status(): Status {
        return this.status;
    }

    set _status(value: Status) {
        this.status = value;
    }

    get _description(): string {
        return this.description;
    }

    set _description(value: string) {
        this.description = value;
    }

    get _links(): Link[] {
        return this.links;
    }

    set _links(value: Link[]) {
        this.links = value;
    }
}
