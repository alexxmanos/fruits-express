const React = require("react");

class Show extends React.Component {
  render() {
    const { vegetable } = this.props;
    return (
      <div>
        <h1>{vegetable.name}</h1>
        <p>Color: {vegetable.color}</p>
        <p>
          {vegetable.readyToEat
            ? `It is ready to eat`
            : `It is not ready to eat`}
        </p>
        <a href="/vegetables">Back to Index</a>
      </div>
    );
  }
}

module.exports = Show;

