import http from "k6/http";
import { sleep } from "k6";

export let options = {
    discardResponseBodies: true,
};

export default function () {
    // relentless hammering of these 6 URLs.
    // 20 batches per iteration.
    for (let i = 0; i < 20; i++) {
        http.batch([
            ['GET', "http://localhost:3000/"],
            ['GET', "http://localhost:3000/"],
            ['GET', "http://localhost:3000/"],
            ['GET', "http://localhost:3000/"],
            ['GET', "http://localhost:3000/"],
            ['GET', "http://localhost:3000/"],
        ]);
    }
    sleep(0.1); // 100ms sleep between iterations.
}