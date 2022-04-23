import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state;
    }
};

export default function Component() {
    const deposit = (amount) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount,
        });
    };

    const withdraw = (amount) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount,
        });
    };

    const [amount, dispatch] = useReducer(reducer, 0);

    return (
        <div>
           
            <h1>{amount}</h1>
            <button onClick={() => deposit(500)}> deposit</button>
     
            <button onClick={() => withdraw(500)}>withdraw</button>
        </div>
    );
}
