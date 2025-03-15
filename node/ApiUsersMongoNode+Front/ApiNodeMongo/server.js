import express from 'express'

import cors from 'cors'

import { PrismaClient } from '@prisma/client';

const Prisma = new PrismaClient()

//Instancia o express
const api = express()

//Por padrao, express nao entende/trabalha JSON, aqui dizemos para ele que vamos trabalhar com json e que ele vai receber um
api.use(express.json())

//CORS para habilitar qualquer frontend utilizar essa api, se nao o CORS bloqueia
api.use(cors())

//API USUARIOS

api.post('/usuarios', async (req, res) => {

    await Prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

api.get('/usuarios', async (req, res) => {

    let users = []

    if (req.query) {
        users = await Prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await Prisma.user.findMany()
    }

    
    res.status(200).json(users)

})

api.put('/usuarios/:id', async (req, res) => {

    await Prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

api.delete('/usuarios/:id', async (req, res) => {
    await Prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso !!"})
})

api.listen(3000)