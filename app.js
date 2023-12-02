// const createError = require('http-errors');
// const express = require('express');
import 'dotenv/config.js'
import "./config/database.js"

import createError from "http-errors"
import express from 'express'

import path from "path"
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from "cors"

import indexRouter from './routes/index.js'
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'

import { __dirname } from './utils.js'

//organizar mejor y separar los middlewares

const loggerOpts = { skip: () => process.env.NODE_ENV === 'test' }

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use((req, res, next) => {
  console.log("logged")

  next()
})

app.use(cors())
app.use(logger('dev', loggerOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)

app.use(notFound)
app.use(errorHandler)


export default app;
