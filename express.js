import express from 'express'
import cors from 'cors'
import PaymentApiRoute from './api/routes/payment.api.routes.js'




const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())

app.use(express.static('public'))
app.use('/', PaymentApiRoute)


app.listen(2023, function () {
    console.log('server started')
})