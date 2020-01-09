import React, {Component} from 'react';

class Lasange extends Component{

    render(){
        const {name, location, price} = this.props;
        return <div className="Lasange">
            <div className="name">{name}</div>
            <div className="location">{location}</div>
            <div className="price">{price}</div>
        </div>
    }
}

export default Lasange;