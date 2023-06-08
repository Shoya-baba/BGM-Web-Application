# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 目次

1.[イントロダクション](#イントロダクション)

2.[使用技術](#使用技術)

-[ ]ⅰ.[React](#React)

-[ ]ⅱ.[Express](#Express)

-[ ]ⅲ.[knex](#knex)

-[ ]ⅳ.[Postgres](#Postgres)

-[ ]ⅴ.[Render](#Render)

3.[はじめに](#はじめに)

-[ ]ⅰ.[依存ライブラリのインストールと render の設定起動](#依存ライブラリのインストールとrenderの設定起動)

-[ ]ⅱ.[使い方](#使い方)

## イントロダクション

この README を読んで BGM Web application で音楽を聴いてみましょう。

## 使用技術

### React

Render で起動することができますが、localhost でも起動が可能です。localohost で立ち上げる場合`npm start`コマンドで起動して下さい。

### Express

フロントエンドとデータベースを繋ぐ役割をしています。localhost で立ち上げる場合は`node sever.js`コマンドで起動して下さい。

### knex

JavaScript 的に SQL を書くことが可能です。

### Postgres

本アプリで使用するデータベースです。データベースを使用する為のセットアップが必要です。
`psql`コマンドを実行し、`CREATE DATABASE bgmapplication`コマンドを実施してデータベースを作成します。
`npm run migrate`コマンドを実行し、マイグレーションファイルを作成します。
`npm run seed`コマンドを実行し、テーブルにデータを挿入し、データベースのセットアップは終了です。

### Render

Render を使用してデプロイメントを行います。

## はじめに

### 依存ライブラリのインストールと render の設定起動

`npm install`を実行し、依存ライブラリーのインストールを実施します。

データベースのセットアップ
`psql`コマンドを実行し、`CREATE DATABASE bgmapplication`コマンドを実施してデータベースを作成します。
`npm run migrate`コマンドを実行し、マイグレーションファイルを作成します。
`npm run seed`コマンドを実行し、テーブルにデータを挿入し、データベースのセットアップは終了です。

Render のセットアップ
Render のアカウントを取得する。

[render.com](https://render.com) にアクセスし、最新の説明に従ってアカウントを設定してください。この際、有料プランにサインアップする必要はありません。

Github のアカウントと接続し、リポジトリへのアクセスを許可してください。
新しい Web サービスを作成します。

[Render dashboard](https://dashboard.render.com) にアクセスします。

"New" ボタンをクリックします。

"Web Service" を選択します。

Github のリポジトリに接続し、リストからこのリポジトリを選択します。

このリポジトリが選択肢にない場合は、Github のリポジトリにアクセスする権限を Render に付与するようにアカウントを設定してください。
"Name" は他で使っていない名前を入力します。

ルートディレクトリは空のままにします。（デフォルトでこのプロジェクトのルートになります。）

"Environment" は "Node" を選択します。

"Region" は、あなたがいる場所に最も近いものを選択します。

"Branch" には、master を入力します。

" Build Command" は `npm install && npx knex migrate:latest --knexfile ./knexfile.js && npx knex seed:run --knexfile ./knexfile.js && npm run build` を入力します。

"Start Command" は `npm run s-start && npm run start` と入力します。
これはサーバーを起動するスクリプトです。
"Free"プランが選択されていることを確認します。このプランの有効期限は 90 日間です。
"Create Web Service" ボタンをクリックします。

次にデータベースの設定を行います。

データベースを作成します。
ダッシュボードで "New" をクリックし、今回は "PostgreSQL" を選択します。
一意の名前を付けます。（例：BBPostgres）
データベースフィールドに bgnapplication と入力します。
"User" フィールドに覚えやすいユーザー名を入力します
"Region" フィールドには、最も近いリージョンを選択します。
"PostgreSQL version" を 14 に設定します。
他の設定はひとまず無視してください。
"Free" プランが選択されていることを確認します。
"Create Database" ボタンをクリックします。
ダッシュボードに戻り、データベースのステータスが "Available" に変わるのを待ちます。
これで Node サーバーとデータベースが設定されました。次はそこと接続する必要があります。 そのためには、Web サービスにデータベースへの接続方法を伝えるため、環境変数を設定する必要があります。

Render Web サービスに DATABASE_URL と NODE_ENV という環境変数を追加します。

ダッシュボードから、作成した PostgreSQL データベースをクリックします。
" Info" タブの "Connections" セクションから、"Internal Database URL" をコピーします。
Render のダッシュボードに戻り、作成した Node の Web サービスをクリックします。
"Environment" タブをクリックします。
"Add Environment Variable"をクリックします。
"Key"に "DATABASE_URL "を入力します。
"Value" に先ほどコピーした "Internal Database URL"を貼り付けます。
"NODE_ENV"には"production"を入力します。
"Save Changes" をクリックします。
これで Render のセットアップは終了です。

### 使い方

Render の"Web Service"のヘッダーの URL を開いて見ましょう。
サイドバーには曲のリストがあります。そこから聴きたい曲を選んで流して見ましょう。
ジャンルやシーンの絞り込み機能があり、絞り込みを解除する場合は reset ボタンを押して下さい。

それでは素敵な時間を。
