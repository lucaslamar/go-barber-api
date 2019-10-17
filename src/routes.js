import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'lucas lamar 2',
        email: 'lucass.lamar2@hotmail.com',
        password_hash: '1234567890',
    });
    return res.json(user);
});

export default routes;
