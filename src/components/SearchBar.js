import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onFormSubmit = (ev) => {
      ev.preventDefault()
      this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(ev) => this.setState({ term: ev.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
