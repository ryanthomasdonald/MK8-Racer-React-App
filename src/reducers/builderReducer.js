import {UPDATE_DRIVER} from "../actions/types"
import {UPDATE_KART} from "../actions/types"
import {UPDATE_TIRE} from "../actions/types"
import {UPDATE_GLIDER} from "../actions/types"
import {LOAD_INIT} from "../actions/types"
import {ADD_TO_CART} from "../actions/types"
import {DELETE_BUILD} from "../actions/types"
import MKData from "../assets/MK8-data.js"

const initialState = {
    driver: {
        id: 41,
        name: "Mario",
        type: "driver",
        img: "MK8_Mario_Icon.png",
        wg: 6,
        ac: 2,
        on: 4,
        of: 2,
        mt: 2,
        sl: 6,
        sw: 6,
        sa: 6,
        sg: 6,
        tl: 4,
        tw: 4,
        ta: 4,
        tg: 4
    },
    kart: {
        id: 1,
        name: "Standard Kart",
        type: "kart",
        img: "StandardKartBodyMK8.png",
        wg: 2,
        ac: 4,
        on: 3,
        of: 3,
        mt: 4,
        sl: 3,
        sw: 3,
        sa: 3,
        sg: 3,
        tl: 3,
        tw: 2,
        ta: 3,
        tg: 3
    },
    tire: {
        id: 84,
        name: "Standard",
        type: "tire",
        img: "StandardTiresMK8.png",
        wg: 2,
        ac: 4,
        on: 2,
        of: 5,
        mt: 3,
        sl: 2,
        sw: 3,
        sa: 2,
        sg: 3,
        tl: 3,
        tw: 3,
        ta: 3,
        tg: 3
    },
    glider: {
        id: 105,
        name: "Super Glider",
        type: "glider",
        img: "SuperGliderMK8.png",
        wg: 1,
        ac: 1,
        on: 1,
        of: 1,
        mt: 1,
        sl: 1,
        sw: 1,
        sa: 0,
        sg: 2,
        tl: 1,
        tw: 0,
        ta: 1,
        tg: 1
    },
    comboArr: []
}

const builderReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_INIT:
            return {
                ...state,
                driver: action.initState.driver,
                kart: action.initState.kart,
                tire: action.initState.tire,
                glider: action.initState.glider,
                comboArr: state.comboArr
            }
        case UPDATE_DRIVER:
            const newDriver = MKData.filter(item => item.id === action.driverID)
            return {
                ...state,
                driver: newDriver[0]
            }
        case UPDATE_KART:
            const newKart = MKData.filter(item => item.id === action.kartID)
            return {
                ...state,
                kart: newKart[0]
            }
        case UPDATE_TIRE:
            const newTire = MKData.filter(item => item.id === action.tireID)
            return {
                ...state,
                tire: newTire[0]
            }
        case UPDATE_GLIDER:
            const newGlider = MKData.filter(item => item.id === action.gliderID)
            return {
                ...state,
                glider: newGlider[0]
            }
        case ADD_TO_CART:
            const comboDriver = MKData.filter(item => item.id === parseInt(action.driverID))
            const comboKart = MKData.filter(item => item.id === parseInt(action.kartID))
            const comboTire = MKData.filter(item => item.id === parseInt(action.tireID))
            const comboGlider = MKData.filter(item => item.id === parseInt(action.gliderID))
            const comboObj = {
                id: action.id,
                driver: comboDriver[0],
                kart: comboKart[0],
                tire: comboTire[0],
                glider: comboGlider[0]
            }
            return {
                ...state,
                comboArr: state.comboArr.concat(comboObj)
                }
        case DELETE_BUILD:
            return {
                ...state,
                comboArr: state.comboArr.filter(combo => {
                    return combo.id !== action.buildID
                })
            }
        default:
            return state
    }
}

export default builderReducer