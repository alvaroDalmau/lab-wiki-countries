import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  render() {
    return this.props.data.map((e, i) => {
      return (
        <div key={i} className="list-group">
          <Link
            className="list-group-item list-group-item-action"
            to={`/${e.cca3}`}
          >
            {e.flag} {e.name.common}
          </Link>
        </div>
      );
    });
  }
}
