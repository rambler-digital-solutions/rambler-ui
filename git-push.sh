#!/bin/bash -e

url=$1
branch=$2

if [ -z "$SSH_PRIVATE_KEY" ]; then
  >&2 echo "Set SSH_PRIVATE_KEY environment variable"
  exit 1
fi

ssh_host=$(echo $url | sed 's/.*@//' | sed 's/[:/].*//')
if [ -z "$ssh_host" ]; then
  >&2 echo "Usage: $0 <user@git.host:project | ssh://user@git.host:port/project> [<branch>]"
  exit 1
fi

ssh_port=
if [[ $url =~ ^ssh://[^/]+:([0-9]+) ]]; then
        ssh_port="-p ${BASH_REMATCH[1]}"
fi

# TODO: skip on multiple runs
mkdir -p ~/.ssh
echo "$SSH_PRIVATE_KEY" | tr -d '\r' > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -H $ssh_port "$ssh_host" >> ~/.ssh/known_hosts

git push $url HEAD:${branch:-master} $([ -z "$DISABLE_FORCE_PUSH" ] && echo --force)