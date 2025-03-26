# nodejs-express-template

-   Express
-   Express Validator
-   EJS
-   Dotenv
-   Node-Postgre
-   Prettier config
-   express-session
-   passport
-   passport-local
-   connect-pg-simple
-   bcryptjs

todo
- do try catch first
    -> then can play around with it 

- error handler middleware -> redirect to error page on error 
    - on DB call fail => call next on thrown errors to go to error page
    - error handling should be done in controller
- our page dies on db query fail

-> forward to centralized error handler than redirects to / for us? so we dont need to write it in our code

- make async db handler
    -> try catch
    -> on error -> call next('error data) 

later:
- obscenity filter
- footer
- font
- add mains
- user already exists error

- more auth middleswares ? 
is admin? 
is member && not admin?