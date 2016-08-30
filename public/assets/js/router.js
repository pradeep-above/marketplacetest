/*var InterfaceComponent = React.createClass({
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);
  
    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  },
  render : function() {
    if (this.props.router.current == "foo") {
      return <FooComponent />;
    }
    if (this.props.router.current == "bar") {
      return <BarComponent />;
    }
    return <div />;
  }
});*/

var JiyoRouteController  = Backbone.Router.extend({
    routes: { 
    	"about" : "renderAbout",
    	"services" : "renderServices",
    	"products" : "renderProducts",
    	"contact" : "renderContact"
    },
    renderAbout: function(){
		//this.current = "about";
		ReactDOM.render(
	      React.createElement(AboutComponent),
	      document.getElementById('marketContainer')
	    );
	},
	renderServices: function(){
		//this.current = "services";
		ReactDOM.render(
			React.createElement(ServicesComponent),
	      document.getElementById('marketContainer')
	    );
	},
	renderProducts: function(){
		//this.current = "products";
		ReactDOM.render(
			React.createElement(ProductsComponent),
	      document.getElementById('marketContainer')
	    );
	},
	renderContact: function(){
		//this.current = "contact";
		ReactDOM.render(
			React.createElement(ContactComponent),
	      document.getElementById('marketContainer')
	    );
	}
});
new JiyoRouteController();
 
Backbone.history.start();