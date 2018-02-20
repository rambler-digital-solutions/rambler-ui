#!/bin/bash -e

mkdir -p ~/.ssh

if [[ "$*" = *"gitlab"* ]]; then
  if [ -z "$SSH_PRIVATE_KEY" ]; then
    >&2 echo "Set SSH_PRIVATE_KEY environment variable"
    exit 1
  fi
  echo "$SSH_PRIVATE_KEY" | tr -d '\r' > ~/.ssh/id_rsa_gl
  chmod 600 ~/.ssh/id_rsa_gl
  ssh-keyscan -H gitlab.rambler.ru >> ~/.ssh/known_hosts
fi

if [[ "$*" = *"github"* ]]; then
  if [ -z "$UI_BOT_SSH_PRIVATE_KEY" ]; then
    >&2 echo "Set UI_BOT_SSH_PRIVATE_KEY environment variable"
    exit 1
  fi
  echo "$UI_BOT_SSH_PRIVATE_KEY" | tr -d '\r' > ~/.ssh/id_rsa_gh
  chmod 600 ~/.ssh/id_rsa_gh
  ssh-keyscan -H github.com >> ~/.ssh/known_hosts
fi
