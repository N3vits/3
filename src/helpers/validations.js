import { prismaORM } from "../db/config"



const checkEmail = async (email) => {
    const data = await prismaORM.user.findMany({
        where: {
            email
        }})

    if(!data) {
        return false
    }

    return true
}