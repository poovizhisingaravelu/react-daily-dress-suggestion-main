import express from 'express';
import { getposts,createpost} from '../controllers/posts';
const router = express.Router();
router.get('/', getposts);
router.post('/', createpost);
export default router;
