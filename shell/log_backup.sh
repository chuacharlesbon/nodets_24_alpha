#!/bin/bash

echo "BACKUP SHELL - log.txt"
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"

CURRENTTS="$(date '+%s')"
YESTERDAYTS=$(($CURRENTTS - 24 * 60 * 60))

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CURRENTFILE="${SCRIPT_DIR}/log.txt"
TARGETDIR="${SCRIPT_DIR}/backup"
OUTPUTFILE="${TARGETDIR}/log-${YESTERDAYTS}.txt"

echo $CURRENTFILE
echo $TARGETDIR
echo $OUTPUTFILE

mkdir -p "$TARGETDIR"

if [[ ! -f "$CURRENTFILE" ]]; then
    echo "File not found"
    exit 1
fi

mv "$CURRENTFILE" "$OUTPUTFILE"
EC=$?

if [[ $EC -ne 0 ]]; then
    echo "Move failed with code $EC"
    exit $EC
fi

echo "Backup completed"