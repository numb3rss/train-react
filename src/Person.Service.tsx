import {injectable} from "inversify";
import {ReactiveService} from "react-injection";
import {Person} from "./Person";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface IPersonService{
    getPersons(): any[],
    addAPerson(lastName: string, company: string, firstName?: string): void
}

@injectable()
export class PersonService implements IPersonService{
    private readonly persons: Person[];
    
    constructor() {
        this.persons = [
            new Person("Dan", "Abranov", "Facebook", "https://avatars0.githubusercontent.com/u/810438?v=4"),
            new Person("Sophie", "Alpert", "Facebook", "https://avatars2.githubusercontent.com/u/6820?v=4"),
            new Person("Sebastian", "Markbâge", "Facebook", "https://avatars2.githubusercontent.com/u/63648?v=4")
        ];
    }
    
    addAPerson(lastName: string, company: string, firstName?: string): void {
        this.persons.push(new Person(firstName ?? "", lastName, company, "https://avatars2.githubusercontent.com/u/63648?v=4"));
    }
    
    getPersons() : any[] {
        let persons: any[] = [];
        const observablePerson: Observable<Person> = from(this.persons);
        
        observablePerson.pipe(
            map((p: Person) => {
                return {
                    name: p.getName(),
                    company: p.getCompany(),
                    avatarUrl: p.getAvatarUrl()
                };
            })
        ).subscribe((p: any) => persons.push(p))
        
        return persons;
    }
}