import {UPDATE_DRIVER} from "./types"
import {UPDATE_KART} from "./types"
import {UPDATE_TIRE} from "./types"
import {UPDATE_GLIDER} from "./types"
import {LOAD_INIT} from "./types"
import {ADD_TO_CART} from "./types"
import {DELETE_BUILD} from "./types"
import MKData from "../assets/MK8-data.js"
import {v4 as uuidv4} from "uuid"

export const loadInit = () => {
    return {
        type: LOAD_INIT,
        initState: {
            driver: MKData[40],
            kart: MKData[0],
            tire: MKData[83],
            glider: MKData[104],
        }
    }
}

export const updateDriver = (driverID) => {
    return {
        type: UPDATE_DRIVER,
        driverID: driverID
    }
}

export const updateKart = (kartID) => {
    return {
        type: UPDATE_KART,
        kartID: kartID
    }
}

export const updateTire = (tireID) => {
    return {
        type: UPDATE_TIRE,
        tireID: tireID
    }
}

export const updateGlider = (gliderID) => {
    return {
        type: UPDATE_GLIDER,
        gliderID: gliderID
    }
}

export const addToCart = (driverID, kartID, tireID, gliderID) => {
    return {
        type: ADD_TO_CART,
        id: uuidv4(),
        driverID: driverID,
        kartID: kartID,
        tireID: tireID,
        gliderID: gliderID
    }
}

export const deleteBuild = (buildID) => {
    return {
        type: DELETE_BUILD,
        buildID: buildID
    }
}