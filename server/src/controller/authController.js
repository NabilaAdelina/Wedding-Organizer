const { registerUser, getUserByEmail } = require("../models/authModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const register = async (req, res) => {
    const userData = req.body;

    try {

        const salt = await bcrypt.genSalt(12);

        const hashedPassword = await bcrypt.hash(userData.password, salt);
        userData.password = hashedPassword;

        await registerUser(userData);

        res.json({
            data: userData,
            message: 'Success to register'
        });
    } catch (error) {
        console.error('Error in register:', error);
        // Send error response
        res.status(500).json({
            message: 'Failed to register'
        });
    }
};

module.exports = register;

// Login function
const login = async (req, res) => {

    // const password = "12345"

    // const hash = await bcrypt.hash(password, 13)

    // const isMatch = await bcrypt.compare("123", hash)

    // console.log(isMatch)

    const { email, password, role } = req.body;

    try {
        const [data] = await getUserByEmail(email);

        if (data.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = data[0];

        console.log(user)

        const validPassword = await bcrypt.compare(password, user.password);

        console.log('passwordmatch:', validPassword)

        // if (!validPassword) {
        //     return res.status(400).json({ message: 'Invalid password' });
        // }


        if (role && role !== user.role) {
            return res.status(403).json({ message: 'Unauthorized role' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key', { expiresIn: '1h' });

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

};

module.exports = {
    register,
    login,
    logout
};
