

let users = [
    { id: 1, firstName: "Mary", lastName: "Jane", username: "mary.jane"},
    {id: 2, firstName: "John", lastName: "Doe", username: "jDoe"}, 
    {id: 3, firstName: "Sue", lastName: "Storm", username: "sue.storm"}, 
    
];



// @desc Get all users 
// @route GET /api/users
export const getUsers = (request, response, next) => {
    return response.status(200).json(users); 
}; 

// @desc Get a single user 
// @route GET /api/user/:id
export const getUser = (request,response, next) => {
    const id = parseInt(request.params.id); 

    const user = users.find((user) => users.id === id); 

    if (!user) {
        const error = new Error('User was not found')
        error.status(404); 
        next(error);
    }

    response.status(200).json(user); 
};


// @desc Create new user 
// @route POST /api/users/
export const createUser = (request,response, next) => {
    const newUser = {
        id: users.length + 1, 
       firstName: request.firstName,
       lastName: request.lastName,
       username: request.username
    };

    if(newUser.firstName.length < 3 || newUser.lastName.length < 3 )  {
        const error = new Error('Please enter a valid name greater than 3 characters'); 
        error.status = 400; 
        return next(error);
    }

    if(newUser.username.length < 5 ) {
        const error = new Error('Please enter a valid username greater than 5 characters')
    } else if(users.find(user => user.username === newUser.username)) {
                const error = new Error(
                  `${user} has been taken, please enter a valid username`,
                );
                error.status = 400;
                return next(error);
    }

    users.push(newUser); 
    response.status(201).json(users)
};

// @desc Update user 
// @route PUT /api/users/:id 
export const updateUser = (request, response, next) => {
    const id = parseInt(request.params.id);
    const user = users.find((user) => user.id == id); 

    if (!user) {
        const error = new Error('User was not found'); 
        error.status = 400
        return next(error); 
    }

    user.firstName = request.body.firstName;
    user.lastName = request.body.lastName;
    user.username = request.body.username; 
    response.status(200).json(users); 
};

// @desc Delete user 
// @route DELETE /api/user/:id

export const deleteUser = (request, response, next) => {
    const id = parseInt(request.params.id);
     const users = user.find((user) => user.id === id ); 

     if(!user) {
        return response.status(400)
        .json({ message: 'User was not found'})
     }

     users = user.filter((user) => user.id === id); 
     response.status(200).json(users);
}