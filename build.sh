#!/bin/bash

set -e

PROTO_DIR="./proto"
GO_OUT="./go/patronobuf"
PY_OUT="./python/patronobuf"
CS_OUT="./csharp/patronobuf"

# Ensure output directories exist
mkdir -p "$GO_OUT" "$PY_OUT" "$CS_OUT"

echo "[*] Generating Go code..."

docker build -f Dockerfile.go -t proto-gen .

docker run --rm -v "$PWD":/work -w /work proto-gen \
  --go_out="$GO_OUT" \
  --go_opt=paths=source_relative \
  --go-grpc_out="$GO_OUT" \
  --go-grpc_opt=paths=source_relative \
  --proto_path=proto proto/agents.proto

echo "[*] Generating Python code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l python \
  -o python/patronobuf

echo "[*] Generating C# code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l csharp \
  -o csharp/patronobuf

echo "[✓] Protobuf generation and go.mod complete."
