
# Taller Colaborativo GraphQL

Este repositorio aloja el código del frontend React utilizado en un contexto de gestión de equipos deportivos de fútbol. El frontend se encarga de proporcionar una interfaz de usuario intuitiva para interactuar con el [backend GraphQL][back] permitiendo a los usuarios realizar operaciones de consulta, creación, actualización y eliminación de equipos deportivos.

## Consideraciones de uso

Para utilizar este proyecto, siga los siguientes pasos:

- Clonar este repositorio.
- Ejecutar npm install para instalar las dependencias.
- Ejecutar npm start para iniciar el servidor (puerto **3000**).

## Dependencias principales

El proyecto utiliza las siguientes dependencias principales:

- "@apollo/client": "^3.8.2",
- "@apollo/react-hooks": "^4.0.0",
- "@testing-library/jest-dom": "^5.17.0",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "apollo-boost": "^0.4.9",
- "bootstrap": "^5.3.1",
- "bootswatch": "^5.3.1",
- "graphql": "^15.8.0",
- "graphql-tag": "^2.12.6",
- "react": "^18.2.0",
- "react-apollo": "^3.1.5",
- "react-bootstrap": "^2.8.0",
- "react-bootstrap-modal": "^4.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.15.0",
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4"
## Funcionamiento General

- **Consulta de Equipos:** El frontend realiza una consulta GraphQL para obtener la lista de equipos deportivos desde el backend. Utiliza la consulta definida en GET_TEAMS en el archivo teamList.js.

- **Eliminación de Equipos:** Los usuarios pueden eliminar equipos seleccionando el botón "Eliminar" asociado a cada equipo. Se utiliza la mutación DELETE_TEAM definida en el archivo teamList.js para llevar a cabo esta operación.

- **Actualización de Equipos:** Los usuarios pueden modificar los detalles de un equipo haciendo clic en el botón "Modificar". Esto abre un modal que permite editar los campos del equipo y guardar los cambios. La mutación UPDATE_TEAM se utiliza para actualizar la información del equipo.

- **Creación de Equipos:** Los usuarios pueden crear nuevos equipos utilizando el formulario en la parte superior de la página. Cuando se guarda un nuevo equipo, se utiliza la mutación CREATE_TEAM definida en el archivo teamForm.js.

- **Gestión de Errores:** Se manejan errores y se muestran mensajes de error apropiados en caso de problemas durante las operaciones

## Consideraciones finales

Este proyecto se creó con fines académicos para aplicar los conocimientos adquiridos sobre el uso de GraphQL y Apollo Client en el curso Electiva II.

Realizado por:

- Hovar Steven Rincón Vianchá
- Andrés Iván Sierra Espinel

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


[back]: https://github.com/StevenRincon24/ApiGraphQL,