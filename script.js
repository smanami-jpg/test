const button = document.getElementById('demoButton');
const message = document.getElementById('message');
const timeLabel = document.getElementById('time');

function updateTime() {
  const now = new Date();
  timeLabel.textContent = `現在時刻: ${now.toLocaleTimeString('ja-JP')}`;
}

button.addEventListener('click', () => {
  const now = new Date();
  message.textContent = `動作確認OK! ${now.toLocaleTimeString('ja-JP')} にクリックされました。`;
});

updateTime();
setInterval(updateTime, 1000);
