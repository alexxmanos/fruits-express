const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Vegetables Index Page!</h1>
        <nav>
          <a href="/vegetables/new">Create a New Vegetable</a>
        </nav>
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                The{' '}
                <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color} <br />
                {vegetable.readyToEat ? `It is ready to eat` : `It is not ready to eat`} <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
