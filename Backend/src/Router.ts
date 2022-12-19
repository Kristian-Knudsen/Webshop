import { Router } from "express";

const r: Router = Router();

r.use('/orders', require('./Orders/Routes'));
r.use('/users', require('./Users/Routes'));
r.use('/products', require('./Products/Routes'));

module.exports = r;