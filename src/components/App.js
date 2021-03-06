import React from 'react';
import dataApi from '../services/getDataFromApi.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList.js';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await dataApi.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
