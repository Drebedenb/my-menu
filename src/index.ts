import { PrismaClient } from '@prisma/client'
import express from 'express'
let cors = require('cors');



const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/MenuItems', async (req, res) => {
    const items = await prisma.menuItem.findMany()
    res.json(items)
})


app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
)