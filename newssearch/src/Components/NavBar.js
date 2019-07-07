import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required onChange={this.onSearchChange} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons" onClick={this.onClearSearch}>close</i>
                        </div>
                    </form>
                </div>
            </nav>

        );
    }

    onSearchChange = () => {
        this.props.onSearchChange(document.getElementById('search').value);
    }

    onClearSearch = () => {
        debugger;
        document.getElementById('search').value = "";
        document.getElementById('search').dispatchEvent(new Event('change'));
    }

}

export default NavBar;