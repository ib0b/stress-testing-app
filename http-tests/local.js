import http from 'k6/http';
import config from '../config.js'
export const options = {
    vus: 1000,
    duration: '30s',
};
export default function () {
    http.get(config.LOCAL_HTTP_HOST);
}

// k6 run http-tests/local.js --duration=30s --vus=32