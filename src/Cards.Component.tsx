import React, {Component} from 'react'
import Card from './Card.Component'

type Props = {
    persons: any[]
};

class Cards extends Component<Props>{
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div>
                { this.props.persons.map((person) =>
                    <Card {...person} />
                )}
            </div>
        );
    }
}

export default Cards;