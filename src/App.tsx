import React, {Component} from 'react';
import './App.scss';
import Display from "./Display.Component";
import Counter from './Counter.Component';

type Props = {
    
}

type State = {
    count: number
}

class App extends Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
    }
    
    render() {
        const displayComponent = (message: number) => <Display message={message}/>
        const updateCounter = (value: number) => {
            this.setState({
                count: this.state.count + value
            })
        };
        const counterComponent = (incrementValue: number) => <Counter updateCounter={updateCounter} incrementValue={incrementValue}/>

        return (
            <div>
                {counterComponent(1)}
                {counterComponent(5)}
                {counterComponent(10)}
                {displayComponent(this.state.count)}
            </div>
        );
    }
}

export default App;
 