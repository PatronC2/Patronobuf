#!/bin/bash

set -e

PROTO_DIR="./proto"
GO_OUT="./go/patronobuf"
PY_OUT="./python/patronobuf"
CS_OUT="./csharp/patronobuf"
JAVA_OUT="./java/patronobuf"
JS_OUT="./js/patronobuf"
TS_OUT="./ts/patronobuf"
RB_OUT="./ruby/patronobuf"

# Ensure output directories exist
mkdir -p "$GO_OUT" "$PY_OUT" "$CS_OUT" "$JAVA_OUT" "$JS_OUT" "$TS_OUT"

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
  -o "$PY_OUT"

echo "[*] Generating C# code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l csharp \
  -o "$CS_OUT"

echo "[*] Generating Java code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l java \
  -o "$JAVA_OUT"

echo "[*] Generating JavaScript code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l node \
  -o "$JS_OUT"

echo "[*] Generating TypeScript code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l typescript \
  -o "$TS_OUT"

echo "[*] Generating Ruby code..."
docker run --rm -v "$(pwd):/defs" -w /defs \
  namely/protoc-all \
  -d "$PROTO_DIR" \
  -l ruby \
  -o "$RB_OUT"

echo "[✓] Protobuf generation complete."
