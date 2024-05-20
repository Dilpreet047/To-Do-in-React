const bcrypt = require('bcrypt');
const User = require('../DatabaseConnections/Models/User');

function RegisterUser(request, response) {
    User.collection.countDocuments()
    .then((count) => {
        bcrypt
        .genSalt(10, (err, salt) => {
          bcrypt.hash(request.body.Password, salt)
          .then((hashedPassword) => {
            const user = new User({
              UserId: count+1,
              FirstName: request.body.FirstName,
              LastName: request.body.LastName,
              Email: request.body.Email,
              Password: hashedPassword,
              Gender:  request.body.Gender
            });
            // save the new user
            user
              .save()
              // return success if the new user is added to the database successfully
              .then((result) => {
                response.status(201).send({
                  message: "User Created Successfully" + hashedPassword,
                  result,
                });
              })
              // catch error if the new user wasn't added successfully to the database
              .catch((error) => {
                response.status(500).send({
                  message: "Error creating user",
                  error,
                });
              });
          })
          // catch error if the password hash isn't successful
          .catch((e) => {
            response.status(500).send({
              message: "Password not hashed.",
              e,
            });
          });
        });
    });
};

module.exports = RegisterUser;