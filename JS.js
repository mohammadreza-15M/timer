const watch = document.getElementById("watch");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let checkBtn = true;
let timer;

let timerArr = [0, 0, 0];

function timerHandler() {
  timerArr[0]++;
  if (timerArr[0] > 59) {
    timerArr[1]++;
    timerArr[0] = 0;
    if (timerArr[1] > 59) {
      timerArr[2]++;
      timerArr[1] = 0;
      if (timerArr[2] > 23) {
        timerArr[2] = 0;
      }
    }
  }

  for (let i = 0; i < timerArr.length; i++) {
    if (String(timerArr[i]).length < 2) {
      timerArr[i] = "0" + timerArr[i];
    }
  }
  watch.innerHTML = `${timerArr[2]} : ${timerArr[1]} : ${timerArr[0]}`;
}

startBtn.addEventListener("click", function () {
  if (checkBtn) {
    timer = setInterval(timerHandler, 1000);
    checkBtn = false;
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
  checkBtn = true;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  checkBtn = true;
  watch.innerHTML = "00 : 00 : 00";
  timerArr = [0, 0, 0];
});
