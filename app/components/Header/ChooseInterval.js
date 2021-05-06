import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFetchInterval } from '../../actions/tickerActions';

export class ChooseInterval extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.setUpdateTime = this.setUpdateTime.bind(this);
    }

    handleChange(event) {
        this.props.setFetchInterval(Number(event.target.value));
    }

    setUpdateTime(result) {
        // localStorage.setItem('interval', JSON.stringify(result));
        try {
            axios.post(`http://localhost:4000/${result}`);
        } catch (error) {
            throw new Error(error);
        }
    }

    render() {
        const { interval } = this.props;
        return (
            <div className="choose-interval col-md-4">
                <form className="form-inline">
                    <div className="form-group">
                        <label>Select data update interval:</label>
                        <select
                            className="form-control options"
                            value={interval}
                            onChange={this.handleChange}
                        >
                            <option value="500">0.5 seconds</option>
                            <option value="1000">1000</option>
                            <option value="3000">3 seconds</option>
                            <option value="5000">5 seconds</option>
                            <option value="7000">7000</option>
                            <option value="10000">10 seconds</option>
                        </select>
                        <button
                            className="btn btn-info"
                            onClick={() => this.setUpdateTime(interval)}
                        >
                            Set interval
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        interval: state.interval,
    };
};

const mapDispatchToProps = {
    setFetchInterval,
};

ChooseInterval.propTypes = {
    interval: PropTypes.number.isRequired,
    setFetchInterval: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseInterval);
