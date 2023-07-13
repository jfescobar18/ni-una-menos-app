import { MariaDevice } from "../../types/MariaDevice"
import { SET_ACTIVE_DEVICE } from "./types"

export const setActiveDevice = (activeDevice: MariaDevice) => ({
    type: SET_ACTIVE_DEVICE,
    activeDevice,
})
