import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const { string } = React.PropTypes

const Landing = React.createClass({
  // this is comming from redux via connect
  propType: {
    searchTerm: string
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input value={this.props.searchTerm} type='text' placeholder='search' />
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
