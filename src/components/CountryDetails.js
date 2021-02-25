import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {
  state = {
    country: {},
  };
  getCountry = () => {
    let id = this.props.match.params.id;
    this.props.props.forEach((e) => {
      if (e.cca3 === id) {
        let country = {
          id: e.cca3,
          name: e.name.common,
          capital: e.capital,
          area: e.area,
          borders: e.borders,
        };
        this.setState({ country });
      }
    });
  };
  componentDidMount() {
    this.getCountry();
  }
  componentDidUpdate() {
    let id = this.props.match.params.id;
    if (this.state.country.id !== id) {
      this.getCountry();
    }
  }
  render() {
    let style = {
      width: '30%',
    };
    const { name, capital, area, borders } = this.state.country;
    return (
      <div className="col-7">
        <h1>{name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={style}>Capital:</td>
              <td> {capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders
                    ? borders.map((e, i) => {
                        return (
                          <li key={i}>
                            <Link to={`/${e}`}>
                              {this.props.props.map((j, y) => {
                                if (j.cca3 === e) {
                                  return <p key={y}>{j.name.common}</p>;
                                } else {
                                  return '';
                                }
                              })}
                            </Link>
                          </li>
                        );
                      })
                    : borders}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
