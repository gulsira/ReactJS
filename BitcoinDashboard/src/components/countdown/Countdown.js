import React from 'react';
import moment from 'moment';

import './countdown.css';


export default class Countdown extends React.Component {
    state = {
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
        timeTillDuration: moment().add(8, 'hours'), // It sets 10 hours for countdown
        timeFormat: "h:mm a"
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            const { timeTillDuration, timeFormat } = this.state;
            const then = moment(timeTillDuration, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            this.setState({ hours, minutes, seconds });
        }, 1000);
    }


    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }


    render() {
        const { hours, minutes, seconds } = this.state;

        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }



        return (
            <div>
                <h3 style={{ textAlign: "center", marginBottom: '25px' }} >Countdown</h3>
                <div className="borderSize" >
                    <div style={{ padding: '15px' }} className="countdown-wrapper" >
                        {hours && (
                            <div>
                                <div className="countdown-item">
                                    <SVGCircle radius={hoursRadius} />
                                    {hours}
                                    <span>hours</span>
                                </div>
                                <div className="button" >
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        style={{ marginRight: '2px' }}
                                        onClick={() => { this.setState({ timeTillDuration: this.state.timeTillDuration.subtract(1, 'hours') }) }}
                                    >-
                                </button>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => { this.setState({ timeTillDuration: this.state.timeTillDuration.add(1, 'hours') }) }}
                                    >+
                                </button>
                                </div>
                            </div>
                        )}
                        {minutes && (
                            <div>
                                <div className="countdown-item">
                                    <SVGCircle radius={minutesRadius} />
                                    {minutes}
                                    <span>minutes</span>
                                </div>
                                <div className="button" >
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        style={{ marginRight: '2px' }}
                                        onClick={() => { this.setState({ timeTillDuration: this.state.timeTillDuration.subtract(1, 'minutes') }) }}
                                    >-
                                </button>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => { this.setState({ timeTillDuration: this.state.timeTillDuration.add(1, 'minutes') }) }}
                                    >+
                                </button>
                                </div>
                            </div>
                        )}
                        {seconds && (
                            <div>
                                <div className="countdown-item">
                                    <SVGCircle radius={secondsRadius} />
                                    {seconds}
                                    <span>seconds</span>
                                </div>
                                <div className="button" >
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        style={{ marginRight: '2px' }}
                                        onClick={() => { this.setState({ timeTillDuration: this.state.timeTillDuration.subtract(1, 'seconds') }) }}
                                    >-
                                </button>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => { this.setState({ timeTillDuration: this.state.timeTillDuration.add(1, 'seconds') }) }}
                                    >+
                                </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}