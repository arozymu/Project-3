import React from "react";
import TicTacToe from "./containers/TicTacToe";
import PlayerHand from "./containers/PlayerHand";

import Facebook from 'Facebook';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <header className="App-header">
//        </header>
//        <p className="App-intro"> To get started, authentiacte with Facebook.</p>

// <Facebook/>      
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div>
      <p className="App-intro"> To get started, authentiacte with Facebook.</p>

<Facebook/>
        {/* <TicTacToe /> */}
        <PlayerHand />
    </div>     
  );
}

export default App;
