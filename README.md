# Micro Frontend App on Module Federation with React + TypeScript + Vite

This template provides a minimal setup to get micro frontend working app in Vite with ESLint, TSLint and Prettier configurations.

## Project structure
- [host](https://github.com/Mirror-Image/micro-frontends-host) - Host app which contains app Router and handle all our services
- [remote-a](https://github.com/Mirror-Image/micro-frontends-remote-a) - Service A
- [remote-b](https://github.com/Mirror-Image/micro-frontends-remote-b) - Service B
- [remote-redux-store](https://github.com/Mirror-Image/micro-frontends-remote-redux-store) - Service which provides shared state

## How to run project locally
- At first run each service using following commands:
```sh
npm run build && npm run preview
```
- Then run host application:
```sh
npm run dev
```
- And follow the link http://localhost:5174/

