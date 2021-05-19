import React from 'react';
import "./title.css";

class Title extends React.Component {
    render() {
        return (
            <div className="col-10 title-block mx-auto">
                <h1 className="text-white text-center text-3xl pb-4"> Employee Directory </h1>
            </div>
        );
    }
}

export default Title;