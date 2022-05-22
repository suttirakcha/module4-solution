let names = ["Jack", "Samba", "mike", "johnson", "Annie"];

for (let i = 0; i < names.length; i++){
  let firstLetter = names[i].charAt(0);
  
  if (firstLetter === "J" || firstLetter === "j"){
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}

