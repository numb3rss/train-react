import "reflect-metadata";

import { Container } from "inversify";

import {PersonService, IPersonService} from "../Person.Service";

import SERVICE_IDENTIFIER from "../constants/identifiers";

let container = new Container();

container.bind<IPersonService>(SERVICE_IDENTIFIER.PERSONSERVICE).to(PersonService).inSingletonScope();

export default container;