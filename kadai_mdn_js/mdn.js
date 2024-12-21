// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear(); // 年
const month = today.getMonth() + 1; // 月（0から始まるため +1）
const date = today.getDate(); // 日

// 「2024年10月12日」の形式で出力
const formattedDate = `${year}年${month}月${date}日`;
console.log(formattedDate);

