import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import { createUser, deleteUser, getuser, getusers, updateUser } from '../Controller/userController.js';

const UserRouter = express.Router()

UserRouter.get('/',getusers)

UserRouter.post('/',createUser)

UserRouter.delete('/:id',deleteUser)

UserRouter.get('/:id',getuser)

UserRouter.patch('/:id',updateUser)

export default UserRouter;