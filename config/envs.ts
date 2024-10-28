
import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    API_GATEWAY_PORT: number;

    RABBITMQ_DEFAULT_DOMAIN: string
    RABBITMQ_DEFAULT_USER  : string;
    RABBITMQ_DEFAULT_PASS  : string;
    RABBITMQ_DEFAULT_PORT  : string;
}

const envsSchema = joi.object({
    API_GATEWAY_PORT: joi.number().required(),

    RABBITMQ_DEFAULT_DOMAIN  : joi.string().required(),
    RABBITMQ_DEFAULT_USER    : joi.string().required(),
    RABBITMQ_DEFAULT_PASS    : joi.string().required(),
    RABBITMQ_DEFAULT_PORT    : joi.string().required(),
})
.unknown(true);

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