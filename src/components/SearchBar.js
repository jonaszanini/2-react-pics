import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="">Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

//Do not put parenteses when calling this.onInputChange, otherwise the method will be called everytime the render runs.

export default SearchBar;
