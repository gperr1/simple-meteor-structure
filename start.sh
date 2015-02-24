#!/bin/sh
export MONGO_URL="mongodb://1.mongodb.it.aramisauto.com:27000/aramis"
export MONGO_OPLOG_URL="mongodb://1.mongodb.it.aramisauto.com:27000/local"
export ROOT_URL="http://1.mongodb.it.aramisauto.com:3000/"
/usr/local/bin/meteor
