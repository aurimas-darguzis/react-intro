import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are the best', color: 'peru' }),
        MyTitleFactory({ title: 'semicolons are the wors', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'its okay if you like semicolons', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'im out of ideas ', colors: 'darkvioletred' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
