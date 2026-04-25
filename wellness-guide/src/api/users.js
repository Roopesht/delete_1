const USERS = {
  1: { id: 1, name: "Roopesh", age: 50, active: true },
  2: { id: 2, name: "Anita", age: 32, active: false },
};

//This method gets the user data based on userId from the USERS object

export function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS[userId];

      if (!user) {
        reject(new Error("User not found"));
      } else {
        resolve(user);
      }
    }, 1000); // 1 second delay
  });
}
