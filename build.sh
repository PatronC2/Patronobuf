#!/bin/bash

set -e

PROTO_DIR="./proto"
GO_OUT="./go"
PY_OUT="./python"
CS_OUT="./csharp"

# Make sure output directories exist
mkdir -p "$GO_OUT"
mkdir -p "$PY_OUT"
mkdir -p "$CS_OUT"

echo "[*] Generating Go code..."
protoc \
  --proto_path="$PROTO_DIR" \
  --go_out="$GO_OUT" \
  --go_opt=paths=source_relative \
  --go-grpc_out="$GO_OUT" \
  --go-grpc_opt=paths=source_relative \
  "$PROTO_DIR"/*.proto

echo "[*] Generating Python code..."
protoc \
  --proto_path="$PROTO_DIR" \
  --python_out="$PY_OUT" \
  "$PROTO_DIR"/*.proto

echo "[*] Generating C# code..."
protoc \
  --proto_path="$PROTO_DIR" \
  --csharp_out="$CS_OUT" \
  "$PROTO_DIR"/*.proto

echo "[✓] Protobuf generation complete."
