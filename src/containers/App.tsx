import * as React from 'react';
import Counter from '../components/Counter';
import DevTools from '../components/DevTools';
import colors from '../colors';
import { MapStateToProps, MapDispatchToPropsFunction, connect } from 'react-redux';
import { increment } from '../actions/counter';

const mapStateToProps : MapStateToProps = (state: any, ownProps?: any) => {
    return {
        counters: state.counters
    }
}

const mapDispatchToProps : MapDispatchToPropsFunction = (dispatch, ownProps?) => {
    return {
        onTick: (id: number, amount: number) => dispatch(increment(id, amount))
    }
}

class AppContainer extends React.Component<any, {}> {
    constructor(props) {
		super(props);
	}
    
	render() {
		return (
			<div>
                {this.props.counters.map(counter => 
                    <Counter 
                        key={counter.id}
                        color={counter.color}
                        amount={counter.amount}
                        increment={counter.increment}
                        onTick={() => this.props.onTick(counter.id, counter.increment)}
                    />
                )}
                <DevTools />
			</div>
		);
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
