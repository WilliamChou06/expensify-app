
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// })

// database.ref("expenses").push({
//     description: "Rent",
//     note: "Two months",
//     amount: "1600.45",
//     createdAt: 1600
// })


// database.ref("notes").push({
//     title: "Course Topics",
//     body: "Firebase, Nodejs"
// })

// database.ref().on("value", (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (err) => {
//     console.log(err)
// })

// const onValueChange = database.ref().on("value", (snapshot) => {
//     console.log(snapshot.val())
// }, (err) => {
//     console.log("Error with data fetching", err)
// })

// setTimeout(() => {
//     database.ref("age").set(30)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//     database.ref("age").set(40)
// }, 11000)

// database.ref()
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// database.ref().set({
//     name: "William Chou",
//     age: 20,
//     job: {
//         title: "Software Developer",
//         company: "Google"
//     },
//     stressLevel: 6,
//     location: {
//         city: "San Francisco",
//         country: "United States"
//     }
// }).then(() => {
//     console.log("Data has been saved");
// }).catch((err) => {
//     console.log("Failed:", err);
// })

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
// })

// database.ref("isSingle").set(null);

// database.ref("isSingle")
//     .remove()
//     .then(() => {
//         console.log("succesfully removed");
//     })
//     .catch((err) => {
//     console.log("error!:", err)
//     });
