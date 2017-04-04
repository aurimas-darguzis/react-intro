var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
         h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)


var MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({title: 'Props are great!', color: 'peru'}),
        MyTitleFact({title: 'Use props everywhere!', color: 'mediumquamarine'}),
        MyTitleFact({title: 'Props are the best!', color: 'rebeccapurple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))