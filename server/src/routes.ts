import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderController';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListComplimentsController } from './controllers/ListComplimentsController';
import { ForgotPasswordController } from './controllers/ForgotPasswordController';
import { ResetPasswordController } from './controllers/ResetPasswordController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

const listUserSenderComplimentsController =
  new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController();
const listComplimentsController = new ListComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/forgot_password', forgotPasswordController.handle);
router.post('/reset_password', resetPasswordController.handle);

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSenderComplimentsController.handle
);
router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
);
router.get(
  '/compliments',
  ensureAuthenticated,
  listComplimentsController.handle
);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

export { router };
