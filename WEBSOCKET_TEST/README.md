### IoT PROJECT + Machine Learning PROJECT
#### EduB에 PyCBasic(피지컬) 붙이기 테스트

#### 기존 설계
- Raspberry Pi에서 Node.js 서버를 염
- CodeB와 Raspberry Pi가 Node.js의 child_process를 통해서 값을 주고 받음
- CodeB의 Python코드를 Raspberry Pi에서 실행하고 결과를 다시 CodeB로 전송
- 입출력(I/O)는 CodeB에서, 실행(Execution)은 Raspberry Pi에서


#### 기존 설계 단점
- 사용 방법이 너무너무 복잡함
- 일반 이용자가 따라 하지못할 듯


#### 구상중인 설계
- WebSocket을 사용
- Raspberry Pi는 WebSocket서버에 클라이언트로 접속 -> Raspberry Pi에서 별도로 서버를 여는 과정이 필요 없을것 으로 생각됨
- WebSocket으로 EduB와 Raspberry Pi가 실시간으로 데이터를 주고받음
- 기존 설계와 동일하게 입출력(I/O)는 EduB에서, 실행(Execution)은 Raspberry Pi에서


#### 프로젝트 목적
- 따라서 웹소켓으로 서버와 Raspberry Pi가 데이터를 주고 받을 수 있는지 테스트


#### 프로젝트 설계
- Express 사용해서 웹서버 구축
- 프론트 디자인 없이 개발
- 웹페이지에는 입력폼 하나와 출력부분만 구현
- 입력으로 받은게 Raspberry Pi로 잘 전송 되는지 확인
- Raspberry Pi에서 보내는 데이터가 웹페이지에서 출력되는지 확인
- 잘 되면 웹페이지에서 받은 데이터 Raspberry Pi에서 받아 Python으로 돌리고 결과를 서버로 보내는거까지 테스트