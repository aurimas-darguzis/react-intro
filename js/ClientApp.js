/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color } }, this.props.title) // 'this' reffers to var MyTitle = React.createClass'
                                        // 'props' reffers to arguments passed by parent;
      )
    )
  }
})

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
