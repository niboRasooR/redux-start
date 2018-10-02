const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    whee: 1234
}

//Redu
//" always do things immutably" eli älä koske stateen. lue statea.
const onlyReducer = (state = initialState, action) => {

    let newState = state;
     
    if(action.type === 'MUNA_TOIMINTO'){
        const object = {
            ...state,
            whee: state.whee + action.arvo
        }

        return object;
    }

    return newState;

};

//Store
const store = createStore(onlyReducer);
console.log(store.getState());
//store strongly connected to the store
// pass reducer to store


//DISPATCH  tässä käytetään storea oikeasti
// argumenttina aina olio, jossa on property nimeltään type
store.dispatch( { type: 'MUNA_TOIMINTO', arvo: 10});