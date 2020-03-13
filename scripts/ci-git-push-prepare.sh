#!/bin/bash -e

ssh_host=$1
private_key=$2

if [ -z "$private_key" ]; then
  >&2 echo "Set private key to environment variable"
  exit 1
fi

mkdir -p ~/.ssh
echo "$private_key" | tr -d '\r' > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -H "$ssh_host" >> ~/.ssh/known_hosts
