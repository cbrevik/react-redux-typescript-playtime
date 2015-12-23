import * as React  from 'react';
import { increment, decrement } from '../actions/counter'

interface ICounterProps {
    key: string;
	increment: number;
	color: string;
    onTick: () => void;
    amount: number;
}

export default class Counter extends React.Component<ICounterProps, {}> {
	private interval: number;

	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.interval = window.setInterval(() => this.tick(), 1000);
	}

	tick() {
        this.props.onTick();
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<h1 style={{ color: this.props.color }}>
				Counter ({this.props.increment}): {this.props.amount}
			</h1>
		);
	}
}
