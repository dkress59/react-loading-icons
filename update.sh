/usr/bin/git checkout -- .
/usr/bin/git clean- f
/usr/bin/git pull
yarn --production=false
yarn storybook:build
