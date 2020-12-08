import {PersonModel} from "../models/PersonModel";
import {Observable} from "rxjs";

export interface IAddAPersonUseCase {
    handle(personModels: PersonModel[], name: string): Observable<PersonModel[]>
}