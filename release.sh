#!/bin/bash

set -e

# 1. Get latest git tag
oldTag=$(git describe --tags "$(git rev-list --tags --max-count=1)")

echo "Latest tag: $oldTag"
read -p "Enter new tag: " newTag

if [ -z "$newTag" ]; then
  echo "New tag cannot be empty!"
  exit 1
fi

echo "Updating $oldTag -> $newTag ..."

# 2. Escape dots for sed
oldTagEscaped=$(printf '%s\n' "$oldTag" | sed 's/\./\\./g')
newTagEscaped=$(printf '%s\n' "$newTag" | sed 's/\./\\./g')

# 3. Replace in files
grep -rl "$oldTag" . | xargs sed -i "s/$oldTagEscaped/$newTagEscaped/g"

echo "Files updated."

# 4. Git commit changes
git add .
git commit -m "Bump version: $oldTag → $newTag"

# 5. Create new tag
git tag "$newTag"

# 6. Push commit + tag
git push
git push origin "$newTag"

echo "Version bump complete: $oldTag → $newTag"
