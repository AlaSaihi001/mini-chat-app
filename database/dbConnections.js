import mongoose from "mongoose";

export function dbConnection(){
  mongoose.connect("mongodb://127.0.0.1:27017/saraha").then(
    () => {
      console.log("db connection")
    }
  ).catch(
    (err) => {
      console.log(err)
    }
  )
}

