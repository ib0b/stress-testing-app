import grpc from 'k6/net/grpc';
import { check, sleep } from 'k6';

const client = new grpc.Client();
const GRPC_SERVER = "localhost:4000"
client.load(['../definitions'], 'user.proto');

export default () => {
    client.connect(GRPC_SERVER, {
        plaintext: true, //allow insecure connection
        timeout: "2s"
    });


    const response = client.invoke('userPackage.Billing/readUser', {});

    check(response, {
        'status is OK': (r) => r && r.status === grpc.StatusOK,
    });

    // console.log(JSON.stringify(response.message));

    client.close();
    sleep(0.01);
};