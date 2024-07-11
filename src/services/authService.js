const userRepository = require('../repositories/userRepository');

const register = async (userData) => {
    return await userRepository.create(userData);
};

module.exports = { register };
