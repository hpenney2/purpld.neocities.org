#!/usr/bin/env bash
set -e


# git stash push --all
pnpm run build

neocities push ./content
# git stash pop
