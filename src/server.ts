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