import React, {Component} from 'react';
import './Form.Component.scss';
import {connect, inject, injectable} from "react-inversify";
import {SERVICE_IDENTIFIER, USECASE_IDENTIFIER} from "../constants/identifiers";
import {IPersonService} from "../core/adapters/IPersonService";
import {IAddAPersonUseCase} from "./adapters/IAddAPersonUseCase";
import {PersonModel} from "./models/PersonModel";

type OwnProps = {
    addedPerson: any
}

type Props = {
    personService: IPersonService,
    addAPersonUseCase: IAddAPersonUseCase,
    addedPerson: any,
    currentPersonModels: PersonModel[]
}

type State = {
    name: string
}

@injectable()
class Dependencies {
    public personService: IPersonService;
    public addAPersonUseCase: IAddAPersonUseCase;
    constructor(
        @inject(SERVICE_IDENTIFIER.PERSONSERVICE) personService: IPersonService,
        @inject(USECASE_IDENTIFIER.ADDAPERSONUSECASE) addAPersonUseCase: IAddAPersonUseCase) {
        this.personService = personService;
        this.addAPersonUseCase = addAPersonUseCase;
    }
}

class Form extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            name: ''
        }
        
        this.onChangeName.bind(this);
        this.addAPerson.bind(this);
    }
    
    onChangeName = (event: any) => {
        this.setState({
            name: event.target.value
        })
    };
    
    addAPerson = (event: any) => {
        this.props.addAPersonUseCase.handle(this.props.currentPersonModels, this.state.name)
            .subscribe(
                (personModels: PersonModel[]) => {
                    this.props.addedPerson(personModels)
                }
            );
        event.preventDefault();
    }
    
    render() {
        return (
            <form className="add-person" onSubmit={this.addAPerson}>
                <div className="form-row">
                    <label htmlFor="firstname">name :</label>
                    <input id="firstname" type="text" value={this.state.name} onChange={this.onChangeName} required />
                </div>
                <button>Ajouter une personne</button>
            </form>
        );
    }
}

export default connect(Dependencies,(deps, ownProps: OwnProps) => {
    return {
        personService: deps.personService,
        addAPersonUseCase: deps.addAPersonUseCase,
        addedPerson: ownProps.addedPerson
    };
})(Form);