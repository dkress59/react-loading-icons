/usr/bin/git checkout -- .
/usr/bin/git pull
npm install --production=false
npm run storybook:build
