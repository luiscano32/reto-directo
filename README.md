# Reto Directo: Microservicios con NestJS y RabbitMQ 🐇

Este proyecto es parte del reto técnico para construir una aplicación basada en microservicios utilizando **NestJS** y **RabbitMQ**. La aplicación realiza diversos cálculos basados en un número entero recibido como entrada y devuelve los resultados en formato JSON.

## 🚀 **Descripción del Proyecto**

El sistema está compuesto por múltiples **microservicios** que se encargan de realizar diferentes cálculos:
- **Paridad**: Determina si un número es par o impar.
- **Primalidad**: Verifica si un número es primo.
- **Factorial**: Calcula el factorial del número.
- **Suma de Enteros**: Suma todos los enteros desde 1 hasta `n`.
- **Factores**: Devuelve todos los factores del número.
- **Fibonacci**: Calcula el valor correspondiente de la secuencia de Fibonacci para `n`.

Todos estos microservicios están organizados en un **monorepo** y se comunican entre sí utilizando **RabbitMQ** como intermediario de mensajería.

---

## 📦 **Estructura del Proyecto**
<dl>
  <dt>├── apps/</dt>
    <dd>&nbsp;├── api-gateway/ # API Gateway para coordinar los microservicios │ </dd>
    <dd>&nbsp;├── factorial-app/ # Servicio de factorial</dd>
    <dd>&nbsp;├── factors-service/ # Servicio de factores</dd>
    <dd>&nbsp;└── fibonacci-service/ # Servicio de Fibonacci</dd>
    <dd>&nbsp;├── parity-service/ # Servicio de paridad</dd>
    <dd>&nbsp;├── primality-service/ # Servicio de primalidad</dd>
    <dd>&nbsp;├── sum-service/ # Servicio de suma de enteros</dd>
  <dt>├── docker-compose.yml # Configuración de Docker para levantar RabbitMQ </dt>
  <dt>├── config/</dt>
    <dd>&nbsp;├── envs.ts # Lógica de validación de variables .env</dd>
  <dt>├── .env.template # Template con variables de entorno requeridas</dt>
<dl>

---

## 🛠️ **Tecnologías Usadas**

- **NestJS**: Framework para construir los microservicios.
- **RabbitMQ**: Sistema de mensajería para la comunicación entre los servicios.
- **Docker**: Contenedores para gestionar los servicios.
- **TypeScript**: Lenguaje principal del proyecto.

#### **Librerías y Dependencias Específicas**
- **@nestjs/microservices**: Paquete para habilitar la comunicación entre microservicios en NestJS.
- **amqp-connection-manager**: Manejo automático de conexiones AMQP (utilizado para RabbitMQ).
- **amqplib**: Cliente AMQP para interactuar con RabbitMQ.
- **dotenv**: Gestión de variables de entorno.
- **Joi**: Validación de esquemas para variables de entorno.
- **rxjs**: Librería para programación reactiva utilizada en la gestión de mensajes y eventos.

---

## ⚙️ **Instalación y Configuración**

### **Requisitos Previos**
- **Node.js** y **npm** instalados.
- **Docker** y **Docker Compose** instalados.
- Puerto `5672` (RabbitMQ) y `3000` (Puerto API Gateway) libres en tu equipo.

### **Paso 1: Clonar el Repositorio**
```bash
git clone https://github.com/luiscano32/reto-directo.git
cd reto-directo
```

### **Paso 2: Instalar Dependencias**
Instala las dependencias para cada aplicación dentro del monorepo:
```bash
npm install
```

### **Paso 3: Levantar RabbitMQ con Docker***
Levanta RabbitMQ usando Docker:
```bash
docker-compose up -d
```

### **Paso 4: Configuración de variables de entorno***
Genera una copia del archivo `.env.template` a un `.env` para configurar variables de entorno requeridas:
```javascript
# Puerto en el que correrá el API Gateway.
API_GATEWAY_PORT=<YOUR_PORT>

# Dominio o dirección del servidor RabbitMQ. 
RABBITMQ_DEFAULT_DOMAIN=<YOUR_RABBITMQ_DOMAIN>
# Usuario de RabbitMQ. 
RABBITMQ_DEFAULT_USER=<YOUR_RABBITMQ_USER>
# Contraseña del usuario de RabbitMQ. 
RABBITMQ_DEFAULT_PASS=<YOUR_RABBITMQ_PASSWORD>
# Puerto donde se encuentra el servicio de RabbitMQ.
RABBITMQ_DEFAULT_PORT=<YOUR_RABBITMQ_PORT>
```

### **Paso 5: Ejecutar los Servicios**
Ejecutar desde la raíz del proyecto en una terminal diferente para ejecutar cada microservicio:
```bash
# Ejecutar api-gateway
nest start api-gateway

# Ejecutar factorial-app
nest start factorial-app

# Ejecutar factors-service
nest start factors-service

# Ejecutar fibonacci-service
nest start fibonacci-service

# Ejecutar parity-service
nest start parity-service

# Ejecutar primality-service
nest start primality-service

# Ejecutar sum-service
nest start sum-service
```

---

## 🧪 **Uso**
### Ejemplo de Petición al API Gateway
Haz una solicitud GET al API Gateway para probar el servicio de paridad:
```bash
GET http://localhost:3000/calculate?n=4
```
Respuesta:
```bash
{
  "isPair": true,
  "isPrime": false,
  "factorial": 40320,
  "sumN": 324,
  "factors": [
    1,
    2,
    4,
    8
  ],
  "fibonacci": 21
}
```

---

## 📚 **Documentación Adicional**
- [NestJS Documentation](https://docs.nestjs.com)
- [RabbitMQ Documentation](https://www.rabbitmq.com/docs)
- [Docker Documentation](https://docs.docker.com)

---

## 🔧 **Solución de Problemas**
#### Error de conexión con RabbitMQ:

Verifica que Docker esté corriendo correctamente.
Asegúrate de que los puertos `5672` y `15672` estén libres.
Cola ya existente con configuración diferente:

Elimina la cola en RabbitMQ desde el panel de administración en http://localhost:15672.

---

## 📬 **Contacto**
Estos son algunos de mis medios de contacto 👌:

- **Email**: luis.e.cano@outlook.com
- **LinkedIn**: https://www.linkedin.com/in/luis-cano-95oc21
- **GitHub**: [luiscano32](https://github.com/luiscano32/)