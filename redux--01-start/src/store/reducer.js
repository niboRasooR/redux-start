import * as a from './actions';

const initialState = {
    counter: 0,
    addVal: 1,
    results: []
}


//HUOM: addVal KATOAA! tämä ei sulaudu kuten setState tekee
// SIksi pitää KLOONATA state uudeksi ja palauttaa olio
const reducer = ( state = initialState, action )  => {
    if(action.type === a.INCREMENT){
        // yksi tapa
        let nyysteit = Object.assign({}, state); //kopsu
        nyysteit.counter = state.counter + 1;
        return nyysteit;
    }
    if(action.type === a.DECREMENT){
        // käytetympi tapa  ... sama asia spread operaattorilla
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === a.ADD){

        return {
            ...state,
            counter: state.counter + action.val // TÄmä määritelty mäpdispätstoprops
        }
    }
    if(action.type === a.SUB5){

        return {
            ...state,
            counter: state.counter - 5
        }
    }
    if(action.type === a.STORE_RESULT){
        return{
            ...state,
            results: state.results.concat(state.counter) // ei push() koska push muuttaa!!
        }
    }

    if (action.type === a.SAVE_OBJECT){
        return{
            ...state,
            results: state.results.concat({ id: new Date(), arvo: state.counter}) // ei push() koska push muuttaa!!
        }
    }
    if (action.type === a.DELETE_RESULT){
        const updatedArray = state.results.slice();
        updatedArray.splice(action.id, 1);
            
        const filtteriKopio = state.results.filter( 
                (item) => { return item.id !== action.resultElementsID //dispätsissä määritetty!! EI action.id
                 }
        );

        const normaaliKopio = [...state.results]
        normaaliKopio.splice(action.id, 1);

        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
}

export default reducer;