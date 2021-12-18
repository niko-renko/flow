const express = require('express');
const uuid = require('uuid');

const database = require.main.require('./modules/database');

const router = express.Router();

router.post(
    '/',
    async (
        req,
        res
    ) => {
        const {
            peer,
            content
        } = req.body;

        if(!req.auth)
        {
            req.status(401);
            req.json(
                {
                    success: false,
                    error: 'Unauthorized'
                }
            );

            return;
        }

        const [
            [
                user
            ]
        ] = await database.execute(
            `
                SELECT
                    *
                FROM
                    users
                WHERE
                    publicId = :publicId
                ;
            `,
            {
                publicId: peer
            }
        );

        if(!user)
        {
            res.status(400);
            res.json(
                {
                    sucess: false,
                    error: 'This user does not exist'
                }
            );

            return;
        }

        const [
            [
                connection
            ]
        ] = await database.execute(
            `
                SELECT
                    *
                FROM
                    connections
                WHERE
                (
                        creator = :creator
                    AND
                        peer = :peer
                )
                OR
                (
                        creator = :peer
                    AND
                        peer = :creator
                )
                ;
            `,
            {
                creator: req.auth.publicId,
                peer
            }
        );

        if(!connection)
        {
            res.status(400);
            res.json(
                {
                    success: false,
                    error: 'You are not connected to this user'
                }
            );

            return;
        }

        await database.execute(
            `
                INSERT INTO
                    messages
                    (
                        messageId,
                        connectionId,
                        content,
                        created,
                        updated
                    )
                VALUES
                    (
                        :messageId,
                        :connectionId,
                        :content,
                        :created,
                        :updated
                    )
                ;
            `,
            {
                messageId: uuid.v4(),
                connectionId: connection.connectionId,
                content,
                created: new Date(),
                updated: new Date()
            }
        );

        res.status(200);
        res.json(
            {
                success: true
            }
        );

        return;
    }
);

module.exports = router;