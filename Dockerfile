FROM golang:1.24.3

# Install protoc
RUN apt-get update && apt-get install -y curl unzip && \
    curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v24.4/protoc-24.4-linux-x86_64.zip && \
    unzip protoc-24.4-linux-x86_64.zip -d /usr/local && \
    rm protoc-24.4-linux-x86_64.zip

# Install Go plugins for protoc
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest && \
    cp "$(go env GOPATH)/bin/protoc-gen-go" /usr/local/bin/ && \
    cp "$(go env GOPATH)/bin/protoc-gen-go-grpc" /usr/local/bin/

WORKDIR /work
COPY . .

ENTRYPOINT ["protoc"]
