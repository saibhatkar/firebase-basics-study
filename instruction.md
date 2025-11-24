# Used to connect and send data to database

install firebase in react app
`npm install firebase`

create and firebase.js file -> copy paste data ( config data )

send data to db ->
import getDatabase and from that set and ref
set(reference of db, {data})
reference of db -> db name which used to initialized and route

    set(
        ref(db, 'users/sai2'), {
            id: 2,      // data
            name: 'May',
            age: 33,
            }
        );

# NOTE :

ref() points to a location in your database (root or any path).
child() lets you move to a deeper path from an existing reference.
get() performs a one-time read of a reference.

# 📊 Summary Table

| Function    | Purpose                    | Example                     | When to Use                |
| ----------- | -------------------------- | --------------------------- | -------------------------- |
| **ref()**   | Point to a database path   | `ref(db, "users/1")`        | Direct reference to data   |
| **child()** | Go deeper from a reference | `child(ref(db), "users/1")` | Building paths dynamically |
| **get()**   | Read **one-time** data     | `get(ref(db, "users/1"))`   | Fetch data once            |

🎯 When to use what?
Use ref()

✔ When you know the path
✔ When you want direct access

Use child()

✔ When constructing a path step-by-step
✔ When the path is dynamic
✔ When you’re starting from a base reference

Use get()

✔ When you want to read data once
✔ When you don’t need real-time updates

# -------------------------------------

# V4

# Authentication in firebase

create an signup file
go to firebase console and enable email & password auth

in signup file import app , getauth
create an instance of auth
to create use use `createUserWithEmailAndPassword (auth , email, password) `
in this pass aprgument (auth , email, password)


# V5
use sign in user with user and password

create an signIn file

in signIn file import app , getauth
create an instance of auth
to create use use `signInWithEmailAndPassword (auth , email, password) `
in this pass aprgument (auth , email, password)

# v6
use context to send data in realtime database as well as auth section

1. crerate an firebase context
2. setup config setup and and  database url 
3. getAuth and getDatabase setup
4. wrap app component by FirebaseProvider
5. created FirebaseContextSignUp component
6. create an custom hook for firebase in context
7. use this hook in FirebaseContextSignUp 

