const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/register', (req, res) => {
    const{name, address} = req.body;

    const insertUserQuery = `INSERT INTO user(name) VALUES(?)`;

    db.query(insertUserQuery, [name], (err, userResult) => {
        if(err){
            return res.status(500).json({message: 'Error inserting user', error: err});
        }

        const userId = userResult.insertId;
        const insertAddressQuery = `INSERT INTO address(userid, address) VALUES(?, ?)`;

        db.query(insertAddressQuery, [userId, address], (err, addressResult) => {
            if(err){
                return res.status(500).json({message: 'Error inserting address', error: err});
            }

            res.status(201).json({message: 'User data added successfully'});
        });

        
    });
});



router.get('/users', (req, res) => {
    const query = `SELECT user.id, user.name, address.address FROM user LEFT JOIN address ON user.id = address.userid`;

    db.query(query, (err, results) => {
        if(err){
            return res.status(500).json({message: 'Error fetching users', error: err});
        }

        res.status(200).json(results);
    });
});


module.exports = router;