import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    //callback, runs when the SearchBar is submitted, receives the search term
    async onSearchSubmit(term) {
        console.log('called');
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 6ce100efa37372314315ddfe8543a1a1a0fe0e2f27d63281780661392beba6ed'
            },
        })

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}




export default App;