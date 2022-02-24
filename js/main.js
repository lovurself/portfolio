const target = document.querySelector('#textTyping');
const string = '신입 프론트엔드 개발자 강민아입니다.';
const stringArr = string.split('');

function textTyping(selectString) {
    if (selectString.length > 0) {
        target.textContent += selectString.shift();
        setTimeout(function() {
            textTyping(selectString);
        }, 80);
    }
}

textTyping(stringArr);