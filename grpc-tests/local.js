import grpc from 'k6/net/grpc';
import { check } from 'k6';
import config from '../config.js'

const client = new grpc.Client();
client.load(['../definitions'], 'user.proto');

export default () => {
    if (__ITER == 0) {
        client.connect(config.LOCAL_GRPC_HOST, {
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
//k6 run grpc-tests/local.js --duration 10s --vus=32