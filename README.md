
# Stress Testing App

## Introduction

This is simple nodejs app for testing different instances.
It supports the following protocols

- HTTP
- gRPC

There are two types of test that can be perfomed.

1. Use two computers, one as server and and another computer as the client, that sends request to the server.
2. Use one computer that does both, it acts as a server and as a client.

## Installation

You will need docker installed on your server computer
You will also need to [install k6](https://k6.io/docs/getting-started/installation/)

## Running the server

You can run the server in two modes: gRPC and HTTP
for HTTP run the following commands

```
git clone https://github.com/ib0b/stress-testing-app.git
cd stress-testing-app

#build the docker images for the http nodejs server and the gRPC server
bash build.sh

#bash starthttp.sh
```

for gRPC run the following commands

```
git clone https://github.com/ib0b/stress-testing-app.git
cd stress-testing-app

#build the docker images for the http nodejs server and the gRPC server
bash build.sh

#bash startgrpc.sh
```

## Running the testing client (k6) HTTP

You have the option of running the client on the same machine as the server, or different machines.
You will need to [install k6](https://k6.io/docs/getting-started/installation/) based on your OS.
Once installed run the following command while in the root directory of the repo.

Running localy : change LOCAL_HTTP_HOST if need be in config.js

```
#increase the limit of concurrent connections allowed by the OS(Linux)
ulimit -n 250000

#runs the test locally
k6 run http-tests/local.js --duration=60s --vus=32
```

Running remotely: change REMOTE_HTTP_HOST in config.js to your remote host.

```
k6 run http-tests/remote.js --duration=60s --vus=32
```

## Running the testing client (k6) gRPC

You have the option of running the client on the same machine as the server, or different machines.
You will need to [install k6](https://k6.io/docs/getting-started/installation/) based on your OS.
Once installed run the following command while in the root directory of the repo.

Running localy : change LOCAL_GRPC_HOST if need be in *config.js*

```
#increase the limit of concurrent connections allowed by the OS(Linux)
ulimit -n 250000

#runs the test locally
k6 run grpc-tests/local.js --duration=60s --vus=32
```

Running remotely: change REMOTE_HTTP_HOST in config.js to your remote host.

```
k6 run grpc-tests/remote.js --duration=60s --vus=32
```

## Tweaks

You can experiment with the number of nodes in your cluster, also you can change --vus which stand for number of virtual users.
For more k6 documentation see [this.](https://k6.io/docs/)

Change the server response as per you service requirements in *docker.js* file

## Results

The following were the results of running on a **c5.4xlarge, 16 vCPUs with 32 GB RAM** on AWS.
### HTTP test 60 seconds 2 Million Requests Per Minute
<img width="776" alt="highestC5x4" src="https://user-images.githubusercontent.com/18010106/190234975-9c47f163-1817-4990-bdbd-7f66b61a6c63.png">

### RPC test 80 seconds 1.5 Million Requests Per Minute
<img width="692" alt="rpc1m" src="https://user-images.githubusercontent.com/18010106/190234830-36c08ffb-1b0f-4b2a-a33a-79a01464e9fd.png">
the biggest advantage of gRPC is bandwith saving. In this example our data savings were about 20%.

