import React, {Component} from 'react'
import Card from './Card.Component'

type Props = {
    persons: any[],
    selectedId: any
};

class Cards extends Component<Props>{
    constructor(props: any) {
        super(props);
    }
    
    selectedId = (id: number) => {
        this.props.selectedId(id);
    }
    
    render() {
        return (
            <div>
                { this.props.persons.map((person) =>
                    <Card {...person} selectedId={this.selectedId}/>
                )}
            </div>
        );
    }
}

export default Cards;