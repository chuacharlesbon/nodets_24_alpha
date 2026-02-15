#!/bin/bash

echo "RATE LIMIT LOG SHELL"
DATETIME="$(date '+%Y-%m-%d %H:%M:%S')"

USERIP=$1
REQ_PATH=$2

# Check log file
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOGFILE="$SCRIPT_DIR/rateLimitLogs.txt"

if [[ -f "$LOGFILE" ]]; then
    echo "RATE LIMIT LOG: $DATETIME | $USERIP | $REQ_PATH" >> $LOGFILE
else
    echo "RATE LIMIT LOG: $DATETIME | $USERIP | $REQ_PATH" > $LOGFILE
fi

RC=$?
echo "$RC"