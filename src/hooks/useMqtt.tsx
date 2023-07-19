// React
import { useState, useEffect } from "react"
// Libs
import mqtt from "mqtt"
// Types and Interfaces
import { MQTTPayload } from "../types/MQTTPayload"

const setting = {
    url: `wss://${import.meta.env.VITE_MQTT_URL}:${
        import.meta.env.VITE_MQTT_PORT
    }/mqtt`,
    config: {
        username: import.meta.env.VITE_MQTT_USERNAME,
        password: import.meta.env.VITE_MQTT_PASSWORD,
    },
}

export const useMqtt = () => {
    const [client, setClient] = useState<mqtt.MqttClient | null>(null)
    const [isConnected, setIsConnected] = useState<boolean>(false)
    const [payload, setPayload] = useState<MQTTPayload>({
        topic: "",
        message: "",
    })

    const getClientId = () => {
        return `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`
    }

    const mqttConnect = async () => {
        const clientId = getClientId()
        const url = setting.url
        const options = {
            clientId,
            keepalive: 60,
            clean: true,
            reconnectPeriod: 300000,
            connectTimeout: 30000,
            rejectUnauthorized: false,
            ...setting.config,
        }

        const clientMqtt = await mqtt.connect(url, options)

        setClient(clientMqtt)
    }

    const mqttDisconnect = () => {
        if (client) {
            client.end(undefined, undefined, () => {
                setIsConnected(false)
            })
        }
    }

    const mqttSubscribe = async (topic: string) => {
        if (client) {
            const clientMqtt = await client.subscribe(
                topic,
                {
                    qos: 0,
                    rap: false,
                    rh: 0,
                },
                (error) => {
                    if (error) {
                        console.error("MQTT Subscribe to topics error", error)
                        return
                    }
                }
            )
            setClient(clientMqtt)
        }
    }

    const mqttUnSubscribe = async (topic: string) => {
        if (client) {
            const clientMqtt = await client.unsubscribe(
                topic,
                (error: Error) => {
                    if (error) {
                        console.error("MQTT Unsubscribe error", error)
                        return
                    }
                }
            )
            setClient(clientMqtt)
        }
    }

    useEffect(() => {
        mqttConnect()
        return () => {
            mqttDisconnect()
        }
    }, [])

    useEffect(() => {
        if (client) {
            client.on("connect", () => {
                setIsConnected(true)
            })
            client.on("error", (err) => {
                console.error("MQTT Connection error: ", err)
                client.end()
            })
            client.on("reconnect", () => {
                setIsConnected(true)
            })
            client.on("message", (_topic, message) => {
                const payloadMessage: MQTTPayload = {
                    topic: _topic,
                    message: message.toString(),
                }
                setPayload(payloadMessage)
            })
        }
    }, [client])

    return {
        mqttConnect,
        mqttDisconnect,
        mqttSubscribe,
        mqttUnSubscribe,
        payload,
        isConnected,
    }
}
