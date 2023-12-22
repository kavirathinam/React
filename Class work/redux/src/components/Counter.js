import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement,increment } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>Count:{count}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;