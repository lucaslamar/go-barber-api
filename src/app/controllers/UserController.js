import User from '../models/User';

class UserController {
    async store(req, res) {
        const UserExist = await User.findOne({
            where: { email: req.body.email },
        });
        if (UserExist) {
            return res.status(400).json({ error: 'usuario já existe' });
        }

        const { name, email, provider, password } = req.body;

        const { id } = await User.create({
            name,
            email,
            provider,
            password,
        });

        return res.json({
            id,
            name,
            email,
            provider,
        });
    }
}

export default new UserController();
