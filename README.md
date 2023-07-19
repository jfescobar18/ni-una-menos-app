# Ni Una Menos Web App

[![Typescript badge](https://badges.aleen42.com/src/typescript.svg)](#)
[![Docker badge](https://badges.aleen42.com/src/docker.svg)](#) [![Generic badge](https://img.shields.io/badge/build-passing-<COLOR>.svg)](#) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](#)

This is the Web Frontend project for Ni Una Menos Web App

## Initialization

Create an `.env` file for MQTT and Google Maps API

```
VITE_GOOGLE_MAPS_API_KEY="yourkey"
VITE_MQTT_URL="your.mqtt.server.com"
VITE_MQTT_USERNAME="username"
VITE_MQTT_PASSWORD="password"
VITE_MQTT_PORT=8884
```

## Local Development

Make sure Docker is running and run:

```bash
$ docker-compose up --build
```

Respect this order for new files in project

```javascript
// React
// Libs
// Redux Store
// Pages
// Components and Containers
// Types and Interfaces
// Hooks
// Styled Components
```

## ToDo

-   Add Tests

## License

[GNU-GPL](https://www.gnu.org/licenses/gpl-3.0.html)
