
const EntityRepository = require("../repositories/EntityRepository");

module.exports = {
    getAllEntity: async function (){
        const data = await EntityRepository.all();
        return data;
    },
}
