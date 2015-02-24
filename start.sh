#!/bin/sh
export MONGO_URL="mongodb://server:27000/base"
export MONGO_OPLOG_URL="mongodb://server:27000/local"
export ROOT_URL="http://server:3000/"
/usr/local/bin/meteor
