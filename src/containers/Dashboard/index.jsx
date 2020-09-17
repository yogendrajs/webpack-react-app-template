import React, { Component } from "react";
import { connect } from "react-redux";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import getResults from "../../actions/Dashboard";
import NavBar from "../NavBar";

const Dashboard = Loadable({
  loader: () => import("../../components/Dashboard"),
  loading: () => "Loading",
});

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getResults: getReduxResults } = this.props;
    getReduxResults();
  }

  render() {
    const { results = [] } = this.props;
    return (
      <div>
        <NavBar />
        <Dashboard results={results} />
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  results: state.Dashboard.data,
});

DashboardContainer.defaultProps = {
  getResults: () => {},
  results: [],
};

DashboardContainer.propTypes = {
  getResults: PropTypes.func,
  results: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStatesToProps, {
  getResults,
})(DashboardContainer);
