import express from 'express'
import * as PaymentController from '../controllers/payment.api.controllers.js'

const router = express.Router()

// Semana
router.route('/api/payment/')
    .post(PaymentController.createPreference)

export default router