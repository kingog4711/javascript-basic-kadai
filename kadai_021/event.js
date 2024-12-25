// ボタン要素を取得
const button = document.getElementById('btn');

// テキスト要素を取得
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
button.addEventListener('click',() => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
