const connection = require('../database/connection');

module.exports = {
    async index( request,response ) {
        const profile = await connection('incidents').select('*')
        
        return response.json(profile);
    }
};