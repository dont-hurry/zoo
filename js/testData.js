let testData = [
  { // 1
    description: '先選一首詩句',
    options: [
      {
        content: '「我光是站立／鍛鍊堅忍的術／池塘水面上的陽光／掐出不同力道的曬痕／閉著氣，直到我淋雨化成水／遇沙化為塵，化為沉默」',
        score: 'A5'
      }, {
        content: '「我的愛人自我體內分裂／如貓萬花筒般的眼／共用一具肉身，不同名字／縮起聲音，不斷互道：「晚安，晚安」／黑夜是巨大的圓／我繞著弧形／裡面的你」',
        score: 'B5'
      }, {
        content: '「入睡的公路沿路搜集星星／像是我們可以抵達任何場景／回到從前的家／回到孩提時期未竟的遊戲／當年在午後的迷藏裡」',
        score: 'C5'
      }, {
        content: '「我在悲傷時遇到妳／不敢輕易快樂／怕妳認不出／我笑起來的樣子」',
        score: 'D5'
      }, {
        content: '「當我迷戀他時／他說湖底有水怪、夢裡有睡獸／我都會相信／我的恐懼是偷食的湯匙／挖一罐文字的蜂蜜」',
        score: 'E5'
      }
    ]
  }, { // 2
    description: '如何等待戀人遲到的片刻？',
    options: [
      {
        content: '點菸',
        score: 'B3'
      }, {
        content: '靜靜等待',
        score: 'A3'
      }, {
        content: '點播音樂',
        score: 'D3'
      }, {
        content: '看路人，看街景',
        score: ['C3', 'E3']
      }
    ]
  }, { // 3
    description: '你有長假跟旅票，你會去哪裡？',
    options: [
      {
        content: '異國圖書館',
        score: 'A3'
      }, {
        content: '愛人的身邊',
        score: 'B3'
      }, {
        content: '遠得要命的村落',
        score: 'C3'
      }, {
        content: '無人知曉的森林',
        score: 'E3'
      }, {
        content: '寒冷的冰山與小島',
        score: 'D3'
      }
    ]
  }, { // 4
    description: '如果到動物園，你會先選擇看哪個動物',
    options: [
      {
        content: '海豚',
        score: 'D3'
      }, {
        content: '大象',
        score: 'A3'
      }, {
        content: '獵豹',
        score: 'B3'
      }, {
        content: '甲蟲',
        score: 'C3'
      }, {
        content: '恐龍',
        score: 'E5'
      }
    ]
  }, { // 5
    description: '用一個容器，裝你珍藏的物件',
    options: [
      {
        content: '木質舊箱',
        score: 'A3'
      }, {
        content: '鐵鎖盒',
        score: 'B3'
      }, {
        content: '玻璃罐',
        score: 'E3'
      }, {
        content: '牛皮紙袋',
        score: 'D3'
      }, {
        content: '透明塑膠盒',
        score: 'C3'
      }
    ]
  }, { // 6
    description: '選一個顏色當你的壁紙',
    options: [
      {
        content: '淺灰',
        score: 'A3'
      }, {
        content: '橙色',
        score: 'B3'
      }, {
        content: '翡翠綠',
        score: 'C3'
      }, {
        content: '天空藍',
        score: 'D3'
      }, {
        content: '純白',
        score: 'E3'
      }
    ]
  }, { // 7
    description: '你會怎麼離開你枕邊熟睡的人',
    options: [
      {
        content: '躡手躡腳深怕打亂棉被的皺褶',
        score: 'A3'
      }, {
        content: '我醒了，他也必須得醒',
        score: 'B3'
      }, {
        content: '送上一個吻',
        score: ['C3', 'D3']
      }, {
        content: '一如往常地離開',
        score: 'D3'
      }
    ]
  }, { // 8
    description: '如果你有一種特殊能力',
    options: [
      {
        content: '先知能力（但無法改變命運）',
        score: 'A3'
      }, {
        content: '強烈的五感',
        score: 'B3'
      }, {
        content: '流利的各國語言',
        score: 'C3'
      }, {
        content: '不會寂寞的心',
        score: 'D3'
      }, {
        content: '穿牆術',
        score: 'E3'
      }
    ]
  }, { // 9
    description: '什麼事會讓你失眠',
    options: [
      {
        content: '懷人',
        score: 'D3'
      }, {
        content: '日常瑣事總加',
        score: 'C3'
      }, {
        content: '無原因失眠',
        score: 'E3'
      }, {
        content: '充滿懸念的劇情片',
        score: 'D3'
      }, {
        content: '可懼的明日',
        score: 'A3'
      }
    ]
  }, { // 10
    description: '選一首詩給愛人',
    options: [
      {
        content: `每個紅綠燈都停下
讓拉雪橇的麋鹿安全通過
燙平襪子，禮物才能藏放
為煙囪與桌面除菌，年度掃除
只為使我偷偷寫信給你時
確保我匿名的留守
能不經意被你察覺

<聖誕節>`,
        score: 'A5'
      }, {
        content: `愛上妳，遠比愛上寫給你的情詩
更為艱難嚴苛
我一邊等妳
一邊離群索居同時
我們善於孤獨卻又捨不得人群

<獨立命題>`,
        score: 'B5'
      }, {
        content: `虛構手勢、星座與結霜的秋夜
世故的女伶念著：
「最偉大的愛情在於
來不及參與，溫柔的謊言家
唱歌更好聽。」

<虛構一場秋天>`,
        score: 'C5'
      }, {
        content: `如果妳害怕衣櫃裡的睡獸
我會睡妳床邊，耳語般
為妳輕念每晚的睡前故事
而妳一個翻身
在我的夢境往返
似乎，我們的
宿命與去向也一同位移......

<眠夢旅行>`,
        score: 'D5'
      }, {
        content: `從視窗偷窺你斷網後你就是鬆開手便飄走的島門一關上展出就開始了色塊暗示密室成立你在一種狀態你正存在

<訊號微弱>`,
        score: 'E5'
      }
    ]
  }
];

let resultData = [
  {
    title: '土象人格',
    subtitle: '善於自處、理性',
    content: '能夠與自己獨處的，但也重視與人相處的細節，情感節制但有些保守。',
    imgsrc: 'test-result-a.png'
  },
  {
    title: '貓性人格',
    subtitle: '自信、感性',
    content: '有用一顆易感的大腦，情緒在身上綻放，要嘛大悲喜的熱戀，要嘛孤獨。',
    imgsrc: 'test-result-b.png'
  },
  {
    title: '風蟲人格',
    subtitle: '善交際、智慧、善變',
    content: '善於與人交際，總給人光明的形象，但光明與陰影雙生，有個不願人看見的陰影。',
    imgsrc: 'test-result-c.png'
  },
  {
    title: '海鯨人格',
    subtitle: '自由、纖細',
    content: '總是讓心情游泳，情緒時刻流動，自由且浪漫的生活藝術家。',
    imgsrc: 'test-result-d.png'
  },
  {
    title: '奇型人格',
    subtitle: '獨特、愛好變化',
    content: '總是能給人耳目一新，難以捉摸，每秒轉動的思緒，總是處處有驚喜（或炸點？）。',
    imgsrc: 'test-result-e.png'
  },
];
