import React, {Component} from 'react';
import './App.scss';
import Cards from "./Cards.Component";
import Form from "./Form.Component";
import {inject, injectable} from "inversify";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import {IPersonService} from "./Person.Service";
import {connect} from "react-inversify";

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
    persons: any[]
}

class App extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            persons: this.props.personService.getPersons()
        }
    }
    
    addedPerson = () => {
        this.setState({
            persons: this.props.personService.getPersons()
        });
    }
    
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Cards persons={this.state.persons}/>
                <Form addedPerson={this.addedPerson}/>
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

 