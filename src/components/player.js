import React from 'react'

export default class Index extends React.Component {
  render() {
    return (
      <ul className="recommend">
          player page: {this.props.match.params.id}
      </ul>
    )
  }
}