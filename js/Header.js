import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>
          <Link to='/' >
            svideo
          </Link>
        </h1>
      </header>
    )
  }
}

const { func, bool, string } = React.propTypes

Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
