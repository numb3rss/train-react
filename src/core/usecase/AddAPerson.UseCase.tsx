import {IAddAPersonUseCase} from "../../ui/adapters/IAddAPersonUseCase";
import {PersonModel} from "../../ui/models/PersonModel";
import {inject, injectable} from "inversify";
import {SERVICE_IDENTIFIER} from "../../constants/identifiers";
import {IPersonService} from "../adapters/IPersonService";
import {Person} from "../domain/Person";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@injectable()
export class AddAPersonUseCase implements IAddAPersonUseCase {
    private personService: IPersonService;
    
    constructor(@inject(SERVICE_IDENTIFIER.PERSONSERVICE) personService: IPersonService){
        this.personService = personService;
    }
    
    handle(personModels: PersonModel[], name: string): Observable<PersonModel[]>{
        return new Observable((observer) => this.personService.getPerson(name)
            .pipe(
                map((person: Person) => {
                    let personModel: PersonModel = {
                        id: person.getId(),
                        name: person.getName(),
                        company: person.getCompany(),
                        avatarUrl: person.getAvatarUrl()
                    }
                    return personModel
                })
            )
            .subscribe(
                (personModel:PersonModel) => {
                    personModels.push(personModel)
                    observer.next(personModels)
                    observer.complete()
                },
                (reason: any) => new Error(reason)
            ))
    }
}