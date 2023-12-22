import React from "react";
import { useSelector } from "react-redux";

export const Sample = () => {
    const count=useSelector((state)=>state.counter.counts)
}