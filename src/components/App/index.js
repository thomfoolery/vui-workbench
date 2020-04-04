import React from 'react';

import styles from './styles.module.css';

import Editor from 'react-node-graph-editor';

function App() {
  return (
    <div className={styles.App}>
      <Editor/>
    </div>
  );
}

export default App;
