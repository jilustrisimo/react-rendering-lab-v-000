import React from 'react';

export default class Rating extends React.Component {

  componentWillReceiveProps(nextProps) {
    let upTrend = this.props.rating < nextProps.rating
    let noChange = this.props.rating === nextProps.rating
    if (noChange) { return null }
    if (upTrend) {
     this.setState({increasing: true, decreasing: false})
   } else if (!upTrend) {
      this.setState({increasing: false, decreasing: true})
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}
