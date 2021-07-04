// const Subcategory = require("./Models/subcategory");
// const mongoose = require("mongoose");
// const numberToText = require("number-to-text");
// require("number-to-text/converters/en-us");
// const num = 17;
// mongoose
//   .connect("mongodb://localhost:27017/quizdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     let ll = [];
//     for (let i = 0; i < num; i++) {
//       let Subcat = new Subcategory({
//         category: mongoose.Types.ObjectId("60d187f03384933a688393f7"),
//         name: "Math " + numberToText.convertToText(i + 1),
//       });
//       // Subcat.save()

//       ll.push(Subcat);

//       // console.log(Subcat)
//     }

//     Subcategory.insertMany(ll)
//       .then((rr) => console.log(rr))
//       .catch((err) => console.log(err));
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// //db.questions.find({subcategory:"60d43ada0366f0296c6d58a9"}).forEach(x=>db.questions.update({_id:x._id},{$set:{subcategory:ObjectId(x.subcategory)}}))
