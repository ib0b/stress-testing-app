import http from "k6/http";
import { sleep } from "k6";

export let options = {
    discardResponseBodies: true,
    ext: {
        loadimpact: {
            name: `${__ENV.TEST_NAME}` || "RPS hammering test",
            projectID: 3478725,
        }
    }
};
let host = "http://172.31.43.204:3000/"
export default function () {
    // relentless hammering of these 6 URLs.
    // 20 batches per iteration.
    for (let i = 0; i < 20; i++) {
        http.batch([
            ['GET', host],
            ['GET', host],
            ['GET', host],
            ['GET', host],
            ['GET', host],
            ['GET', host],
        ]);
    }
    sleep(0.1); // 100ms sleep between iterations.
}

//k6 run remoteRPS.js --duration=30s --vus=32