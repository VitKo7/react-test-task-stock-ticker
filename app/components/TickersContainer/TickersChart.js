import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startFetching } from '../../actions/tickerActions';
import { connection } from '../../services/tickerService';
import TickersList from './TickersList';

export class TickersChart extends Component {
    componentDidMount() {
        // eslint-disable-next-line no-shadow
        const { startFetching } = this.props;
        startFetching();
    }

    render() {
        const { tickers, loading, error } = this.props;
        return (
            <div>
                {error && <p className="row">Sorry, check data. Error.</p>}
                {loading ? <p className="row">Loading...</p> : null}
                {tickers && tickers.length && <TickersList tickers={tickers} />}
            </div>
        );
    }
}

const mapStateToProps = ({ tickers, loading, error }) => {
    console.log(tickers, loading, error);
    return {
        tickers,
        loading,
        error,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        startFetching: startFetching(dispatch, connection),
    };
};

TickersChart.propTypes = {
    tickers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    startFetching: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TickersChart);
