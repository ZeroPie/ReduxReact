import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <h1>
          <Link to="/">React Redux</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }

});

export default Main;
