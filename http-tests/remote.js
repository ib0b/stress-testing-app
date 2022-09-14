import http from 'k6/http';
import config from "../config.js"
export const options = {
    vus: 1000,
    duration: '30s',
};
export default function () {
    http.get(config.REMOTE_HTTP_HOST);
}

//k6 run http-tests/remote.js --duration=30s --vus=32