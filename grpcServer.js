const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const userDef = protoLoader.loadSync("./definitions/user.proto", {});
const grpcObject = grpc.loadPackageDefinition(userDef);
const userPackage = grpcObject.userPackage;

const server = new grpc.Server();
const UUID = new Date().getTime() + randomInt(1, 1000) //server unique id
const PORT = process.env.PORT || 4000
server.bindAsync("0.0.0.0:" + PORT, grpc.ServerCredentials.createInsecure(), (error, port) => {
    console.log(`[GRPC]: started on port ${port}`)
    server.start();
});

server.addService(userPackage.Billing.service,
    {
        "readUser": readUser,
    });


function readUser(call, callback) {
    const user = {
        username: "Bob",
        premium: true,
        nextBillingDate: "01-01-2023",
        country: "KE",
        port: PORT,
        UUID
    }
    callback(null, user);
}

function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}