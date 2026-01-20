import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 4000


async function main() {
    try {
        await prisma.$connect()
        console.log('Connected to the database successfully.')
        
        app.listen(port, ()=> {
            console.log(`server is running http://localhost:${port}`)
        })

    } catch (error) {
        console.error('an error occurred:', error)
        await prisma.$disconnect()
    }
}

main()

// client id
// 1009991701426-642e28t11e06of6pkmp6pd6hccej5rbg.apps.googleusercontent.com
// client secret 
// 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