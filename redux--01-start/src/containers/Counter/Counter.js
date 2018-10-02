import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {Connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counteri} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub5}  />
           
                <button onClick={this.props.onSave}>Save Result</button>
                <ul>

                    {
                       this.props.re_sluts.map(
                           aitemi => (
                                <li key={aitemi.key} onClick={ this.props.onDelete }>
                                        {aitemi.arvo}
                                  </li>
                           )
                        
                       )
                    }
               
                </ul>
                    
           </div>
        );
    }
}

const mapToProps = state => {
    return {
        counteri: state.counter,
        re_sluts: state.results
    };
}

// mitä halutaan dispätsää
// creat-reduxin dispätsi on apupunktio joka tekee taikaa 
// kutsutaan this.props._propertynimi_
const mapDispatchToProps  = dispatch => {

    return {
        onIncrement : () => { dispatch(  {type: 'INCREMENT'}) },
        onDecrement : () => { dispatch(  {type: 'DECREMENT'}) },
        onSub5: () => { dispatch ( {type: 'SUB5'}) },
        onAdd5: () => { dispatch ({type: 'ADD', val: 10})},
        onSave: () => { dispatch ({type: 'STORE_RESULT'})}
    }
}

// connect antaa Counterille mapatyt propsit
//  maptoprops ensin (tai null jos sitä ei ole)
export default connect(mapToProps, mapDispatchToProps)(Counter);