const React = require('react')

class Show extends React.Component {
  render () {
    const { name, color ,readyToEat} = this.props.fruit

    return (
      <div>
        <h1> Show Page </h1>
        The {name} is {color}.
        And {
          readyToEat ? 
            "It is ready to eat!"
          :
            "It is not ready to eat... Cant touch this"
        }
      </div>
    );
  }
}


// function Show (props) {
//   const { name, color ,readyToEat} = props.fruit
//   return (
//     <div>
//       <h1> Show Page </h1>
//       The {name} is {color}.
//       And {
//         readyToEat ? 
//           "It is ready to eat!"
//         :
//           "It is not ready to eat... Cant touch this"
//       }
//     </div>
//   )
// }

module.exports = Show;