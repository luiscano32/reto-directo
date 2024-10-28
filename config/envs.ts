import 'dotenv/config';
import * as joi from 'joi';

/**
 * Definición de variables de entorno utilizadas en la aplicación
 */
interface EnvVars {
    API_GATEWAY_PORT: number; // puerto donde se ejecuta API Gateway

    RABBITMQ_DEFAULT_DOMAIN: string; // dominio de RabbitMQ
    RABBITMQ_DEFAULT_USER: string;   // usuario de RabbitMQ
    RABBITMQ_DEFAULT_PASS: string;   // contraseña de RabbitMQ
    RABBITMQ_DEFAULT_PORT: string;   // cuerto de RabbitMQ
}

/**
 * Esquema de validación para las variables de entorno utilizando Joi:
 * Asegura que todas las variables necesarias estén presentes
 * y tengan el tipo de dato correcto.
 */
const envsSchema = joi.object({
    API_GATEWAY_PORT: joi.number().required(),

    RABBITMQ_DEFAULT_DOMAIN: joi.string().required(),
    RABBITMQ_DEFAULT_USER: joi.string().required(),
    RABBITMQ_DEFAULT_PASS: joi.string().required(),
    RABBITMQ_DEFAULT_PORT: joi.string().required(),
})
.unknown(true); // permite la existencia de otras variables no definidas en el esquema

// valida las variables de entorno usando el esquema definido
const { error, value } = envsSchema.validate(process.env);

if(error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    apiGatewayPort: envVars.API_GATEWAY_PORT,

    rabbitMq_default_domain  : envVars.RABBITMQ_DEFAULT_DOMAIN,
    rabbitMq_default_user    : envVars.RABBITMQ_DEFAULT_USER,
    rabbitMq_default_pass    : envVars.RABBITMQ_DEFAULT_PASS,
    rabbitMq_default_port    : envVars.RABBITMQ_DEFAULT_PORT,
};