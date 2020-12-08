import {Component} from "react";
import {connect, inject, injectable} from "react-inversify";
import {SERVICE_IDENTIFIER} from "../constants/identifiers";
import React from "react";
import {IPersonService} from "../core/adapters/IPersonService";

@injectable()
class Dependencies {
    public personService: IPersonService;
    
    constructor(@inject(SERVICE_IDENTIFIER.PERSONSERVICE) personService: IPersonService) {
        this.personService = personService;
    }
}

type Props = {
    personService: IPersonService,
    selectedId?: number,
    removedPerson: any
}

type OwnProps = {
    selectedId?: number,
    removedPerson: any
}

class RemovePerson extends Component<Props> {
    constructor(props: any) {
        super(props);
    }
    
    handleSubmit = (event: any) => {
        this.props.personService.removePerson(this.props.selectedId);
        this.props.removedPerson();
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Supprimer une personne</button>
            </form>
        )
    }
}

export default connect(Dependencies, (deps, ownProps: OwnProps) => {
    const props : Props = {
        personService: deps.personService,
        selectedId: ownProps.selectedId,
        removedPerson: ownProps.removedPerson
    };
    return props;
})(RemovePerson);