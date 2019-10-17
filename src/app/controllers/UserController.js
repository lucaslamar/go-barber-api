import User from '../models/User';

class UserController {
    async store(req, res) {
        const UserExist = await User.findOne({
            where: { email: req.body.email },
        });
        if (UserExist) {
            return res.status(400).json({ error: 'usuario já existe' });
        }

        const { id, name, email, provideer } = await User.create(req.body);
        return res.json({
            id,
            name,
            email,
            provideer,
        });
    }
}

export default new UserController();
