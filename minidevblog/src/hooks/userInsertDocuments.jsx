import { useState, useEffect, useReducer} from "react";
import { db } from "../firebase/config"
import { collection, addDoc, Timestamp} from "firebase/firestore";

const initialState = {
    loading: null,
    erro: null
}

const insertReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
    }
}