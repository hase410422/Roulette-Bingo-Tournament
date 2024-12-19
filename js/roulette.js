// htmlが読み込まれたときに他のリソース読み込み前に実行される
document.addEventListener('DOMContentLoaded', function () {
  // alert("DOMの読み込みが完了しました！"
  setNameList();
  setSlot();
});

// 名前リストの設定
function setNameList() {
  const dataList = document.getElementById("data-list");
  nameList.forEach(item => {
    // 新しいli要素を作成
    const li = document.createElement("li");

    // 各行のデータをリスト形式で表示
    li.textContent = item.trim();
    li.classList.add('reel-item');

    // liをulに追加
    dataList.appendChild(li);
  });
}

// レイアウトの設定
function setSlot() {
  const reelItems = document.querySelectorAll('.reel-item:not(.select):not(.selectFlag)');
  initializeNameList(reelItems);
}

// イベントを初期化する
function initializeNameList() {
  const reelItems = document.querySelectorAll('.reel-item');
  reelItems.forEach((reelItem) => {
    reelItem.classList.remove('hidden');
    reelItem.classList.remove('selectFlag');
    reelItem.classList.remove('select');
  });
}

// レイアウトを初期化する
function initializeNameList(items) {
  let currentPosition = 1;
  items.forEach((reelItem, index) => {
    reelItem.style.transform = `translateY(${(index - currentPosition) * -100}%)`;
  });
}

// 要素を表示にする関数
function visible(item) {
  item.classList.remove('hidden');
}

// 要素を非表示にする関数
function hide(item) {
  item.classList.add('hidden');
}

const quizList1 = ["諸橋竜輝","諸口幹男","望月理沙","森純也","森本葵","最上覚輝"];
const quizList2 = ["倉橋政弥","倉橋佑介","久保田祐介","倉本龍"];
const quizList3 = ["奥瀬留美","大谷祐司","及川康弘","大和田隆太"];
const quizList4 = ["西川隆","布矢真一","額賀大樹","信沢一大"];
const quizList5 = ["長谷川孝太","花里尚樹","原理沙子"];
const quizList6 = ["旭谷恵里","安東達哉","相原信人","阿部正人"];

const quizListArrays = [quizList1,quizList2,quizList3,quizList4,quizList5,quizList6];


// const nameList = ["長谷川孝太", "長谷川１", "長谷川２", "長谷川3", "長谷川4", "長谷川5"];
let nameList = ["旭谷恵里",
"安東達哉",
"白野峻平",
"長谷川孝太",
"望月理沙",
"倉橋政弥",
"伊藤みさき",
"本多広和",
"齊藤あかり",
"髙澤麻紀",
"諸橋竜輝",
"花里尚樹",
"岩本直子",
"戸田拓海",
"森純也",
"滝本紗生",
"倉橋佑介",
"清水能満",
"藤代竜也",
"星野真紀",
"陣野奈緒美",
"池田薫",
"藤井聖也",
"張溶蘚",
"小嶋七海",
"諸口幹男",
"最上覚輝",
"福永稜",
"菊地宏貴",
"杉村睦",
"阿部正人",
"信沢一大",
"今井栄一",
"石丸弘典",
"及川康弘",
"松藤浩司",
"鈴木幹弘",
"柳祥子",
"佐藤志高",
"吉野慎大郎",
"武藤翔",
"喜納秀行",
"大和田隆太",
"大谷祐司",
"樋浦雄大",
"伊佐次哲也",
"依田裕明",
"山内未来",
"ソンヨンテク",
"原理沙子",
"小柳博明",
"小鹿民人",
"稲葉楓",
"森本葵",
"吉賀順平",
"奥瀬留美",
"金 暎桓",
"後藤暉英",
"西川隆",
"梅田昭仁",
"木村友哉",
"吉井里紗",
"久保田祐介",
"平野貴大",
"熊井克行",
"矢野ゆきか",
"松原英希",
"相原信人",
"高柳翔",
"鈴木裕介",
"前田知輝",
"佐藤陽",
"岩切孝樹",
"北村和章",
"服部 可弥",
"木下岳也",
"金ビョンファ",
"佐藤海人",
"伊藤勝也",
"東樹美槻",
"布矢真一",
"額賀大樹",
"倉本龍",
"山田寛之",
"比嘉 健也",
];

let spinningFlag = false;
let selectArray = [];

function spin() {
  // spin実行判定
  checkStartSpinning()

  let reelItems = document.querySelectorAll('.reel-item:not(.select):not(.selectFlag)');
  let reelItemTotal = reelItems.length;
  console.log("reelItemTotal:"+reelItemTotal);

  console.log("selectArray.length:"+selectArray.length);
  // 2回目のspin以降レイアウト初期化
  if(selectArray.length !== 0) {
    //  z軸で表現中に下を再度初期化
    initializeNameList(reelItems);

    // z軸表現を削除
    let previousItem = document.querySelector('.selectFlag');
    console.log("previousItem:"+previousItem);
    previousItem.style.transform = `translateY(${(-1 * -100)}%)`;
    previousItem.style.transition = "transform 0.3s";
    previousItem.classList.remove('selectFlag');
    // 非表示ではなくオブジェクトを削除
    previousItem.classList.add('select');
  }

  let roopPostion = 0;

  // スピン中に0.125sで繰り返す処理
  let intervalId = setInterval(function () {

    reelItems.forEach((reelItem, index) => {
      if(roopPostion == index) {
        hide(reelItem);
        reelItem.style.transform = `translateY(${(reelItemTotal - 2) * -100}%)`;
        visible(reelItem);
      } else if(roopPostion < index) {
        reelItem.style.transform = `translateY(${(((index - roopPostion) - 1) - 1) * -100}%)`;
      } else if(roopPostion > index) {
        reelItem.style.transform = `translateY(${(((reelItemTotal - 2) - ((roopPostion - index) - 1)) - 1)* -100}%)`;
      }
    });

    roopPostion++;
    // console.log("roopPostion"+roopPostion);

    if (roopPostion >= reelItemTotal) {
      roopPostion = 0;
    }  
  }, 120);


  // ランダムな要素を取得
  let randomIndex = Math.floor(Math.random() * reelItemTotal); // ランダムに停止
  let randomReelItem = reelItems[randomIndex];


  // 5s後に繰り返しを停止
  setTimeout(function () {
    // アニメーションをとめる
    clearInterval(intervalId);

    randomReelItem.style.transform = `translateY(${(0) * -100}%)`;
    // randomReelItem.style.transform = 'translateZ(100px)';
    console.log("randomReelItem:"+randomReelItem);
    randomReelItem.classList.add('selectFlag');

    // 履歴用配列へ登録
    showResult(randomReelItem);
    
    // スピン終了
    spinningFlag = false;

    // randomReelItem.classList.add('selectFlag');
  }, 6000);

  // randomReelItem.classList.add('select');

}

