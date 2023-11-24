import multer from "multer";


export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename+"_"+Date.now()+"_"+file.originalname)
    }
})

export const upload = () => {
    multer({
        storage,
    }).single('image')
}