import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NewsList from './Components/NewsList';
import NewsDetails from './Components/NewsDetails';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNews: null
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' render={props => <NewsList {...props} setSelectedNews={this.setSelectedNews} />} />
                    <Route path='/:id' render={props => <NewsDetails {...props} selectedNews={this.state.selectedNews} />} />
                </Router>
            </div >
        )
    }

    setSelectedNews = (news) => {
        this.setState({ selectedNews: news });
    }
}

render(<App />, document.querySelector('#root'));