import React from "react";

export default class PullComp extends React.Component {
    render() {
        return (
            <>
                <button onClick={() => window.alert('pull')}>Pull</button>
                {this.props.value}
            </>
        )
    }
}
