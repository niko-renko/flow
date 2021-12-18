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
            peer,
            content
        } = req.body;

        if(
            !peer ||
            !content
        )
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