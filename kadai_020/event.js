//console.log(document.head);
//console.log(document.body);

// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
});

document.getElementById("btn").onclick = function() {
  document.getElementById("text").innerHTML = "ボタンをクリックしました";
};