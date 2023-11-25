import multer from "multer"
import { prismaORM } from "../db/config.js"



export function home(req, res) {
    res.render('index', {title: 'Home Page'})
}

export function products(req, res) {
    res.render('products', {title: 'Home Page'})
}


export function profile(req, res) {
    res.render('profile', {title: 'Home Page'})
}

export function homePage(req, res) {
    res.render('home', {title: "Home Page"})
}


export async function updateProfile(req, res) {
    const {name, email, image} = req.body
    const id = req.id
    try {
        const user = await prismaORM.user.updateMany({
            where: {
                id
            },
            data: {
                name,
                email,
                image
            }
        })

        return res.json({
            msg: 'Successful upgrade',
            user
        })
        
    } catch(error) {
        return res.statu(500).json({
            msg: 'Internal Error'
        })
    }
}