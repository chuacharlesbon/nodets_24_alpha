#!/bin/bash

echo "BACKUP SHELL - DETAILS"
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKUP="${SCRIPT_DIR}/backup"

ls -l "$BACKUP"
echo $?