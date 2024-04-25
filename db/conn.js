const mongoose = require("mongoose");
const uri = "mongodb+srv://harrysaif675:BPo9P3FRdsq2yt97@clusterform.rsnxi70.mongodb.net/form?retryWrites=true&w=majority&appName=ClusterForm";

mongoose.connect(uri).then(() => {
    console.log('connection is successfull');
}).catch((error) => {
    console.log(error);

});