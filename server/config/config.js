//PUERTO
process.env.PORT = process.env.PORT || 3301;

//BASE DE DATOS
process.env.URLDB = process.env.URLDB || 'mongodb://localhost:27017/BD_AUTOMOTORA';

//SEED
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo-para-automotora.#$%&%#$&"#$"Ñ[';

//CADUCIDAD TOKEN
process.env.CADUCIDAD_TOKEN = '48h';