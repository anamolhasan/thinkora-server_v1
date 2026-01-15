import { prisma } from "../lib/prisma"
import { UserRole } from "../middlewares/auth"


async function seedAdmin () {
    try {
        console.log('*** Admin Seeding Started...***')
        const adminData = {
            name:'Admin Saheb',
            email:'admin@gmail.com',
            role: UserRole.ADMIN,
            password:'123456'
        }
        // console.log(adminData)
        console.log('*** Checking Admin Exist or not')
        // check user exist on db or not 
        const existingUser = await prisma.user.findUnique({
            where:{
                email: adminData.email
            }
        })
// console.log(existingUser)
        if(existingUser){
            throw new Error('User already exists!!')
        }

        const signUpAdmin = await fetch("http://localhost:5000/api/auth/sign-up/email", {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Origin":"http://localhost:5000"
            },
            body: JSON.stringify(adminData)
        })
console.log(signUpAdmin)

        
        // if(signUpAdmin.ok){
        //     console.log('*** Admin created ***')
        //     await prisma.user.update({
        //         where:{
        //             email: adminData.email
        //         },
        //         data:{
        //             emailVerified: true
        //         }
        //     })
        //     console.log('*** Email verification status updated!')
        // }


        console.log('SUCCESS')
    } catch (error) {
        console.error(error)
    }
}

seedAdmin()