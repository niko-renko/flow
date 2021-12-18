const express = require('express');

const router = express.Router();

router.post(
    '/',
    (
        req,
        res,
        next
    ) => {
        const {
            peer
        } = req.body;

        if(!peer)
        {
            res.status(400);
            res.json(
                {
                    success: false,
                    error: 'One or more fields are missing'
                }
            );

            return;
        }

        next();
        return;
    }
);

module.exports = router;