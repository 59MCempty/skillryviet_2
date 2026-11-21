#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PORT="${1:-4173}"

echo "Dang khoi chay xem truoc Nep Studio Template tai: http://127.0.0.1:${PORT}"
echo "Nhan Ctrl+C de dung may chu."
exec python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT_DIR/site"
