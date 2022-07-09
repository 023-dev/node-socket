# Zoom
OS : Windows, Mac
Zoom Clone using Node JS, WebRTC and Websockets.

Install

#make a package.json
<br>
npm init -y

#make README.md
<br>
touch README.md 

#install nodemon
<br>
npm i nodemon -D

#install babel
<br>
npm i @babel/core @babel/cli @babel/preset-env @babel/node -D
• @babel/core : babel의 주요 기능들을 담고 있는 모듈이다.
• @babel/cli : Terminal에서 babel을 쓸 수 있게 한다.
• @babel/node : @babel/cli에서 독립된 모듈로, Node.js CLI와 같은 방식으로 동작한다.
                하지만 추가적으로 Node.js에서 실행 전 바벨의 설정들과 플러그인들을 고려하여 컴파일링을 해주는 기능이 추가되어 있다.
                크기가 꽤 크며, 메모리 사용량이 상당하기 때문에 배포용으로는 권장되지 않고 있다.
• @babel/preset-env : Target Browser를 입력한 경우 해당 Browser 환경에 맞게 자동으로 최신 JavaScript문법을 사용할 수 있게 한다.
                      Target이 지정되지 않는 경우 ECMAScript2015+ 코드로 기본적으로 변환된다.


#make .gitignore file
<br>
touch .gitignore

#install express
<br>
npm i express
• express : Node.js Web Application Framework

#install pug
<br>
npm i pug
• pug : Node Express Template Engine으로 HTML을 간단하게 표현할 수 있고, JS 연산 결과를 쉽게 보여줄 수 있다.

#run project
<br>
npm run dev

#install ws
npm i ws
• ws : webSocket 