import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import userRouter from './routes/userRoutes';

const app = new Koa();

// Middleware
app.use(bodyParser());

// Routes
app.use(userRouter.routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});