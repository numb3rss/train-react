import React from "react";

type Props = {
    message: number
}

class Display extends React.Component<Props>{
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}

export default Display;