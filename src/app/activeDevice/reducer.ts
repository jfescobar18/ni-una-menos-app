import { ActiveDeviceAction, ActiveDeviceState } from "./types"

const initialState: ActiveDeviceState = {
    activeDevice: {
        id: "0",
        alias: "",
        name: "",
    },
}

const reducer = (
    state = initialState,
    action: ActiveDeviceAction
): ActiveDeviceState => {
    switch (action.type) {
        case "SET_ACTIVE_DEVICE":
            return { ...state, activeDevice: action.activeDevice }
        default:
            return state
    }
}

export default reducer
