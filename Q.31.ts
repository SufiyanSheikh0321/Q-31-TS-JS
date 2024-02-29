//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

//1st Method

let usernames: string[] = ["Sufiyan", "Amir", "Ramish", "Ashir"];

if (usernames.length === 0) {
  console.log("We need to find some users!")
}else{
  for (let i=0; i<=usernames.length; i++); 
}
    console.log(usernames);
  

//2nd Method


let usernames: string[] = [];

if (usernames.length === 0) {
  console.log("We need to find some users!")
}else{
  for (let i=0; i<=usernames.length; i++); 
}
    console.log(usernames);
  
