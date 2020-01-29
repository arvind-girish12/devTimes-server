const express = require('express')
const mainRouter = express.Router()
const authRouter = require('./modules/auth/authRouter')
const dashboardRouter = require('./modules/dashboard/dashboardRouter')

mainRouter.use('/auth', authRouter)
mainRouter.use('/dashboard', dashboardRouter)

module.exports = mainRouter