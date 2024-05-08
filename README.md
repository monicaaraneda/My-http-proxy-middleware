### Install Necessary Packages
Install Express and http-proxy-middleware:

``` bash
npm install express http-proxy-middleware
``` 


### Explanation:
changeOrigin: true: This option modifies the Host header to match the target's host.
pathRewrite: This option removes the /api prefix before forwarding the request. So, if you access http://localhost:3000/api/anything, it will proxy the request to https://httpbin.org/anything.

### Run Your Server

``` bash
node server.cjs
``` 

### Test Your Server

Para probar tu servidor, puedes utilizar un navegador web, curl, o cualquier cliente HTTP como Postman. Aquí te muestro cómo puedes probar usando curl:

Prueba la página de inicio:Abre tu navegador y ve a http://localhost:3001/ o usa curl:

``` bash
curl http://localhost:3001/
``` 
Esto debería devolver: "¡Hola Mundo! Este es el servidor proxy."

###  Test the Proxy Functionality
Prueba la funcionalidad del proxy:Usa curl para acceder a http://localhost:3001/api/anything, que debería ser redirigido a https://httpbin.org/anything:

``` bash
curl http://localhost:3001/api/anything
``` 
Esta solicitud va a tu servidor Express, que la redirige a httpbin.org bajo la ruta /anything, eliminando la parte /api debido a la configuración de pathRewrite.



### Analyze the Response
Observa la respuesta que recibes de httpbin.org. Debería ser un JSON mostrando varios detalles de tu solicitud, lo que prueba que el proxy está funcionando. Puedes probar otros endpoints como /api/ip o /api/user-agent para ver diferentes respuestas de httpbin.org.

``` bash
{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.4.0", 
    "X-Amzn-Trace-Id": "Root=1-663c02bb-6dffb83a0fce0fef6f8956f2"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "190.82.247.131", 
  "url": "https://httpbin.org/anything"
}
``` 