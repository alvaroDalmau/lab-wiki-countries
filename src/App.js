import React, { Component } from 'react';
import Data from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: Data,
    });
  }

  render() {
    let style = {
      maxHeight: '90vh',
      overflow: 'scroll',
    };
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5" style={style}>
              <CountriesList data={this.state.countries} />
            </div>
            <Route
              path={'/:id'}
              render={(routeProps) => {
                return (
                  <CountryDetails
                    props={this.state.countries}
                    {...routeProps}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
