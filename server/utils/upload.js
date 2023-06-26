import multer from "multer";


const upload = multer({ dest: 'uploads' });    //middleware


export default upload;