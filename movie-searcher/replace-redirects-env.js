// const fs = require('fs');
// const dotenv = require('dotenv');
// const path = require('path');

// // Cargar variables de entorno desde el archivo .env
// dotenv.config();

// // Obtener las variables de entorno
// const dbHost = process.env.REACT_APP_DB_HOST;
// const dbPort = process.env.REACT_APP_DB_PORT;

// // Verificar que las variables de entorno estén definidas
// if (!dbHost || !dbPort) {
//   console.error('REACT_APP_DB_HOST o REACT_APP_DB_PORT no están definidas en el archivo .env');
//   process.exit(1);
// }

// // Ruta al archivo _redirects en la raíz del proyecto
// const redirectsPath = path.join(__dirname, 'public', '_redirects');

// // Leer el contenido del archivo _redirects
// let redirectsContent = fs.readFileSync(redirectsPath, 'utf8');

// // Reemplazar las variables de entorno en el contenido
// redirectsContent = redirectsContent.replace('http://YOUR_IP_HERE:YOUR_PORT_HERE', `http://${dbHost}:${dbPort}`);

// // Escribir el contenido actualizado de vuelta al archivo _redirects
// fs.writeFileSync(redirectsPath, redirectsContent);

// console.log('Archivo _redirects actualizado con las variables de entorno.');

// // Copiar el archivo _redirects al directorio build
// const buildDir = path.join(__dirname, 'build');
// const buildRedirectsPath = path.join(buildDir, '_redirects');

// Verificar si el directorio build existe, si no, crearlo
// if (!fs.existsSync(buildDir)) {
//   fs.mkdirSync(buildDir);
// }

// // Copiar el archivo _redirects al directorio build
// fs.copyFileSync(redirectsPath, buildRedirectsPath);

// console.log('Archivo _redirects copiado al directorio build.');


//ESTO ME MODIFICA EL NETLIFY.TOML
const fs = require('fs');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Leer el archivo netlify.toml
let netlifyTomlContent = fs.readFileSync('netlify.toml', 'utf8');

// Reemplazar las variables de entorno con sus valores
netlifyTomlContent = netlifyTomlContent.replace(/\${(.*?)}/g, (match, key) => {
  return process.env[key] || match;
});

// Escribir el archivo netlify.toml con las variables de entorno reemplazadas
fs.writeFileSync('netlify.toml', netlifyTomlContent);

console.log('Archivo netlify.toml actualizado con las variables de entorno.');