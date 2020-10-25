import React, {Component} from 'react'
import './Card.Component.scss'

type Props = {
    name: string,
    company: string,
    avatarUrl: string
};

class Card extends Component<Props>{
    constructor(props: any){
        super(props);
    }
    
    render() {
        return (
            <div className="github-profile">
                <img src={this.props.avatarUrl} />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;