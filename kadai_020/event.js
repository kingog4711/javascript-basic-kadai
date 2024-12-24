// ボタン要素を取得
const button = document.getElementById('btn')

// テキスト要素を取得
const text = document.getElementById('text')

// ボタンがクリックされたときの処理
button.addEventListener('click',() => {
  // テキストの内容を変更
  text.textContent = 'ボタンをクリックしました';
});