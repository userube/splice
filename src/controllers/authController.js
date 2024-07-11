const authService = require('../services/authService');

const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await authService.register({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register };
