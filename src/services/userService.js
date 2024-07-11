const userRepository = require('../repositories/userRepository');

const getUsers = async () => {
    return await userRepository.findAll();
};

const getUserById = async (id) => {
    return await userRepository.findById(id);
};

const createUser = async (userData) => {
    return await userRepository.create(userData);
};

const updateUser = async (id, userData) => {
    return await userRepository.update(id, userData);
};

const deleteUser = async (id) => {
    return await userRepository.remove(id);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
