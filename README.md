# Practice expo app config

expo app.json を動的に生成するためのリポジトリ

## 事前準備

- pnpm をインストールしておくこと
- pnpm install
- expo.dev のプロジェクトで、環境変数に `APP_NAME=app-a` を設定しておくこと

## Build

```bash
pnpm run app-a eas build --platform android --profile development
```

## dev

毎回このコマンドを打つのは少し面倒な気もするので、デフォルトプロジェクトのようなものがあれば、`start`を`cross-env APP_NAME=app-a expo start`とかに設定しておくとよさそう。

```bash
pnpm run app-a pnpm run start
```

## 方針

- `/app-config/xx.cjs` にアプリごとの設定を記述できるように。
    - app.config.ts から require(`./app-config/${process.env.APP_NAME}.cjs`) で読み込む。
    - app.config.ts から読み込むjsはcommon jsである必要があるため、.cjsを使う。
