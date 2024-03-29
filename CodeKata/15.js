// 30. 가운데 글자 가져오기

// Description
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    let a = s.length / 2;
    answer = s[a - 1] + s[a];
  } else {
    let b = Math.floor(s.length / 2);
    answer = s[b];
  }
  return answer;
}
console.log(solution("abcdef"));
