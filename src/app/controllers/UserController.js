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

    async update(req, res) {
        console.log(req.userId);

        return res.json({ ok: true });
    }
}

export default new UserController();
