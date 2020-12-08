export class Person {
    private readonly id: number;
    private readonly name: string;
    private readonly company: string;
    private readonly avatarUrl: string;
    
    constructor(id: number, name: string, company: string, avatarUrl: string) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.avatarUrl = avatarUrl;
    }
    
    getName() {
        return this.name;
    }
    
    getCompany() {
        return this.company;
    }

    getAvatarUrl() {
        return this.avatarUrl;
    }

    getId() {
        return this.id;
    }
}