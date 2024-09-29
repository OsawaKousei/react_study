#Node.jsの最新版を記載
FROM node:latest
#コンテナ内の作業ディレクトリを記載
WORKDIR /usr/src/app

# 【各項目の説明】
#FROM
#コンテナのベースとなるDockerイメージを記載
#ここではReactを使うために利用するnode.jsを記載
#基本的には最新版を使うことが望ましい
#nodeの公式サイトを確認し、最新版のバージョンをここに記載する

#WORKDIR
#コンテナ内の作業ディレクトリを記載
