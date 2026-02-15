#!/bin/bash

echo "PATH LOG SHELL"
DATETIME="$(date '+%Y-%m-%d %H:%M:%S')"

PATH=$1
STATUSCODE=$2
MESSAGE=$3

# Check log file
LOGFILE="log.txt"
if [[ $STATUSCODE == "200" ]]; then
    echo "OK"
elif [[ -f "$LOGFILE" ]]; then
    echo "LOG: $DATETIME | $STATUSCODE | $PATH | $MESSAGE" >> $LOGFILE
else
    echo "LOG: $DATETIME | $STATUSCODE | $PATH | $MESSAGE" > $LOGFILE
fi

RC=$?
echo "$RC"