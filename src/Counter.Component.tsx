import React, {Component} from 'react';

type Props = {
    incrementValue: number,
    updateCounter: any
}

export class Counter extends Component<Props>{
    constructor(props: any) {
        super(props);
    }
    
    onClick({incrementValue, updateCounter}: any) {
        updateCounter(incrementValue);
    }
    
    render() {
        const onClick = () => this.onClick(this.props);
        
        return (
          <div>
              <button onClick={onClick}>+{this.props.incrementValue}</button>
          </div>  
        );
    }
}

export default Counter;