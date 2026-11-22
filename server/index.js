// http 모듈 불러오기
const http = require("http");
// 서버 생성
const server = http.createServer((req,res) => {
    console.log("요청 발생");
});
// 서버 실행
server.listen(3000, ()=>{

});
