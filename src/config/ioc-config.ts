import "reflect-metadata";

import { Container } from "inversify";

import {PersonService} from "../infrastructure/Person.Service";
import {AddAPersonUseCase} from "../core/usecase/AddAPerson.UseCase";

import {SERVICE_IDENTIFIER, USECASE_IDENTIFIER} from "../constants/identifiers";

import {IPersonService} from "../core/adapters/IPersonService";
import {IAddAPersonUseCase} from "../ui/adapters/IAddAPersonUseCase";

let container = new Container();

container.bind<IPersonService>(SERVICE_IDENTIFIER.PERSONSERVICE).to(PersonService).inSingletonScope();
container.bind<IAddAPersonUseCase>(USECASE_IDENTIFIER.ADDAPERSONUSECASE).to(AddAPersonUseCase).inRequestScope();

export default container;