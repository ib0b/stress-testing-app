import grpc from 'k6/net/grpc';
import { check } from 'k6';

const client = new grpc.Client();
const GRPC_SERVER = "172.31.43.204:4000"
client.load(['../definitions'], 'user.proto');

export default () => {
    if (__ITER == 0) {
        client.connect(GRPC_SERVER, {
            plaintext: true, //allow insecure connection
            timeout: "2s"
        });
    }
    const response = client.invoke('userPackage.Billing/readUser', {});

    check(response, {
        'status is OK': (r) => r && r.status === grpc.StatusOK,
    });
    // Do NOT close the client
};
//k6 run grpc-tests/remote.js --duration 10s --vus=1