#!/bin/bash

REPOSITORY=/home/ubuntu/deploy
REPOSITORY_PROD=/home/ubuntu/deploy


echo "개발 서버 배포"
cd "${REPOSITORY}"
sudo npm install
if [ $? -eq 0 ]; then
  # 실행 중인 경우
  echo "til-dev 프로세스가 실행 중입니다."
else
  # 실행 중이 아닌 경우
  echo "til-dev 프로세스가 실행되지 않았습니다."
  sudo npm run dev
fi
