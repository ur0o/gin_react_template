# go_react_template
## 概要
Dockerを使ったGo(Gin)+Typescript(React)でアプリケーションを作るときの雛形

## 使い方
### ビルド

```
cd src \
&& go mod init (プロジェクト名) \
&& go mod tidy \
&& cd ..
```

プロジェクト内の`gin_react_template`をプロジェクト名に置き換え

```
docker compose build
```

### 起動
```
docker compose up
```
