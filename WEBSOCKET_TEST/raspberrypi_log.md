### Node.js 설치 ###

#### apt 업뎃 ####
```
sudo apt-get upgrade
sudo apt-get update
```

#### 패키지 저장소에 Node.js 최신 버전이 몇인지 확인 ####
```
apt list | grep nodejs
```

#### 패키지 저장소 Node.js 최신버전으로 변경 ####
```
sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```

#### 패키지 저장소에 Node.js 다시 확인 ####
````
apt list | grep nodejs
````

#### 버전 최신으로 변경 됐다면 설치 ####
````
sudo apt-get install nodejs
````

#### Node.js 버전 확인 ####
```
node -v
```

#### npm 버전 확인 ####
```
npm -v
```

#### vsc 설치 ####
```
sudo apt install code
```
