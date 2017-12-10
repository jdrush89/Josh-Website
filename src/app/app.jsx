var React = require('react');
var ReactDOM = require('react-dom');

var Toggle = React.createClass({
  getInitialState: function () {
    return {
      checked: false
    };
  },

  render: function () {
    return (
      <div onClick={this.onToggleClicked.bind(this)}>
        <input checked={this.state.checked} id={this.props.id} type="checkbox" />
        <label for={this.props.id}>{this.props.label}</label>
      </div>
    );
  },

  onToggleClicked: function () {
    this.setState({ checked: !this.state.checked });
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="video-container">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A_vaY_L3PwE" frameborder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="btn-container">
          <button className="btn btn-1 btn-1a">ASMR Me!</button>
        </div>
        <div className="container">
          <Toggle id="toggle1" label="Tapping" />
          <Toggle id="toggle2" label="No Talking" />
          <Toggle id="toggle3" label="Roleplay" />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('main'));