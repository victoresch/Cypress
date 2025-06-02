
# 🧪 Automatización de Test Store usando Cypress

# 🚀 Proyecto de Automatización Cypress

Este repositorio contiene pruebas automatizadas de extremo a extremo (E2E) para el sitio [https://automationteststore.com] dado que no cuenta con un sistema anti-bot. Estas pruebas fueron desarrolladas con **Cypress** utilizando el **patrón Page Object Model (POM)**, organizadas en flujos web y mobile haciendo uso de variable de entorno para ejecutar los test mobile y generación de reportes separados según la plataforma a ejecutar.

![Cypress](https://img.shields.io/badge/Cypress-12.0.0-brightgreen) 
![Node](https://img.shields.io/badge/Node-16%2B-blue) 
![npm](https://img.shields.io/badge/npm-8%2B-orange)

## 🌟 Características Principales

- 📱✨ Pruebas responsive para móvil (375x812)
- 🖥️✨ Pruebas para escritorio (1280x720)
- 📊✨ Reportes visuales con Mochawesome
- 🎥✨ Grabación automática de videos
- 📸✨ Capturas de pantalla en fallos

## 📋 Requisitos Previos

| Requisito | Versión |
|-----------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-✅-brightgreen) | 16+ |
| ![npm](https://img.shields.io/badge/npm-✅-orange) | 8+ |
| ![Cypress](https://img.shields.io/badge/Cypress-✅-brightgreen) | 14+ |

## 🛠 Instalación
```bash
npm install
```
## 🚀 Comandos Disponibles

🔥 Ejecución modo HeadLess
| Comando | Descripción     | Icono                |
| :-------- | :------- | :------------------------- |
| `npm run test:mobile   ` | `Ejecuta pruebas móviles	` | 📱 |
| `npm run test:desktop. ` | `Ejecuta pruebas desktop	` | 🖥️|
| `npm run test:all.     ` | `Ejecuta todas las pruebas	` | 📱+🖥️ |
| `npm run merge:reports ` | `Combina reportes	` | 🔗 |
| `npm run generate:report` | `Genera reporte combinado	` | 📊 |
| `npm run clean:reports	` | `Limpia reportes temporales	` | 🧹 |

🔥 Ejecución modo interactivo (Ejecutar en terminales separadas)
| Comando | Descripción     | Icono                |
| :-------- | :------- | :------------------------- |
| `npx cypress open --config-file cypress.config.mobile.js   ` | `Ejecuta pruebas móviles	` | 📱 |
| `npx cypress open --config-file cypress.config.desktop.js. ` | `Ejecuta pruebas desktop	` | 🖥️|


## 📂 Estructura del Proyecto
```bash
  cypress/
├── e2e/
│   ├── desktop/       # 🖥️ Pruebas desktop
│   └── mobile/        # 📱 Pruebas móviles
├── screenshots/       # 📸 Capturas
├── videos/            # 🎥 Videos
└── report/            # 📊 Reportes
```

## 📊 Generación de Reportes
Los reportes se generan automáticamente en:

| Comando | Descripción     |
| :-------- | :------- | 
| `cypress/report/mobile/   `| 📱 |
| `cypress/report/desktop/  `| 🖥️ |
| `cypress/report/combined/ `|  📊  (combinado)|

