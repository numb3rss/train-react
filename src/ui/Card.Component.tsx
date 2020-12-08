import React, {Component} from 'react'
import './Card.Component.scss'

type Props = {
    id: number,
    name: string,
    company: string,
    avatarUrl: string,
    selectedId: any
};

class Card extends Component<Props>{
    constructor(props: any){
        super(props);
    }
    
    selectedCard = () => {
        this.props.selectedId(this.props.id);
    }
    
    render() {
        return (
                <div className="github-profile">
                    <a href="javascript:void(0)" id={`card-${this.props.id}`} onClick={this.selectedCard}>
                        <img src={this.props.avatarUrl} />
                        <div className="info">
                            <div className="name">{this.props.name}</div>
                            <div className="company">{this.props.company}</div>
                        </div>
                    </a>
                </div>
        )
    }
}

export default Card;