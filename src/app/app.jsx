var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
require('src/components/nav_bar');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Fade = ReactBootstrap.Fade;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <MainNavBar />
        <RouteHandler/>
      </div>
    );
  }
});

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="josh-background"></div>
        <h1 className="name-header">Joshua Rush</h1>
          <div className="home-description">
            { "Hi, I'm Josh.  I'm a full stack web developer at Rackspace. " +
              "I love bringing interfaces to life from scratch and building software " +
              "that makes it easy for users to accomplish their goals." }
          </div>
      </div>
    );
  }
});

var ProjectsPage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="josh-background"></div>
          <div className="projects">
            <div className="projects-body">
              <h1>Projects</h1>
              <div>
                <h3>MyCloud</h3>
                <img className="screenshot" src="assets/reach.jpeg"></img>
                <a href="https://mycloud.rackspace.com">mycloud.rackspace.com</a>
                { " is the control panel Rackspace customers use to " +
                  "manage all of their Rackspace Public Cloud resources.  It interfaces with " +
                  "OpenStack apis to allow customers to view and create servers, images, networks, " +
                  "loadbalancers, etc.  I've worked on this product since Fall of 2014, exposing new " +
                  "OpenStack features as they become available such as onMetal servers, boot from volume " +
                  "servers and image sharing.  I've also been helping to improve the maintainability and efficiency " +
                  "of the codebase by migrating from Google Closure and Knockout.JS to React and Redux." }
              </div>
              <div>
                <h3>Pilot</h3>
                <img className="screenshot" src="assets/pilot.png"></img>
                { "Pilot is a shared header api used across most of the Rackspace control panels. " +
                  "Consumers can make requests to the api, tuning the paramaters for which links to show and where they should point " +
                  "based on their product.  Pilot will return html and javascript to properly render a navigational header. " +
                  "I've worked on this product since Fall of 2016.  I've helped make changes to allow the header to be consumed by " +
                  "the " }
                <a href="https://manage.rackspace.com">Rackspace Fanatical AWS Control Panel</a>
                { " as well as the " }
                <a href="https://my.rackspace.com">Rackspace Dedicated User Control Panel</a>
                { "." }
              </div>
              <div>
                <h3>Canon React</h3>
                <img className="screenshot" src="assets/canon-react.png"></img>
                { "Canon React is an open source library that implements common control panel " +
                  "components in React with Rackspace " }
                <a href="http://rackerlabs.github.io/canon/">Canon</a>
                { " styling. This library was created to remove duplication of efforts across multiple " +
                  "control panels which utilize many of the same components.  It also makes it easier for CPs " +
                  " to adopt React if they hadn't already.  I helped start this repo by implementing some key components" +
                  "such as " }
                  <a href="http://rackerlabs.github.io/canon-react/docs/components/facets.html">list facets</a>
                { " and " }
                  <a href="http://rackerlabs.github.io/canon-react/docs/components/progress-bars.html">multistep progress bars</a>
                { "." }
              </div>
              <div>
                <h3>Windows App Store</h3>
                <img className="screenshot" src="assets/windows10store.jpg"></img>
                { "While at Microsoft, I was on the Windows Store team.  I helped develop the app store " +
                  "for Windows Phone 8.1 and Windows 10.  The Windows 10 app store is unique due to its " +
                  "service driven layout.  As a client developer, I helped develop a number of templates, " +
                  "such as a facted list view, with slots for other templates, such as app lists.  The app store " +
                  "service decides which templates to fill each slot with, so new layouts can be easily flighted and updated " +
                  "without requiring client code updates.  The app store was developed as a universal app, so all of the " +
                  "templates had to be designed to fit multiple screen sizes and devices, which presented interesting problems." }
              </div>
              <div>
                <h3>Windows Phone 8.1 Universal Volume Control</h3>
                <img className="volume-screenshot" src="assets/volume.png"></img>
                <img className="volume-screenshot" src="assets/volume2.jpg"></img>
                <img className="volume-screenshot" src="assets/volume3.png"></img>
                { "  I was the developer feature lead on the windows phone universal volume control.  " +
                  "Previously, there was a single volume on the phone for all apps/media.  My job was " +
                  "to develop a volume control that allowed users to change their media volume and phone " +
                  "volume separately as well as offer a quick way to enter vibrate/silent mode, and access " +
                  "volume settings.  This feature went through many iterations as we received user feedback " +
                  "and underwent several overhauls before reaching the ideal design."}
              </div>
            </div>
          </div>
      </div>
    );
  }
});

var ContactPage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="josh-background"></div>
        <div className="projects">
          <div className="projects-body">
            <h3>Contact</h3>
            Email
            Linked In
            Github
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route handler={App} path='/'>
    <DefaultRoute handler={HomePage}/>
    <Route name="projects" path="projects" handler={ProjectsPage}/>
    <Route name="contact" path="contact" handler={ContactPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
