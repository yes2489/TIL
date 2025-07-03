const express = require("express");
const path = require("path");
const { XMLHttpRequest } = require("xmlhttprequest");
require("dotenv").config();

const app = express();

// JSON 요청 처리를 위한 미들웨어 설정
app.use(express.json());

// 정적 파일을 현재 디렉토리 기준으로 제공
app.use(express.static(__dirname));

// index.html을 기본 페이지로 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Papago 언어 감지 요청을 프록시하는 API
 * @route POST /detect
 * @param {string} req.body.text 감지할 원본 텍스트
 * @returns {Object} 감지된 언어 정보
 */
app.post('/detect', (req, res) => {
  const text = req.body.text;
  if(!text) return res.status(400).send("text 없음");

  const xhr = new XMLHttpRequest();
  const url = 'https://papago.apigw.ntruss.com/langs/v1/dect';

  xhr.open('POST', url);
  xhr.setRequestHeader('X-NCP-APIGW-API-KEY-ID', process.env.CLIENT_ID);
  xhr.setRequestHeader('X-NCP-APIGW-API-KEY', process.env.CLIENT_SECRET);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // onload 이벤트 프로퍼티에 서버로부터의 응답이 완료되었는지 확인하는 코드 작성
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const responseData = xhr.responseText; // responseText: 서버로부터 받은 응답 데이터
      const result = JSON.parse(responseData); // JSON 역직렬화
      res.json(result);
    } else {
      console.error('Papago 오류:', xhr.responseText);
      res.status(xhr.status).send('Papago API 오류');
    }
  };

  xhr.onerror = function () {
    console.error('Papago 호출 실패');
    res.status(500).send('Papago 요청 실패');
  }

  xhr.send(`query=${encodeURIComponent(text)}`);
});

/**
 * Papago 번역 API 프록시
 * @route POST /translate
 * @param {string} req.body.source 감지된 언어 코드
 * @param {string} req.body.target 번역할 언어 코드
 * @param {string} req.body.text 번역할 텍스트
 * @returns {Object} 번역 결과
 */
app.post('/translate', (req, res) => {
  const {source, target, text} = req.body;
  if (!source || !target || !text) {
        return res.status(400).send('source, target, text 누락');
      }

  const xhr = new XMLHttpRequest();
  const url = 'https://papago.apigw.ntruss.com/nmt/v1/translation';

  xhr.open('POST', url);
  xhr.setRequestHeader('X-NCP-APIGW-API-KEY-ID', process.env.CLIENT_ID);
  xhr.setRequestHeader('X-NCP-APIGW-API-KEY', process.env.CLIENT_SECRET);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // onload 이벤트 프로퍼티에 서버로부터의 응답이 완료되었는지 확인하는 코드 작성
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const responseData = xhr.responseText;
      const result = JSON.parse(responseData);
      console.log('번역 원본: ', responseData);
        res.json({ translatedText: result.message.result.translatedText });
    } else {
      console.error('Papago 오류:', xhr.responseText);
      res.status(xhr.status).send('Papago API 오류');
    }
  };

  xhr.onerror = function () {
    console.error('Papago 호출 실패');
    res.status(500).send('Papago 요청 실패');
  }

  const body = 
  `source=${encodeURIComponent(source)}&` +
  `target=${encodeURIComponent(target)}&` +
  `text=${encodeURIComponent(text)}&`

  xhr.send(body);
});


app.listen(8080, () => {
  console.log("서버 실행 중: http://localhost:8080");
});
