import { response } from "express";
import { prismaORM } from "../db/config.js";
//import { createUser } from "../helpers/queries.js";



export async function login(req, res = response){
    const {email, password} = req.body
    try {
        const data = await prismaORM.user.findMany({
            where: {
                email
            }
        })

        const user = await prismaORM.user.findMany({
            where: {
                password
            }
        })


        console.log(data, user)

        if (data.length <= 0 || user.length <= 0) {
            return res.status(400).json({
                msg:'Bad request'
            })
        }

        return res.redirect('/home')

    } catch(error) {
        return res.status(500).json({
            msg:'Server Error'
        })
    }
}


export function registerPage(req, res = response) {
    res.render('register', {title: 'User registration'})
}


export function loginPage(req, res = response) {
    res.render('login', {title: 'Login'})
}


export async function register(req, res = response) {
    const {name, email, password} = req.body
    
    try{
        const role = await prismaORM.role.create({
            data: {
              name: 'USER_ROLE',
            },
          });

          
        
          const user = await prismaORM.user.create({
            data: {
              name,
              email,
              password, 
              roleId: role.id, 
            },
          });
          
    } catch(error) {
        return res.status(500).json({
            msg:'Server Error'
        })
    }
    
    return res.redirect('/auth/login')
}


