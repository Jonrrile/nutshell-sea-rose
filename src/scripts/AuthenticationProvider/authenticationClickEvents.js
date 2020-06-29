import API from "./authenticationProvider.js"

// Written by Nick Glover
const userLogin = document.querySelector("#loginUsername")
const passwordLogin = document.querySelector("#loginPassword")
const submitLoginButton = document.querySelector("#loginButton")




// Login event for the webpage
const sessionStorageLogIn = () => {
    submitLoginButton.addEventListener('click', event => {
        API.getAllUsers()
            .then(userArray => {
                let user = userArray.find((user) => {
                    
                    // Validation for password and username
                    if (passwordLogin.value === user.password && user.user === userLogin.value) {
                        return user.user

                    } 
                    // else if(!user) {
                    //     // user IS NOT signed in, so only sign in and create account buttons are visible.
                    //     submitLoginButton.disabled = false;
                    //     createAccountButton.disabled = false;
                    //     signOutButton.disabled = true;
                    // } else {
                    //     // user IS signed in, so only sign out button is visible.
                    //     submitLoginButton.disabled = true;
                    //     createAccountButton.disabled = true;
                    //     signOutButton.disabled = false;
                    // }
                })

                // We decided to use a key value pairs for our session storage.
                sessionStorage.id = user.id
                sessionStorage.user = user.user
                console.log(sessionStorage)
                
            })
    })
}

//Factory Function for creating new user
const makeUser = (user, email, password) => {
    const newUserTemplate = {
        user: user,
        email: email,
        password: password
    }
    return newUserTemplate;
    
}

const createAccountButton = document.querySelector("#create-account-button")
// To Do List
//get values from input fields (consolelog)
//once you have the input, create newUser object with factory function
//call the new object 
const createNewUser = (newUser) => {
    createAccountButton.addEventListener("click", event => {
        
        const createUsername = document.querySelector("#createUsername").value;
        const createEmail = document.querySelector("#createEmail").value;
        const createPassword = document.querySelector("#createPassword").value;
        const newUserLoginInfo = makeUser(createUsername, createEmail, createPassword)
        console.log("Created New User!", newUserLoginInfo)
        // console.log("Username:", createUsername, "Email:", createEmail, "Password:", createPassword)
        // API.createUser(newUser)
        //     .then(newUser => {
        //     localStorage.clear() // If there was a user signed in, this will
        //     localStorage.id = newUser.id //Then we can store the id we got
        
        //     })
    })

}

export {sessionStorageLogIn, createNewUser, makeUser}