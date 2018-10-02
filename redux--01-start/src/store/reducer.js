const initialState = {
    counter: 0,
    addVal: 1,
    results: []
}


//HUOM: addVal KATOAA! tämä ei sulaudu kuten setState tekee
// SIksi pitää KLOONATA state uudeksi ja palauttaa olio
const reducer = ( state = initialState, action )  => {
    if(action.type === 'INCREMENT'){
        // yksi tapa
        let nyysteit = Object.assign({}, state); //kopsu
        nyysteit.counter = state.counter + 1;
        return nyysteit;
    }
    if(action.type === 'DECREMENT'){
        // käytetympi tapa  ... sama asia spread operaattorilla
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD'){

        return {
            ...state,
            counter: state.counter + action.val // TÄmä määritelty mäpdispätstoprops
        }
    }
    if(action.type === 'SUB5'){

        return {
            ...state,
            counter: state.counter - 5
        }
    }
    if(action.type === 'STORE_RESULT'){
        return{
            ...state,
            results: state.results.concat(state.counter) // ei push() koska push muuttaa!!
        }
    }

    if (action.type === 'SAVE_OBJECT'){
        return{
            ...state,
            results: state.results.concat({ id: new Date(), arvo: state.counter}) // ei push() koska push muuttaa!!
        }
    }
    return state;
}

export default reducer;