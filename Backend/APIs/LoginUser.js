const bcrypt = require('bcrypt');
const User = require('../DatabaseConnections/Models/User');
const jwt = require('jsonwebtoken');

function LoginUser(request, response) {
    User.findOne({"Email": request.body.Email})

    .then((user) => {

        if(user === null || user.length === 0) {
            return response.status(400).send({
                Message: "User not found" + JSON.stringify(request.body)
            })
        }
        bcrypt.compare(request.body.Password, user.Password)

        .then((result) => {
            if(!result) {
                return response.status(400).send({
                    Message: "Entered password is wrong" + JSON.stringify(request.body),
                    result,
                    
                })
            } else {
                const token = jwt.sign(
                    {
                        Id: user._id,
                        Email: user.Email
                    },
                    "RANDOM_TOKEN",
                    {
                        expiresIn: "1h"
                    }
                )

                return response.status(200).send({
                    Message: "User identified",
                    Email: user.Email,
                    FirstName: user.FirstName,
                    LastName: user.LastName,    
                    Gender: user.Gender,
                    token
                })
            }
        })
        .catch((result) => {
            return response.status(400).send({
                message: "Entered password is wrong yo " + JSON.stringify(request.body) + JSON.stringify(user),
                result,
            });
        })
    })
};

module.exports = LoginUser;