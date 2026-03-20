#!/usr/bin/env bash
set -e


# git stash push --all

numEntries=$(git stash list | wc -l)

git stash push --include-untracked

newEntries=$(git stash list | wc -l)
count=$((newEntries-numEntries))

pnpm run build

neocities push ./public

if (( count > 0 )); then
    git stash pop
fi
