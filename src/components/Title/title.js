import React from 'react';
import "./title.css";

class Title extends React.Component {
    render() {
        return (
            <div className="title-block mx-auto">
                <h1 className="text-white text-center py-4"> Employee Directory </h1>
                <p className="text-white text-center ">Click on Name heading to sort by last name</p>
            </div>
        );
    }
}

export default Title;