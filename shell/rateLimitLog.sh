#!/bin/bash

echo "RATE LIMIT LOG SHELL"
DATETIME="$(date '+%Y-%m-%d %H:%M:%S')"

USERIP=$1
PATH=$2

# Check log file
LOGFILE="rateLimitLogs.txt"
if [[ -f "$LOGFILE" ]]; then
    echo "RATE LIMIT LOG: $DATETIME | $USERIP | $PATH" >> $LOGFILE
else
    echo "RATE LIMIT LOG: $DATETIME | $USERIP | $PATH" > $LOGFILE
fi

RC=$?
echo "$RC"