import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import { withRouter } from 'react-router'

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#f0f0f0'
  },
}))

class BasicTabs extends Component {
  state = {
    index: 0,
  }


  handleChange = (event, index) => {
    this.setState({
      index
    })
    console.log(this.props)
    this.props.history.push('/recommend')
  };


  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styleSheet)(withRouter(BasicTabs));