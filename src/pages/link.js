import React, {Component} from 'react';
import AddMovie from "./addMovie";

export default class Movie extends React.Component {

    render() {
        return (
            <div>
                <AddMovie add={this.addMovie} />
            </div>
        );
    }

    addMovie(movie) {
        console.log(`add ${movie}`);
    }

}