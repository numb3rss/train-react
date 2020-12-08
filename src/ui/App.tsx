import React, {Component} from 'react';
import './App.scss';
import Cards from "./Cards.Component";
import Form from "./Form.Component";
import {inject, injectable} from "inversify";
import {SERVICE_IDENTIFIER} from "../constants/identifiers";
import {connect} from "react-inversify";
import RemovePerson from "../ui/RemovePerson.Component";
import {IPersonService} from "../core/adapters/IPersonService";
import {PersonModel} from "./models/PersonModel";

type OwnProps = {
    title: string
}

type Props = {
    title: string,
    personService: IPersonService
}

@injectable()
class Dependencies {
    public personService: IPersonService;
    
    constructor(
        @inject(SERVICE_IDENTIFIER.PERSONSERVICE) personService: IPersonService
    ) {
        this.personService = personService;
    }
}

type State = {
    selectedId?: number,
    persons: any[]
}

class App extends Component<Props, State> {
    private addingPerson: boolean = false;
    
    constructor(props: any) {
        super(props);
        this.state = {
            selectedId: undefined,
            persons: []
        }
    }
    
    selectedId = (id: number) => {
        this.setState({
            selectedId: id,
            persons: this.state.persons
        })
    }
    
    addedPerson = (personModels: PersonModel[]) => {
            this.setState({
                persons: personModels,
                selectedId: undefined
            });
    }
    
    removedPerson = () => {
        this.setState({
            persons: [],
            selectedId: undefined
        })
    }
    
    render() {
        const deletedPerson = 
            this.state.selectedId !== undefined ?
                <RemovePerson selectedId={this.state.selectedId} removedPerson={this.removedPerson}/> :
                "";
        return (
            <div>
                <div className="header">{this.props.title}</div>
                { this.addingPerson ? 
                    <span>Adding Person...</span> :
                    <Cards persons={this.state.persons} selectedId={this.selectedId}/>
                }
                <Form currentPersonModels={this.state.persons} addedPerson={this.addedPerson}/>
                {deletedPerson}
            </div>
        );
    }
}

export default connect(Dependencies, (deps, ownProps: OwnProps) => {
    return {
        title: ownProps.title,
        personService: deps.personService
    };
})(App);

 