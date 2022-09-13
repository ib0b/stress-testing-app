const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const userDef = protoLoader.loadSync("./definitions/user.proto", {});
const grpcObject = grpc.loadPackageDefinition(userDef);
const userPackage = grpcObject.userPackage;


const PORT = process.env.PORT || 4000
const client = new userPackage.Billing("localhost:" + PORT, grpc.credentials.createInsecure())


client.readUser({}, (err, response) => {
    if (err) console.log(`error`, err);
    console.log("Recieved from gRPC server " + JSON.stringify(response))
})
