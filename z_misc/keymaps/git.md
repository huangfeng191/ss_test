git config --global https.proxy https://127.0.0.1:8011
git config --global --unset http.proxy
git config --global --unset https.proxy

git init
git add .
git remote add origin https://github.com/<user>/<repo>.git
git fetch origin master
git checkout master


