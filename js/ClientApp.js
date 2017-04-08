      var div = React.DOM.div
      var h1 = React.DOM.h1

      var MyTitle = React.createClass({
          render: function () {
              return (
                  div(null,
                    h1(null, this.props.title) // 'this' reffers to var MyTitle = React.createClass'
                                               // 'props' reffers to arguments passed by parent;
                  )
              )
          }
      })

      var MyTitleFactory = React.createFactory(MyTitle)
      
      var MyFirstComponent = React.createClass({
        render: function() {
          return (
            div(null,
              MyTitleFactory({ title: 'props are the best' }),
              MyTitleFactory({ title: 'semicolons are the wors' }),
              MyTitleFactory({ title: 'its okay if you like semicolons' }),
              MyTitleFactory({ title: 'im out of ideas '})
            )
          )
        }
      })
      
      ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))