import express from 'express';
import getallUser from '../controllers/User';


const router = express.Router();

router.get('/',getallUser);


export default router;