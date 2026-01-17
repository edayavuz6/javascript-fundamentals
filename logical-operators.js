// Logical Operators Example

let isLoggedIn = true;
let isAdmin = false;

// AND (&&)
if (isLoggedIn && isAdmin) {
  console.log("User is logged in and is an admin.");
} else {
  console.log("User is not an admin.");
}

// OR (||)
if (isLoggedIn || isAdmin) {
  console.log("User has access.");
}

// NOT (!)
if (!isAdmin) {
  console.log("User is not an admin.");
}
