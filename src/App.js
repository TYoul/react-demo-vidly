import React, {PureComponent} from 'react';
import Movies from "./component/Movies/Movies";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Movies/>
      </div>
    );
  }
}

export default App;