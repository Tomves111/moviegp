import React, {findDOMNode} from 'react';

export default class AddMovie extends React.Component {

    render() {
        return(
            <div className="addMovie">
                <h2>New Movie</h2>
                <form onSubmit={(e) => this.handleSubmit(e)} ref="addMovie">
                    <label htmlFor="brand">Name:</label>
                    <input id="brand" type="text" name="brand" ref="brand" /><br />

                    <label htmlFor="year">Release Year:</label>
                    <input id="model" type="text" name="model" ref="model" /><br />


                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.add({
            brand: findDOMNode(this.refs.brand).value,
            actor: findDOMNode(this.refs.actor).value,
            year: findDOMNode(this.refs.year).value
        });
        findDOMNode(this.refs.addMovie).reset();
    }

}





