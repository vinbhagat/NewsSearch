import React, { Component } from 'react';
import Axios from 'axios';

import NewsItem from './NewsItem';
import NavBar from './NavBar';
import { BASE_URL, ITEM_URL, TOP_STORIES_URL } from '../Config';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewsList: [],
            filteredNews: []
        }
    };
    componentDidMount() {
        this.fetchTopStories();
    }
    render() {
        return (
            <div>
                <NavBar onSearchChange={this.onSearchChange} />
                {this.state.filteredNews.map(news => {
                    return <NewsItem setSelectedNews={this.props.setSelectedNews} key={news.id} news={news} />
                })}
            </div>
        )
    };

    fetchTopStories = () => {
        Axios.get(`${BASE_URL}${TOP_STORIES_URL}`).then(response => {
            let arrNewsIds = response.data.slice(0, 50);
            arrNewsIds.forEach(itemid => {
                Axios.get(`${ITEM_URL}${itemid}.json`).then(res => {
                    let updatedNewsList = this.state.NewsList;
                    updatedNewsList.push(res.data);
                    console.log(res.data.text);
                    this.setState({ NewsList: updatedNewsList, filteredNews: updatedNewsList });
                }).catch(err => console.log(err));
            });
        }).catch(err => console.log(err));
    }

    onSearchChange = (searchStr) => {
        if (searchStr.length > 0) {
            let filteredNews = this.state.NewsList.filter(news => news.title.indexOf(searchStr) > -1);
            this.setState({ filteredNews });
        } else {
            this.setState({ filteredNews: this.state.NewsList });
        }
    }
}

export default NewsList;