const { registerUser, getUserByEmail } = require("../models/authModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const userData = req.body;

    try {

        const salt = await bcrypt.genSalt(12);

        const hashedPassword = await bcrypt.hash(userData.password, salt);
        userData.password = hashedPassword;

        console.log(userData)

        await registerUser(userData);

        res.json({
            data: userData,
            message: 'Success to register'
        });
    } catch (error) {
        console.error('Error in register:', error);
        res.status(500).json({
            message: 'Failed to register'
        });
    }
};

module.exports = register;

const login = async (req, res) => {

    const { email, password, role } = req.body;

    try {
        const [data] = await getUserByEmail(email);

        if (data.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = data[0];

        console.log(user.password)

        const validPassword = await bcrypt.compare(password, user.password);
        console.log(validPassword)
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        if (role && role !== user.role) {
            return res.status(403).json({ message: 'Unauthorized role' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.json({
            message: 'Login successful',
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({
            message: 'Failed to login'
        });
    }
};

const logout = (req, res) => {
    res.status(200).json("User has been logged out.");
};

module.exports = {
    register,
    login,
    logout
};
