import express from 'express'
import routeJogadores from './routes/jogadores'
import routeTimes from './routes/times'


const app = express()
const port = 3000

app.use(express.json())
app.use("/jogadores", routeJogadores)
app.use("/times", routeTimes)


