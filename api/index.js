import express from 'express'
import cors from 'cors'
import PaymentApiRoute from './routes/payment.api.routes.js'




const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())
app.options('*', function (req,res) { res.sendStatus(200); });

app.use('/', PaymentApiRoute)


export default app