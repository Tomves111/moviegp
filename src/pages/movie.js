import React from 'react';

export default class Movie extends React.Component {

    render() {
        const styles = {
            border: '2px solid #CCC',
            padding: 10,
            margin: '10px 10px 10px 0px',
            backgroundColor: '#FFF',
            float: 'left'
        };

        return (
            <div style={styles}>
                <div>
                    <b>Brand:</b> {this.props.movie.brand}
                </div>
                {this.props.car.details &&
                <div>
                    <b>Actor:</b> {this.props.movie.actor} <br />
                    <b>Year:</b> {this.props.movie.year}
                </div>
                }

                <button onClick={() => this.props.toggle(this.props.movie.id)}>
                    {this.props.car.details ? 'Less' : 'More'}
                </button>
                {' '}

                <button onClick={() => this.props.remove(this.props.movie.id)}>
                    x
                </button>
            </div>
        );
    }

}

Car.propTypes = {
    car: React.PropTypes.object.isRequired,
    remove: React.PropTypes.func.isRequired,
    toggle: React.PropTypes.func.isRequired
};
