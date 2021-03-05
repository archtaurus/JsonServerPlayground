# JSON-Server Playground

This repository is a playground for [json-server](https://www.npmjs.com/package/json-server).

## Use this repository

``` shell
git clone git@github.com:archtaurus/JsonServerPlayground.git
cd JsonServerPlayground
npm i -D
npm start
curl "http://localhost:3000/posts?_sort=createdAt&_order=desc&&_page=1&_limit=10&_embed=comments"
```
