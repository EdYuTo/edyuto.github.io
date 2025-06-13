#!/bin/bash

tmp=$(mktemp -d)
cp mangaplus.proto $tmp
cd $tmp

curl -s 'https://jumpg-webapi.tokyo-cdn.com/api/title_detailV3?title_id=100020' -o data.bin
timestamp=$(protoc --proto_path=. --decode=Response mangaplus.proto < data.bin | awk '/nextTimeStamp/ { print $2 }')
date -r $timestamp

cd -
rm -rf $tmp