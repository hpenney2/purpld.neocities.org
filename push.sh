#!/usr/bin/env bash
set -e

git stash push --include-untracked
neocities push -e README.md -e static/ -e push.sh .
git stash pop