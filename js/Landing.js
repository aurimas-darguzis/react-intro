import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func } = React.PropTypes

const Landing = React.createClass({
  // this is comming from redux via connect
  propType: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    // dispatch comes from connect
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

// pull from redux and pass as a prop
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
