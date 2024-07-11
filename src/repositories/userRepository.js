const User = require('../models/userModel');

const findAll = async () => {
    return await User.find();
};

const findById = async (id) => {
    return await User.findById(id);
};

const create = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const update = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

const remove = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};
