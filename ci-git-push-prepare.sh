#!/bin/bash -e

if [ -z "$1" ]; then
  >&2 echo "Set private key to environment variable"
  exit 1
fi

mkdir -p ~/.ssh
echo "$1" | tr -d '\r' > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -H "$0" >> ~/.ssh/known_hosts
