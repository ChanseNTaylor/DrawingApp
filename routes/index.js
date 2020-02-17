"use strict";
const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', (req, res) => { res.render('index'); });

// GET draw page
router.get('/draw', (req, res) => { res.render("draw"); });

// GET explore page
router.get('/explore', (req, res) => { res.render("explore"); });

module.exports = router;
