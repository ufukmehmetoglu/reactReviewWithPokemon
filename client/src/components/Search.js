import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getPokemon(this.state.query)
  }


  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button type='submit' >Add Pokemon</button>
        </form>
      </div>
    )
  }

}


export default Search;