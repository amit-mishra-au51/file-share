import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);  //endpoint,middleware,callback
router.get('/file/:fileId', downloadImage);


export default router;

