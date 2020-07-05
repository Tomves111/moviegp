import React from 'react';
import Movie from './movie';

export default class Movies extends React.Component {

    render() {
        const movie1 = {
            id: 1,
            brand: 'Iron Man',
            actor: 'Tony Stark',
            year: '2017',
            details: true
        };

        const movie2 = {
            id: 2,
            brand: 'Thor',
            actor: 'Thor ',
            year: '2016',
            details: false
        };

        return (
            <div>
                <Movie movie={movie1} remove={this.removeMovie} toggle={this.toggleMovie} />
                <Movie movie={movie2} remove={this.removeMovie} toggle={this.toggleMovie} />
            </div>
        );
    }

    removeMovie(id) {
        console.log(`remove ${id}`);
    }

    toggleMovie(id) {
        console.log(`toggle ${id}`);
    }

}