var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navigation = require('react-router').Navigation;

var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;

window.MainNavBar = React.createClass({
  mixins: [Navigation],

  render: function () {
    return (
      <Navbar inverse>
        <Nav>
          <NavItem href='#' onClick={function (e) {this._clickTransition(e, 'home')}.bind(this)}>Home</NavItem>
          <NavItem href='#' onClick={function (e) {this._clickTransition(e, 'projects')}.bind(this)}>Projects</NavItem>
          <NavItem href='#' onClick={function (e) {this._clickTransition(e, 'contact')}.bind(this)}>Contact</NavItem>
          <NavItem href='Resume.pdf'>Resume</NavItem>
        </Nav>
      </Navbar>
    );
  },

  _clickTransition: function (e, name) {
    this.transitionTo(name);
    e.preventDefault();
  }
});
