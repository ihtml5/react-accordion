import './Snippet.css';

import React, { Component } from 'react';

export default class Snippet extends Component {

  render() {
    return (
      <div>
        {
          this.props.files.map(file => (
            <div key={file.name} className="file">
              <div className="fileName">{ file.name }</div>
              <pre className="pre">{ file.source }</pre>
            </div>
          ))
        }
      </div>
    );
  }

};
