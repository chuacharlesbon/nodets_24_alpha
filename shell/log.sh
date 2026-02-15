#!/bin/bash

echo "PATH LOG SHELL"
DATETIME="$(date '+%Y-%m-%d %H:%M:%S')"

REQ_PATH=$1
STATUSCODE=$2
MESSAGE=$3

# Check log file
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOGFILE="$SCRIPT_DIR/log.txt"

if [[ $STATUSCODE == "200" ]]; then
    echo "OK"
elif [[ -f "$LOGFILE" ]]; then
    echo "LOG: $DATETIME | $STATUSCODE | $REQ_PATH | $MESSAGE" >> $LOGFILE
else
    echo "LOG: $DATETIME | $STATUSCODE | $REQ_PATH | $MESSAGE" > $LOGFILE
fi

RC=$?
echo "$RC"