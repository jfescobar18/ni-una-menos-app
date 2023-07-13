import { MariaDevice } from "../../types/MariaDevice"

export type ActiveDeviceState = {
    activeDevice: MariaDevice
}

export type ActiveDeviceAction = {
    type: string
    activeDevice: MariaDevice
}

export const SET_ACTIVE_DEVICE = "SET_ACTIVE_DEVICE"
