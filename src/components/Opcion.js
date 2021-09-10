import React from 'react';

class Opcion extends React.Component {
    
    render() {
        return (
            <div className="opcion">
                <button id={this.props.letra} className="botones" onClick={(e) => this.props.handleClick(e.target.id.toLowerCase())}>
                    {this.props.letra}
                </button>
                <h2>{this.props.opcion}</h2>
            </div>
        )
    }
}

export default Opcion;