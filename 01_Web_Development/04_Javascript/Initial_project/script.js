var database = [
  {
    username: "Andrei",
    password: "supersecret"
  },
  {
    username: "Sally",
    password: "123"
  },
  {
    username: "Ingrid",
    password: "777"
  }
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning."
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool!"
  }
];

var userName = prompt("What's your username? ");
var passWord = prompt("What's your password? ");

function CheckCredentials(user, pass){
  var passwordIsCorrect = false;
  var idxDatabase = 0;
  while(!passwordIsCorrect &&
        idxDatabase < database.length){
    if(user === database[idxDatabase].username &&
       pass === database[idxDatabase].password){
      passwordIsCorrect = true;
    }
    idxDatabase++;
  }

  return passwordIsCorrect;
};

function SignIn(user, pass){
  var passwordIsCorrect = CheckCredentials(user, pass);

  if(passwordIsCorrect){
    console.log("Welcome " + user);
  } else {
    console.log("Incorrect user/pass");
  }
};


SignIn(userName, passWord);
// var todos = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study",
//   "eat healthy"
// ]

// for(var ctr=0; ctr < todos.length; ctr++){
//   console.log(todos[ctr] + "!");
// }
// var ctr=0;
//
// // while(ctr<todos.length){
// //   console.log(todos[ctr] + "!");
// //   ctr++;
// // }
//
// do {
//   console.log(todos[ctr] + "!");
//   ctr++
// } while (ctr < todos.length);
// function logTodos(todo, i){
//   console.log(todo, i)
// };
// todos.forEach(logTodos);