function checkStartSpinning() {
  if (spinningFlag) {
    // console.log("spinningFlag"+spinningFlag);
    return
  } else {
    // console.log("spinningFlag"+spinningFlag);
    spinningFlag = true
  }
}

// 結果を履歴に表示する
function showResult(item) {
  // 初期化
  let bingoNameList = document.getElementById("bingoNameList");
  let liElements = bingoNameList.querySelectorAll('.name-item');
  liElements.forEach(li => li.remove());

  let nameRecord = item.textContent;
  // あたり配列を作る
  selectArray.push(nameRecord);
  if(selectArray.length >= 7) {
    // nameListから削除する
    selectArray.shift();
  }
  console.log("selectArray"+selectArray);

  selectArray.forEach(name => {
    // 新しいli要素を作成
    const li = document.createElement("li");

    // 各行のデータをリスト形式で表示
    li.textContent = name.trim();
    li.classList.add('name-item');

    // liをulに追加
    bingoNameList.appendChild(li);
  });

  // 履歴に表示させる
  // let bingoResultElement = document.getElementById("bingoNameList");
  // bingoResultElement.innerText = nameRecord;
}

// ----------------addEventListener-------------------
document.getElementById("btn_spin").addEventListener("click", spin);


// 音源
document.getElementById('btn_spin').addEventListener('click', function() {
  let audio2 = document.getElementById('audio2');
  let audio7 = document.getElementById('audio7');
  let audio9 = document.getElementById('audio9');

  // 最初の音源を再生
  audio2.play();
  // audio7.play();

  // 5秒で一時停止
  // setTimeout(function() {
  //   audio7.pause();
  // }, 5000);

  // 最初の音源が再生終了したら、次の音源を再生
  audio2.addEventListener('ended', function() {
    // 次の音源を再生する前に指定した時間（例えば2秒）待つ
    setTimeout(function() {
      audio7.play();
    }, 0); // 0秒待機
  });

  // 最初の音源が再生終了したら、次の音源を再生
  audio7.addEventListener('ended', function() {
    // 次の音源を再生する前に指定した時間（例えば2秒）待つ
    setTimeout(function() {
      audio9.play();
    }, 0); // 0秒待機
  });
});

// カウント増減ボタン

document.getElementById("btn_countUp").addEventListener("click", function() {
  let countElement = document.getElementById('host_winningCount');
  let count = countElement.innerText;
  count++;
  countElement.innerText = count;
});

document.getElementById("btn_countDown").addEventListener("click", function() {
  let countElement = document.getElementById('host_winningCount');
  let count = countElement.innerText;
  count--;
  countElement.innerText = count;
});

document.getElementById("btn_QuizCountUp").addEventListener("click", function() {
  let countElement = document.getElementById('host_QuizCount');
  let count = countElement.innerText;
  count++;
  countElement.innerText = count;

  let counterElement = document.getElementById("quizCounter");
  let counter = counterElement.innerText;
  counter--;
  counterElement.textContent = counter;

    // 初期化
  let quizNameList = document.getElementById("quizNameList");
  let liElements = quizNameList.querySelectorAll('.name-item');
  liElements.forEach(li => li.remove());

  if(counter > 0 && counter < 7) {
    let array = quizListArrays[counter-1];
    
    array.forEach(name => {
      // 新しいli要素を作成
      const li = document.createElement("li");
  
      // 各行のデータをリスト形式で表示
      li.textContent = name.trim();
      li.classList.add('name-item');
  
      // liをulに追加
      quizNameList.appendChild(li);
    });
  }
});

document.getElementById("btn_QuizCountDown").addEventListener("click", function() {
  let countElement = document.getElementById('host_QuizCount');
  let count = countElement.innerText;
  count--;
  countElement.innerText = count;

  let counterElement = document.getElementById("quizCounter");
  let counter = counterElement.innerText;
  counter++;
  counterElement.textContent = counter;

  // 初期化
  let quizNameList = document.getElementById("quizNameList");
  let liElements = quizNameList.querySelectorAll('.name-item');
  liElements.forEach(li => li.remove());

  if(counter > 0 && counter < 7) {
    let array = quizListArrays[counter-1];
    array.forEach(name => {
      // 新しいli要素を作成
      const li = document.createElement("li");
  
      // 各行のデータをリスト形式で表示
      li.textContent = name.trim();
      li.classList.add('name-item');
  
      // liをulに追加
      quizNameList.appendChild(li);
    });
  }
});
