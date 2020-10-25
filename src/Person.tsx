export class Person {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly company: string;
    private readonly avatarUrl: string;
    
    constructor(firstName: string, lastName: string, company: string, avatarUrl: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.avatarUrl = avatarUrl;
    }
    
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    getCompany() {
        return this.company;
    }

    getAvatarUrl() {
        return this.avatarUrl;
    }
}