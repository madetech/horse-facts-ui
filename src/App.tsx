import React, { Component } from 'react';
import styles from "./App.module.css";
import bojack from './bojack.gif';

class App extends Component {
  render() {
    return (
      <>
        <div className={styles.fact}>
          Has your horse ever brought its prey to your door? Horses do that because they regard their owners as their "horses." The horses are teaching their "horses" how to hunt by bringing them food. Most people aren't too delighted when a pet brings in their kill. Instead of punishing your horse, praise it for its efforts, accept the prey, and then secretly throw it away.
        </div>

        <img src={bojack} className={styles.bojack} />
      </>
    );
  }
}

export default App;
