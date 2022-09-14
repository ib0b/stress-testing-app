import http from "k6/http";
import { sleep } from "k6";
import config from "../config.js"
export let options = {
    discardResponseBodies: true,
};
let host = config.REMOTE_HTTP_HOST
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

//k6 run http-tests/remoteRPS.js --duration=30s --vus=32