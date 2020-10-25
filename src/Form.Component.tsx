import React, {Component} from 'react';
import {connect, inject, injectable} from "react-inversify";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import {IPersonService} from "./Person.Service";

type OwnProps = {
    addedPerson: any
}

type Props = {
    personService: IPersonService,
    addedPerson: any
}

type State = {
    name?: string
}

@injectable()
class Dependencies {
    public personService: IPersonService;
    
    constructor(@inject(SERVICE_IDENTIFIER.PERSONSERVICE) personService: IPersonService) {
        this.personService = personService;
    }
}

class Form extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            name: undefined
        }
        
        this.onChange.bind(this);
        this.addAPerson.bind(this);
    }
    
    onChange = (event: any) => {
        this.setState({
            name: event.target.value
        })
    };

    addAPerson = () => {
        this.props.personService.addAPerson("test", "test2", this.state.name);
        this.props.addedPerson();
    }
    
    render() {
        return (
            <form>
                <input type="text" value={this.state.name} onChange={this.onChange}/>
                <input value="Ajouter une personne" type="button" onClick={this.addAPerson} />
            </form>
        );
    }
}

export default connect(Dependencies,(deps, ownProps: OwnProps) => {
    return {
        personService: deps.personService,
        addedPerson: ownProps.addedPerson
    };
})(Form);