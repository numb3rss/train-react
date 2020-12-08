import {injectable} from "inversify";
import {Person} from "../core/domain/Person";
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {IPersonService} from "../core/adapters/IPersonService"

const axios = require('axios').default;

@injectable()
export class PersonService implements IPersonService{
    private persons: Person[] = [];
    
    constructor() {}
    
    getPerson(name: string) : Observable<Person> {
        return new Observable((observer) => {
            axios.get(`https://api.github.com/users/${name}`).then((response: AxiosResponse) => {
                let data = response.data
                observer.next(new Person(data.id, data.name, data.company, data.avatar_url))
                observer.complete()
            }).catch((reason: any) => {
                observer.error(reason)
            })
        });
    }
    
    getPersons() : Observable<Person[]> {
        return new Observable((observer) => 
            axios.get('https://api.github.com/users')
                .then((response: AxiosResponse) => {
                    observer.next(response.data)
                    observer.complete()
                })
                .catch((reason: any) => {
                    observer.error(reason)
                })
        );
    }

    removePerson(selectedId?: number): void {
        this.persons = this.persons.filter((p) => p.getId() !== selectedId);
    }
}