const { SerialPort, ReadlineParser } = require('serialport'); // 임포트 시리얼 포트, 파서
const readLine = require('readline'); // 콘솔에서 입력 받기 위해 임포트

const port = 'COM6'; // 포트번호 (path) 정의
const bdRate = 9600; // 보더레이트 정의

// SerialPort 객체 생성
const sp = new SerialPort({
  path: port,
  baudRate: bdRate
});

// 시리얼포트 열리면 수행
sp.on('open', () => {
  console.log('Port Open');
});

// 파서 안쓰고 할 때 (버퍼 값 출력)
// sp.on('data', (data) => {
  //   console.log(data);
  // });

const parser = sp.pipe(new ReadlineParser()); // 파서 선언하고 시리얼에 연결
// data 이벤트 발생 시 수행
parser.on('data', (data) => {
  console.log(data);
});

// 입출력을 위한 인터페이스 객체 생성
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 사용자에게 입력 받아 실행
rl.on('line', (line) => {
  sp.write(line);
});