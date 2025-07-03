// 번역 기능에 필요한 DOM 요소 지정
const translateBox = document.getElementById('translate-box');
const answerBox = document.getElementById('answer-box');
const selectBox = document.getElementById('select-box');


// 입력 감지 타이머 관련 변수
let timer;
const maxTime = 1000;
let latestText = ''; // 마지막으로 서버에 전송한 텍스트 (중복 요청 방지)
let currentText = ''; // 현재 입력된 텍스트

/**
 * 사용자 입력 이벤트 핸들러
 * - 입력이 발생할 때 마다 타이머를 초기화
 * - 일정 시간 입력이 없으면 언어 감지 및 번역 요청
 */
translateBox.addEventListener('input', function(e) {
    currentText = e.target.value;

    answerBox.value = ''; // 입력 발생 시 이전 결과 초기화

    clearTimeout(timer);

    timer = setTimeout(() => {
        handleTypingDone(currentText);
    }, maxTime);
});

/**
 * 입력이 멈췄을 때 실행되는 함수
 * - 공백 제거
 * - 중복 입력 방지
 * - 언어 감지 API 호출 후 번역 요청
 * @param {*} text 입력된 텍스트
 */
function handleTypingDone(text) {
    console.log(`사용자 입력: ${text}`);
    
    const trimmed = text.trim();

    // 공백이거나 빈 문자열이면 무시 / 마지막 요청과 동일하면 무시
    if (trimmed === '') return;
    if (trimmed === latestText) return;

    latestText = trimmed;
    
    // 언어 감지 요청
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/detect');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);

            let sourceLang = result.langCode;
            let targetLang = selectBox.value;
            console.log(`감지된 언어: ${sourceLang}`);

            updateLanguageSelect(sourceLang);

            // TODO 감지, 번역 책임 분리 (번역 조건 분기, 언어 감지 실패 시 별도 예외 처리)
            requestTranslation(sourceLang, targetLang, text);
        } else {
            console.error('언어 감지 실패:', xhr.responseText);
        }
    };

    xhr.onerror = function () {
        console.error('언어 감지 요청 오류');
    };

    xhr.send(JSON.stringify({text: text}));
}

/**
 * 감지된 언어를 언어 코드 기반으로 select box 갱신
 *  
 * @param {*} lang 감지된 언어 코드 ('en', 'ko', 'ja')
 */
function updateLanguageSelect(lang) {
    const options = document.querySelector("select[name=setLang]").options;

    let found = false;
    for (let i = 0; i < options.length; i++){
        if (options[i].value === lang){
            options[i].selected = true;
            found = true;
        } else{
            options[i].selected = false;
        }
        if (!found){
            options[0].selected = true;
        }
    }
}

/**
 * 번역 요청을 서버에 전송하고, 결과를 answerBox에 출력함
 * 
 * @param {*} source 감지된 언어 코드
 * @param {*} target 선택된 번역 대상 언어 코드
 * @param {*} text 번역 할 텍스트
 */
function requestTranslation(source, target, text) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/translate');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            console.log('번역 결과:', result.translatedText);
            answerBox.value = result.translatedText;
        } else {
            console.error('번역 실패:', xhr.responseText);
        }
    };

    xhr.onerror = function () {
        console.error("번역 요청 오류");
    };

    xhr.send(JSON.stringify({
        source: source,
        target: target,
        text: text
    }));
}