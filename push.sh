#!/usr/bin/env bash
set -e


# git stash push --all
git stash push --include-untracked
pnpm run build

neocities push ./public
git stash pop
