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
You will docker installed on your server computer
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

## Running the testing client (k6)
You have the option of running the client on the same machine as the server, or different machines.
You will need to [install k6](https://k6.io/docs/getting-started/installation/) based on your OS.
Once installed run the following command while in the root directory of the repo.



