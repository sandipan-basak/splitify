import { Context } from 'koa';

class UserController {
  static async getUser(ctx: Context) {
    ctx.body = { message: 'Get user details' };
  }

  static async createUser(ctx: Context) {
    const userData = ctx.request.body;
    // Save user data to the database (not implemented in this example)
    ctx.body = { message: 'User created successfully' };
  }
}

export default UserController;