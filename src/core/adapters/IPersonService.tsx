import {Observable} from "rxjs";
import {Person} from "../domain/Person";

export interface IPersonService {
    getPerson(name: string) : Observable<Person>;
    removePerson(selectedId?: number): void;
    getPersons(): Observable<Person[]>
}