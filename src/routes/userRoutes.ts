import Router from 'koa-router';
import UserController from '../controllers/userController';

const userRouter = new Router();


// GET route to get user details
userRouter.get('/users/:userId', UserController.getUser);

// POST route to create a new user
userRouter.post('/users', UserController.createUser);

export default userRouter;