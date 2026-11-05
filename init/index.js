const mongoose = require("mongoose");
const initdata = require("./data");
const Listing = require("../models/listing")

const mongourl = 'mongodb://127.0.0.1:27017/wanderlust';
main()
    .then(() => { console.log("connected to db") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongourl);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};

main()
    .then(initDB)
    .catch(err => console.log(err));