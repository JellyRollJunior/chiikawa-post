<h1 align="center">Chiikawa Post</h1>
<h3 align="center">Share your world with Chiikawa by your side <a href='' target="_blank">here</a>!</h3>
<p align="center">
    <img align="center" width="500px" alt="Creating post in Chiikawa Post" src="./readme/post.gif">
</p>

### Description

- Post your thoughts on a cute Chiikawa themed message board!
- Member code hint: Name of the silly yellow bunny (lowercase)
- Admin code hint: You'll never know! (for me only haha)

### Features

- Post your message with an adorable chiikawa image companion
    - Messages have title, message, image selected, time sent, author
- Create an account to post messages
    - upgrade your account to member then admin using secret codes
- Four types of users: no account, Account, Member, Admin
- A custom image selector when making post (took me a long time!)
- Random post header icons!
- Mega cute layout designed by ME and ALSO my love and effort!

### Account Permissions

|              |  View Posts  |  Create Posts  |  View Post Sender & Send Time  |  Delete Posts  |
|  ----------  |  :--------:  |  :----------:  |  :--------------------------:  |  :----------:  |
|  No account  |      ✅      |       ❌       |               ❌               |       ❌       |
|  Account     |      ✅      |       ✅       |               ❌               |       ❌       |
|  Member      |      ✅      |       ✅       |               ✅               |       ❌       |
|  Admin       |      ✅      |       ✅       |               ✅               |       ✅       |

### Stack

-   PostgreSQL
-   NodeJS, Express
-   HTML, EJS, CSS
-   DB Hosting: neon.tech
-   Server Hosting: koyeb.com
-   Notable libraries: 
    - Passport (auth)
    - Obscenity (text censoring)
    - date-fns (date formatting)
    - bcryptjs (hashing passwords)
    - express validator (validating form data)

## App Showcase

|  Deleting post   | 
|  --------------  | 
| <img width="400px" alt="Deleting post in Chiikawa Post" src="./readme/delete.gif"> | 

|  Signing up  |  Login  |
|  ----------  |  -----  | 
| <img width="250px" alt="Sign up form" src="./readme/sign-up.png"> | <img width="250px" alt="Login form" src="./readme/login.png"> |

|  Member access  |  Admin access  | 
|  -------------  |  ------------  | 
| <img width="250px" alt="Member form" src="./readme/member.png"> | <img width="250px" alt="Admin form" src="./readme/admin.png"> |

|  Error page  | 
|  ------------  | 
| <img width="250px" alt="Error page" src="./readme/error.png"> |

## Learning Outcomes

- Authentication with Passport
- Creating middlewares to perform utility functions (authenticating, checking authorization)
    - Understanding middleware chain and flow of execution
    - How to use next()
- Creating error middlewares to handle errors with an error page
- Animating my custom image selector :^)

### Retrospective (aka yapping)

I finished my backend before working on front end. This approach makes me feel a bit sad because I'm looking at an ugly app for 65% of the dev process. I will do a bit of styling + backend in the future. I'm getting used to coding express apps though! The db queries were much simpler on this project. 

## Acknowledgements

| Usage   |     Source     |
| ------- | -------------- |
| Images  | Chiikawa       | 
| Icons   | icons8.com     |
| Specs   | [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-members-only) |
