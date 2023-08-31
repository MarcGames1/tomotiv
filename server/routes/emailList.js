import express from 'express';
import { NewSletterSubscribe , Unsubscribe} from '../controllers/emailList';


const router = express.Router();

router.post('/newsletter-subscribe', NewSletterSubscribe);
// Ruta pentru a se dezabona de la o listă de e-mailuri
router.post('/newsletter-unsubscribe/:emailListID/:emailID', Unsubscribe);

module.exports = router;


//64f0d582d44e39ad950985e1/64f0d582d44e39ad950985e2