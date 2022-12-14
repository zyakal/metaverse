let map = {
  cols: 50,
  rows: 30,
  tsize: 64,
  logic: false,
  //상호작용시 반응할 타일 구하기 위한 변수
  interRow: 0,
  interCol: 0,
  floor: 1,
  layers: [
    [
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1,
      2, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3,
    ],

    [
      // 2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
  ],
  // 블록타일 -- 충돌 발생하는 타일
  blocksLayer: {
    7: "redBlock",
    8: "blueBlock",
  },
  // 상호타일 -- 상호작용 타일
  Interactive: [11, 12, 13, 14, 15],
  color: {
    lightGreen: "#84dbb8",
    green: "#22ebbf",
    lightPink: "#fce7f0",
    pink: "#f9bdd9",
    yellow: "#f4b108",
    Beige: "#f8f1c3",
    Red: "ff0000",
  },
  getTile: function (layer, col, row) {
    return this.layers[layer][row * map.cols + col];
  },
  isSolidTileAtXY: function (x, y) {
    let col = Math.floor(x / this.tsize);
    let row = Math.floor(y / this.tsize);

    let currentTile;

    // key 는 blocksLayer의 key값 -> 그려진 레이어의 배열 키값이다.

    // if (this.getTile2(7, col, row) && !this.getTile2(3, col, row)) {
    //   currentTile = this.getTile2(7, col, row).img;
    // }
    if (this.getTile2(9, col, row)) {
      if (this.getTile2(3, col, row)) {
        if (this.getTile2(3, col, row).img === "hills") {
          this.floor = 2;
          Game.hero.floor = 2;
        } else {
          this.floor = 1;
          Game.hero.floor = 1;
        }
      } else if (this.getTile2(2, col, row) || this.getTile2(1, col, row)) {
        this.floor = 1;
        Game.hero.floor = 1;
      }
    }

    if (this.floor === 2) {
      if (this.getTile2(8, col, row)) {
        currentTile = this.getTile2(8, col, row).img;
        if (currentTile === this.blocksLayer[8]) {
          return true;
        }
      }
    } else if (this.floor === 1) {
      if (this.getTile2(7, col, row)) {
        currentTile = this.getTile2(7, col, row).img;
      }
      if (currentTile === this.blocksLayer[7]) {
        return true;
      }
    }
    // console.log(currentTile);

    return false;
  },
  // isSolidTileAtXY: function (x, y) {
  //   var col = Math.floor(x / this.tsize);
  //   var row = Math.floor(y / this.tsize);

  //   let currentTile;
  //   let blockTile;

  //   // key 는 blocksLayer의 key값 -> 그려진 레이어의 배열 키값이다.
  //   for (key in this.blocksLayer) {
  //     if (key) {
  //       // console.log(this.getTile2(key, col, row));
  //       if (this.getTile2(key, col, row)) {
  //         currentTile = this.getTile2(key, col, row).img;
  //       }
  //       blockTile = this.blocksLayer[key];
  //       if (currentTile === blockTile) {
  //         // return true;
  //       }
  //     }
  //   }

  //   return false;
  // },
  // isSolidTileAtXY: function (x, y) {
  //   var col = Math.floor(x / this.tsize);
  //   var row = Math.floor(y / this.tsize);

  //   // tiles 3 and 5 are solid -- the rest are walkable
  //   // loop through all layers and return TRUE if any tile is solid
  //   return this.layers.reduce(
  //     function (res, layer, index) {
  //       var tile = this.getTile(index, col, row);
  //       var isSolid = this.block.includes(tile);

  //       return res || isSolid;
  //     }.bind(this),
  //     false
  //   );
  // },

  isInteractiveAtXY: function (x, y) {
    var col = Math.floor(x / this.tsize);
    var row = Math.floor(y / this.tsize);

    // tiles 3 and 5 are solid -- the rest are walkable
    // loop through all layers and return TRUE if any tile is solid
    return this.layers.reduce(
      function (res, layer, index) {
        var tile = this.getTile(index, col, row);
        var isInteractive = this.Interactive.includes(tile);

        return res || isInteractive;
      }.bind(this),
      false
    );
  },
  // 상호작용할 대상의 타일넘버 구하기
  InteractiveObject: function (x, y) {
    let col = Math.floor(x / this.tsize);
    let row = Math.floor(y / this.tsize);

    // tiles 3 and 5 are solid -- the rest are walkable
    // loop through all layers and return TRUE if any tile is solid
    return this.layers.reduce(
      function (res, layer, index) {
        var tile = this.getTile(index, col, row);

        return tile;
      }.bind(this)
    );
  },

  // 인수는 좌표값, 리턴은 행,열 값
  getCol: function (x) {
    return Math.floor(x / this.tsize);
  },
  getRow: function (y) {
    return Math.floor(y / this.tsize);
  },
  // 그 열에 해당하는 X의 픽셀좌표값
  getX: function (col) {
    return col * this.tsize;
  },

  getY: function (row) {
    return row * this.tsize;
  },
  rect: function (context, color, w, h, col, row, offsetX = 0, offsetY = 0, textArr = [[], ""]) {
    const radius = 6;
    const innerRadius = radius - 2;
    const x = col * this.tsize + offsetX;
    const y = row * this.tsize + offsetY;
    // Game.camera.x,y - 카메라 영역 좌측 위의 x값과 y값
    const rx = x - Game.camera.x;
    const ry = y - Game.camera.y;
    const width = w * this.tsize;
    const height = h * this.tsize;
    const gap = 5;
    if (color === "pink") {
      context.fillStyle = this.color.pink;
    } else if (color === "green") {
      context.fillStyle = this.color.green;
    } else if (color === "blue") {
      context.fillStyle = "#2fa2d1";
    } else {
      context.fillStyle = color;
    }

    if (rx + width > 0 && rx < Game.camera.x + this.rows * this.tsize && ry + height > 0 && ry < Game.camera.y + this.cols * this.tsize) {
      context.strokeRect(rx + 10, ry + height, 10, 10);
      context.fillRect(rx + 10, ry + height, 10, 10);
      context.strokeRect(rx + width - 20, ry + height, 10, 10);
      context.fillRect(rx + width - 20, ry + height, 10, 10);

      context.beginPath();
      // 왼쪽 상단 모서리
      context.moveTo(rx + radius, ry);
      // 오른쪽 상단 모서리
      context.arcTo(rx + width, ry, rx + width, ry + height, radius);
      // 오른쪽 하단 모서리
      context.arcTo(rx + width, ry + height, rx, ry + height, radius);
      // 왼쪽 하단 모서리
      context.arcTo(rx, ry + height, rx, ry, radius);
      // 왼쪽 상단 모서리
      context.arcTo(rx, ry, rx + radius, ry, radius);
      // 선 그리기
      context.stroke();
      context.fill();

      if (color === "pink") {
        context.fillStyle = this.color.lightPink;
      } else if (color === "green") {
        context.fillStyle = this.color.lightGreen;
      } else if (color === "blue") {
        context.fillStyle = "#acdfe3";
      }
      //안쪽선
      context.beginPath();
      // 왼쪽 상단 모서리
      context.moveTo(rx + innerRadius + gap, ry + gap);
      // 오른쪽 상단 모서리
      context.arcTo(rx + width - gap, ry + gap, rx + width - gap, ry + height - gap, innerRadius);
      // 오른쪽 하단 모서리
      context.arcTo(rx + width - gap, ry + height - gap, rx + gap, ry + height - gap, innerRadius);
      // // 왼쪽 하단 모서리
      context.arcTo(rx + gap, ry + height - gap, rx + gap, ry + gap, innerRadius);
      // // 왼쪽 상단 모서리
      context.arcTo(rx + gap, ry + gap, rx + width - gap, ry + gap, innerRadius);
      // // 선 그리기
      context.stroke();
      context.fill();

      // 게시판안의 텍스트
      context.fillStyle = "black";
      context.font = "bold 10pt'Product Sans'";
      context.textBaseline = "top";
      context.textAlign = "start";
      textArr[0].forEach((textLine, idx) => {
        context.fillText(textLine, rx + 8, ry + 8 + idx * 14);
      });
      context.font = "10pt'Product Sans'";
      context.textBaseline = "bottom";
      context.textAlign = "end";

      context.fillText("✨" + textArr[1], rx + width - 8, ry + height - 8);
    }
  },
  //상호작용 테두리용으로 만듦
  rectBorder: function (context, col, row, w, h, color) {
    const radius = 16;
    const x = col * this.tsize;
    const y = row * this.tsize;
    // Game.camera.x,y - 카메라 영역 좌측 위의 x값과 y값
    const rx = x - Game.camera.x;
    const ry = y - Game.camera.y;
    const width = w * this.tsize;
    const height = h * this.tsize;
    context.strokeStyle = color;
    context.lineWidth = 5;

    if (rx + width > 0 && rx < Game.camera.x + this.rows * this.tsize && ry + height > 0 && ry < Game.camera.y + this.cols * this.tsize) {
      context.beginPath();
      // 왼쪽 상단 모서리
      context.moveTo(rx + radius, ry);
      // 오른쪽 상단 모서리
      context.arcTo(rx + width, ry, rx + width, ry + height, radius);
      // 오른쪽 하단 모서리
      context.arcTo(rx + width, ry + height, rx, ry + height, radius);
      // 왼쪽 하단 모서리
      context.arcTo(rx, ry + height, rx, ry, radius);
      // 왼쪽 상단 모서리
      context.arcTo(rx, ry, rx + radius, ry, radius);
      // 선 그리기
      context.stroke();
    }
  },
};

function Camera(map, width, height) {
  this.x = 0;
  this.y = 0;
  //카메라 범위
  this.width = width;
  this.height = height;
  this.maxX = map.cols * map.tsize - width + Game.remainX;
  this.maxY = map.rows * map.tsize - height + Game.remainY;
  // 카메라 테두리가 맵 끝에 닿았을때 창크기값
  this.lastWidth;
  this.lastHeight;
}
// sprite 는 hero 객체
Camera.prototype.follow = function (sprite) {
  this.following = sprite;
  sprite.screenX = 0;
  sprite.screenY = 0;
};

Camera.prototype.update = function () {
  // assume followed sprite should be placed at the center of the screen
  // whenever possible 캐릭터 위치값
  this.width = window.innerWidth - Game.remainX + Game.chat.width > Game.minCanvasX ? window.innerWidth - Game.remainX + Game.chat.width : Game.minCanvasX;
  this.height = window.innerHeight - Game.remainY > Game.minCanvasY ? window.innerHeight - Game.remainY : Game.minCanvasY;
  this.following.screenX = this.width / 2;
  this.following.screenY = this.height / 2;
  // make the camera follow the sprite
  this.x = this.following.x - this.width / 2;
  this.y = this.following.y - this.height / 2;

  // clamp values

  this.x = Math.max(0, Math.min(this.x, this.maxX));
  this.y = Math.max(0, Math.min(this.y, this.maxY));

  // in map corners, the sprite cannot be placed in the center of the screen
  // and we have to change its screen coordinates

  // left and right sides
  if (window.innerWidth > Game.mediaQ) {
    if (this.following.x < this.width / 2 || this.following.x + Game.remainX > this.maxX + this.width / 2) {
      this.following.screenX = this.following.x - this.x;
      this.lastWidth = window.innerWidth;
      this.width = this.lastWidth - Game.remainX;
      this.maxX = map.cols * map.tsize - this.lastWidth + Game.remainX;
    } else {
      this.maxX = map.cols * map.tsize - this.width + Game.remainX;
    }
  } else {
    if (this.following.x < this.width / 2 || this.following.x + Game.remainX > this.maxX + this.width / 2) {
      this.following.screenX = this.following.x - this.x;
      this.lastWidth = window.innerWidth;
      this.width = this.lastWidth - Game.remainX + Game.chat.width;
      this.maxX = map.cols * map.tsize - this.lastWidth + Game.remainX - Game.chat.width;
    } else {
      this.maxX = map.cols * map.tsize - this.width + Game.remainX - Game.chat.width;
    }
  }

  // if (
  //   this.following.x < this.width / 2 ||
  //   this.following.x + Game.remainX > this.maxX + this.width / 2
  // ) {
  //   this.following.screenX = this.following.x - this.x;
  //   this.lastWidth = window.innerWidth;
  //   this.width = this.lastWidth - Game.remainX + Game.chat.width;
  //   if (window.innerWidth < Game.mediaQ) {
  //     this.maxX = map.cols * map.tsize - this.lastWidth;
  //   } else {
  //     this.maxX = map.cols * map.tsize - this.lastWidth + Game.remainX;
  //   }
  // } else {
  //   if (window.innerWidth < Game.mediaQ) {
  //     this.maxX = map.cols * map.tsize - this.width;
  //   } else {
  //     this.maxX = map.cols * map.tsize - this.width + Game.remainX;
  //   }
  // }
  // top and bottom sides
  if (this.following.y < this.height / 2 || this.following.y + Game.remainY > this.maxY + this.height / 2) {
    this.following.screenY = this.following.y - this.y;
    this.lastHeight = window.innerHeight;
    // this.height = this.lastHeight - Game.remainY;
    this.maxY = map.rows * map.tsize - this.lastHeight + Game.remainY;
  } else {
    this.maxY = map.rows * map.tsize - this.height + Game.remainY;
  }
  map.fontX = this.following.screenX;
  map.fontY = this.following.screenY;
};
function Hero(map, x, y) {
  this.map = map;
  this.x = x;
  this.y = y;
  this.width = map.tsize;
  this.height = map.tsize;
  this.dirR = false;
  this.isWalking = false;
  this.judy = false;
  this.floor = 2;
  this.displayChatIcon = false;

  this.c = 0;
  this.tempX = 0;
  this.tempY = 0;

  this.min = map.tsize;
  this.realSpeed = 0;
  this.divisorArr = this.getDivisors();

  //body파츠 관련 추가내용
  const customInfoLocal = JSON.parse(localStorage.getItem("customInfo"));
  this.customInfo =
    customInfoLocal !== null
      ? customInfoLocal
      : {
          toneColor: 0,
          headShape: 0,
          hairColor: 0,
          hairShape: 0,
          bodyColor: 0,
          bodyShape: 0,
          acc: 0,
        };
  const nickName = localStorage.getItem("nickName");
  this.nickName = nickName !== null ? nickName : "";

  this.id = utils.uuidv4();

  //body파츠 이미지파일
  this.headsImage = Loader.getImage("heads");
  this.hairsImage = Loader.getImage("hairs");
  this.bodysImage = Loader.getImage("bodys");
  this.handsImage = Loader.getImage("hands");
  this.AccsImage = Loader.getImage("accs");
  this.judyImage = Loader.getImage("judy");
  this.chatImage = Loader.getImage("chat");
}

Hero.SPEED = 512; // pixels per second

// tsize에 따른 가능한 픽셀 속도 산출(배열값)
// 객체지향으로 수정
Hero.prototype.getDivisors = function () {
  let i = 1;
  const arr = [];
  while (i <= map.tsize) {
    if (map.tsize % i === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};
//delta 값은 모니터 주사율, 일종의 핑을 나타내는 지수
Hero.prototype.move = function (delta, dirX, dirY) {
  // move hero
  // 픽셀 속도 배열값에서 캐릭터 움직값에 가장 가까운 숫자를 찾아 속도지정
  delta = delta > 0.1 ? 0.1 : delta;
  for (let i = 0; i < this.divisorArr.length; i++) {
    c = this.divisorArr[i] - Hero.SPEED * delta < 0 ? -(this.divisorArr[i] - Hero.SPEED * delta) : this.divisorArr[i] - Hero.SPEED * delta;

    if (c < this.min) {
      this.min = c;
      realSpeed = this.divisorArr[i];
    }
  }

  if (dirX > 1 || dirX < -1 || dirY > 1 || dirY < -1) {
    if (dirX > 0) {
      this.x += realSpeed;
    } else {
      this.x += -realSpeed;
    }
    this.x = Math.round(this.x);

    if (dirY > 0) {
      this.y += realSpeed;
    } else {
      this.y += -realSpeed;
    }
    this.y = Math.round(this.y);
  } else {
    this.x += dirX * realSpeed;
    this.x = Math.round(this.x);

    this.y += dirY * realSpeed;
    this.y = Math.round(this.y);
  }
  // check if we walked into a non-walkable tile
  this._collide();
  this._interactive();

  // clamp values
  var maxX = this.map.cols * this.map.tsize;
  var maxY = this.map.rows * this.map.tsize;
  this.x = Math.max(0, Math.min(this.x, maxX));
  this.y = Math.max(0, Math.min(this.y, maxY));
};

Hero.prototype._interactive = function () {
  var left = this.x - this.width / 2 - 1;
  var right = this.x + this.width / 2;
  var top = this.y - this.height / 2 - 1;
  var bottom = this.y + this.height / 2;

  const interLeft = this.map.isInteractiveAtXY(left, bottom - this.height / 2); //성공
  const interDown = this.map.isInteractiveAtXY(right - this.width / 2, bottom);
  const interUp = this.map.isInteractiveAtXY(right - this.width / 2, top);
  const interRight = this.map.isInteractiveAtXY(right, bottom - this.height / 2);

  if (interLeft || interDown || interRight || interUp) {
    map.logic = true;
    //이벤트 한번만 걸기 위한 if와 변수값

    if (base.hasKeydown === 0) {
      base.hasKeydown = 1;
      document.addEventListener("keydown", base.event1, true);
      //document.onkeydown = event1;
    }

    if (interLeft) {
      map.interRow = map.getRow(this.y);
      map.interCol = map.getCol(this.x) - 1;
      //좌측 상호작용 타일 구하기
      base.interactiveNumber = this.map.InteractiveObject(left, bottom - this.height / 2);
    } else if (interDown) {
      map.interRow = map.getRow(this.y) + 1;
      map.interCol = map.getCol(this.x);
      //아래쪽 상호작용 타일 구하기
      base.interactiveNumber = this.map.InteractiveObject(right - this.width / 2, bottom);
    } else if (interUp) {
      map.interRow = map.getRow(this.y) - 1;
      map.interCol = map.getCol(this.x);
      //위쪽 상호작용 타일 구하기
      base.interactiveNumber = this.map.InteractiveObject(right - this.width / 2, top);
    } else if (interRight) {
      map.interRow = map.getRow(this.y);
      map.interCol = map.getCol(this.x) + 1;
      //우측 상호작용 타일 구하기
      base.interactiveNumber = this.map.InteractiveObject(right, bottom - this.height / 2);
    }
  } else {
    map.logic = false;
    //이벤트 한번만 걸기 위한 if와 변수값
    if (base.hasKeydown === 1) {
      base.hasKeydown = 0;
      document.removeEventListener("keydown", base.event1, true);
      //document.onkeydown = null;
    }
  }
};

Hero.prototype._collide = function () {
  var row, col;
  // -1 in right and bottom is because image ranges from 0..63
  // and not up to 64
  var left = this.x - this.width / 2;
  var right = this.x + this.width / 2 - 1;
  var top = this.y - this.height / 2;
  var bottom = this.y + this.height / 2 - 1;
  // 부딪힘 판정(아래)

  // check for collisions on sprite sides
  const blockLeftUp = this.map.isSolidTileAtXY(left, top) || this.map.isInteractiveAtXY(left, top);
  const blockLeftDown = this.map.isSolidTileAtXY(left, bottom) || this.map.isInteractiveAtXY(left, bottom);
  const blockRightUp = this.map.isSolidTileAtXY(right, top) || this.map.isInteractiveAtXY(right, top);
  const blockRightDown = this.map.isSolidTileAtXY(right, bottom) || this.map.isInteractiveAtXY(right, bottom);

  // 위로만 부딪혔을 때
  if (blockLeftUp && blockRightUp && !(blockRightDown || blockLeftDown)) {
    row = this.map.getRow(top);
    this.y = this.height / 2 + this.map.getY(row + 1);
  }
  //아래로만 부딪혔을 때
  else if (blockLeftDown && blockRightDown && !(blockRightUp || blockLeftUp)) {
    row = this.map.getRow(bottom); //y축(아래)으로 이동하다 충돌한 오브젝트의 top 행 번호
    this.y = -this.height / 2 + this.map.getY(row);
  }
  //왼쪽으로만 막혔을 때
  else if (blockLeftUp && blockLeftDown && !(blockRightUp || blockRightDown)) {
    col = this.map.getCol(left);
    this.x = this.width / 2 + this.map.getX(col + 1);
  } // 오른쪽으로만 막혔을 때
  else if (blockRightUp && blockRightDown && !(blockLeftDown || blockLeftUp)) {
    col = this.map.getCol(right);
    this.x = -this.width / 2 + this.map.getX(col);
  } // 왼쪽과 위쪽 함께 막혔을때
  else if (blockLeftUp && blockRightUp && blockLeftDown) {
    col = this.map.getCol(left);
    this.x = this.width / 2 + this.map.getX(col + 1);
    row = this.map.getRow(top);
    this.y = this.height / 2 + this.map.getY(row + 1);
  } // 오른쪽, 위쪽 함께 막혔을때
  else if (blockRightUp && blockLeftUp && blockRightDown) {
    row = this.map.getRow(top);
    this.y = this.height / 2 + this.map.getY(row + 1);
    col = this.map.getCol(right);
    this.x = -this.width / 2 + this.map.getX(col);
  } // 왼쪽, 아래쪽 함께 막혔을때
  else if (blockLeftDown && blockRightDown && blockLeftUp) {
    col = this.map.getCol(left);
    this.x = this.width / 2 + this.map.getX(col + 1);
    row = this.map.getRow(bottom);
    this.y = -this.height / 2 + this.map.getY(row);
  } // 오른쪽, 아래쪽 함께 막혔을때
  else if (blockRightDown && blockRightUp && blockLeftDown) {
    row = this.map.getRow(bottom);
    this.y = -this.height / 2 + this.map.getY(row);
    col = this.map.getCol(right);
    this.x = -this.width / 2 + this.map.getX(col);
  } // 왼위 대각에 블럭이 있을때, 그 타일로 이동시
  else if (blockLeftUp && !(blockRightDown && blockRightUp && blockLeftDown)) {
    let blockX = this.map.getX(this.map.getCol(left) + 1) + this.width / 2;
    let blockY = this.map.getY(this.map.getRow(top) + 1) + this.height / 2;

    if (blockX - this.x > blockY - this.y) {
      this.y = blockY;
    } else if (blockX - this.x < blockY - this.y) {
      this.x = blockX;
    } else {
      this.y = blockY;
      this.x = blockX;
    }
  } // 왼아래 대각에 블럭이 있을때, 그 타일로 이동시
  else if (blockLeftDown && !(blockRightDown && blockRightUp && blockLeftUp)) {
    let blockX = this.map.getX(this.map.getCol(left) + 1) + this.width / 2;
    let blockY = this.map.getY(this.map.getRow(bottom)) - this.height / 2;

    if (blockX - this.x > this.y - blockY) {
      this.y = blockY;
    } else if (blockX - this.x < this.y - blockY) {
      this.x = blockX;
    } else {
      this.y = blockY;
      this.x = blockX;
    }
  }
  // 우위 대각에 블럭이 있을때, 그 타일로 이동시.
  else if (blockRightUp && !(blockRightDown && blockLeftDown && blockLeftUp)) {
    let blockX = this.map.getX(this.map.getCol(right)) - this.width / 2;
    let blockY = this.map.getY(this.map.getRow(top) + 1) + this.height / 2;

    if (this.x - blockX > blockY - this.y) {
      this.y = blockY;
    } else if (this.x - blockX < blockY - this.y) {
      this.x = blockX;
    } else {
      this.y = blockY;
      this.x = blockX;
    }
  }
  // 우아래 대각에 블럭이 있을때, 그 타일로 이동시
  else if (blockRightDown && !(blockLeftDown && blockRightUp && blockLeftUp)) {
    let blockX = this.map.getX(this.map.getCol(right)) - this.width / 2;
    let blockY = this.map.getY(this.map.getRow(bottom)) - this.height / 2;

    if (this.x - blockX > this.y - blockY) {
      this.y = blockY;
    } else if (this.x - blockX < this.y - blockY) {
      this.x = blockX;
    } else {
      this.y = blockY;
      this.x = blockX;
    }
  }
};

// --------------------

Game.load = function () {
  return [
    Loader.loadImage("tiles", "../assets/tiles.png"),
    Loader.loadImage("heads", "../assets/heads.png"),
    Loader.loadImage("hairs", "../assets/hairs.png"),
    Loader.loadImage("bodys", "../assets/bodys.png"),
    Loader.loadImage("hands", "../assets/hands.png"),
    Loader.loadImage("accs", "../assets/accs.png"),
    Loader.loadImage("judy", "../assets/judy.png"),
    Loader.loadImage("fences", "../assets/tiles/fences.png"),
    Loader.loadImage("grass", "../assets/tiles/Grass.png"),
    Loader.loadImage("hills", "../assets/tiles/Hills.png"),
    Loader.loadImage("tilledDirt", "../assets/tiles/TilledDirt.png"),
    Loader.loadImage("water", "../assets/tiles/Water.png"),
    Loader.loadImage("woodenHouse", "../assets/tiles/WoodenHouse.png"),
    Loader.loadImage("redBlock", "../assets/tiles/redBlock.png"),
    Loader.loadImage("blueBlock", "../assets/tiles/blueBlock.png"),
    Loader.loadImage("greenBlock", "../assets/tiles/greenBlock.png"),
    Loader.loadImage("bridge", "../assets/tiles/bridge.png"),
    Loader.loadImage("trees", "../assets/tiles/trees.png"),

    Loader.loadImage("chat", "../assets/chat.png"),
    Loader.loadImage("miniMap", "../assets/minimap.png"),
    Loader.loadImage("computer", "../assets/computer64.png"),
  ];
};

Game.init = function () {
  Keyboard.listenForEvents([Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
  this.tileAtlas = Loader.getImage("tiles");
  this.fences = Loader.getImage("fences");
  this.grass = Loader.getImage("grass");
  this.hills = Loader.getImage("hills");
  this.tilledDirt = Loader.getImage("tilledDirt");
  this.water = Loader.getImage("water");
  this.woodenHouse = Loader.getImage("woodenHouse");
  this.redBlock = Loader.getImage("redBlock");
  this.blueBlock = Loader.getImage("blueBlock");
  this.greenBlock = Loader.getImage("greenBlock");
  this.bridge = Loader.getImage("bridge");
  this.trees = Loader.getImage("trees");
  this.computer = Loader.getImage("computer");
  this.miniMap = Loader.getImage("miniMap");

  const heroXY = localStorage.getItem("heroXY");
  let respawnX = 1312;
  let respawnY = 480;
  if (heroXY) {
    respawnX = JSON.parse(heroXY)[0];
    respawnY = JSON.parse(heroXY)[1];
    localStorage.removeItem("heroXY");
  }

  this.hero = new Hero(map, respawnX, respawnY);

  //남쪽섬리스폰
  // this.hero = new Hero(map, 24 * 64, 23 * 64);
  this.camera = new Camera(map, window.innerWidth, window.innerHeight);
  this.camera.follow(this.hero);

  this.chat.init();
  this.resizeInit();
  window.onresize = () => {
    this.resizeInit();
  };

  this.customBtninit();
  base.missionCheck();
  base.missionInit();

  socket.on("socketId", (id) => {
    this.hero.id = id;
  });
  socket.on("players", (data) => {
    Game.players = data;
  });
};

Game.remainX = 330;
Game.remainY = 50;
Game.mediaQ = 620;
Game.minCanvasX = 300;
Game.minCanvasY = 420;
Game.resizeInit = function () {
  this.chat.width = window.innerWidth < 620 ? 240 : 0;
  this.canvas.width =
    window.innerWidth - this.remainX + this.chat.width > Game.minCanvasX ? window.innerWidth - this.remainX + this.chat.width : Game.minCanvasX;

  this.canvas.height = window.innerHeight - this.remainY > Game.minCanvasY ? window.innerHeight - this.remainY : Game.minCanvasY;
  document.querySelector(".gameAndMission").style.height = this.canvas.height + "px";
  if (window.innerWidth < 840) {
    const missionClassList = document.querySelector(".mission").classList;
    if (!missionClassList.contains("d-none")) {
      missionClassList.add("d-none");
    }
  }
  this.chat.boxResize();
};

Game.mouseX = 0;
Game.mouseY = 0;

Game.update = function (delta) {
  // handle hero movement with arrow keys
  let dirX = 0;
  let dirY = 0;
  // -----------------------------temp 변수 넣어 블락이동 구현-------------------------------
  if (Keyboard.isDown(Keyboard.LEFT)) {
    this.hero.tempX = -1;
    this.hero.dirR = false;
    dirX = -1;

    if (Keyboard.isDown(Keyboard.UP)) {
      dirY = -1;
      this.hero.tempY = -1;
    }
    if (Keyboard.isDown(Keyboard.DOWN)) {
      dirY = 1;
      this.hero.tempY = 1;
    }
  } else if (Keyboard.isDown(Keyboard.RIGHT)) {
    dirX = 1;
    this.hero.dirR = true;
    this.hero.tempX = 1;

    if (Keyboard.isDown(Keyboard.UP)) {
      dirY = -1;
      this.hero.tempY = -1;
    }
    if (Keyboard.isDown(Keyboard.DOWN)) {
      dirY = 1;
      this.hero.tempY = 1;
    }
  }

  if (Keyboard.isDown(Keyboard.UP)) {
    dirY = -1;
    this.hero.tempY = -1;
  } else if (Keyboard.isDown(Keyboard.RIGHT)) {
    dirX = 1;
    this.hero.tempX = 1;
  } else if (Keyboard.isDown(Keyboard.LEFT)) {
    dirX = -1;
    this.hero.tempX = -1;
  }

  if (Keyboard.isDown(Keyboard.DOWN)) {
    dirY = 1;
    this.hero.tempY = 1;
  } else if (Keyboard.isDown(Keyboard.RIGHT)) {
    dirX = 1;
    this.hero.tempX = 1;
  } else if (Keyboard.isDown(Keyboard.LEFT)) {
    dirX = -1;
    this.hero.tempX = -1;
  }
  document.onmousedown = function leftClick() {
    let target = window.event.target;
    if (target.id === "demo") {
      Game.mouseX = (Math.floor((Game.camera.x + window.event.x) / map.tsize) - Math.floor(Game.hero.x / map.tsize)) * map.tsize;
      Game.mouseY = (Math.floor((Game.camera.y + window.event.y) / map.tsize) - Math.floor(Game.hero.y / map.tsize)) * map.tsize;

      // Game.dirY = Game.hero.tempY;
    }
    // else if (dirX <= 1 && dirX >= -1) {    }
  };

  let locatX = (this.hero.x - map.tsize / 2) % map.tsize !== 0;
  let locatY = (this.hero.y - map.tsize / 2) % map.tsize !== 0;

  if (dirX !== 0 || locatX) {
    dirX = this.hero.tempX;
  }
  if (dirY !== 0 || locatY) {
    dirY = this.hero.tempY;
  }
  if (Game.mouseX > 0) {
    dirX = 1;
    Game.mouseX -= 8;
  }
  if (Game.mouseX < 0) {
    dirX = -1;
    Game.mouseX += 8;
  }
  if (Game.mouseY > 0) {
    dirY = 1;
    Game.mouseY -= 8;
  }
  if (Game.mouseY < 0) {
    dirY = -1;
    Game.mouseY += 8;
  }
  // console.log(Game.hero);
  // console.log(this.hero);
  this.hero.move(delta, dirX, dirY);

  if (dirX !== 0 || dirY !== 0) {
    //걷는모션
    this.hero.isWalking = true;
  } else {
    this.hero.isWalking = false;
  }

  const heroCopy = {
    x: this.hero.x,
    y: this.hero.y,
    isWalking: this.hero.isWalking,
    judy: this.hero.judy,
    floor: this.hero.floor,
    displayChatIcon: this.hero.displayChatIcon,
    customInfo: this.hero.customInfo,
    nickName: this.hero.nickName,
    id: this.hero.id,
    dirR: this.hero.dirR,
  };

  socket.emit("players", heroCopy);

  this.camera.update();
};

Game._drawLayer = function (layer) {
  var startCol = Math.floor(this.camera.x / map.tsize);
  var endCol = startCol + this.camera.width / map.tsize;
  var startRow = Math.floor(this.camera.y / map.tsize);
  var endRow = startRow + this.camera.height / map.tsize;
  var offsetX = -this.camera.x + startCol * map.tsize;
  var offsetY = -this.camera.y + startRow * map.tsize;

  for (var c = startCol; c <= endCol; c++) {
    for (var r = startRow; r <= endRow; r++) {
      var tile = map.getTile(layer, c, r);
      var x = (c - startCol) * map.tsize + offsetX;
      var y = (r - startRow) * map.tsize + offsetY;
      if (tile !== 0) {
        // 0 => empty tile
        this.ctx.drawImage(
          this.tileAtlas, // image
          (tile - 1) * map.tsize, // source x
          0, // source y
          map.tsize, // source width
          map.tsize, // source height
          Math.round(x), // target x
          Math.round(y), // target y
          map.tsize, // target width
          map.tsize // target height
        );
      }
    }
  }
};
Game._drawGrid = function () {
  var width = map.cols * map.tsize;
  var height = map.rows * map.tsize;
  var x, y;
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = 1;
  for (var r = 0; r < map.rows; r++) {
    x = -this.camera.x;
    y = r * map.tsize - this.camera.y;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);

    this.ctx.lineTo(width, y);
    this.ctx.stroke();
  }
  for (var c = 0; c < map.cols; c++) {
    x = c * map.tsize - this.camera.x;
    y = -this.camera.y;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x, height);
    this.ctx.stroke();
  }
};

Game._playersDraw = function (floor) {
  if (!this.players) {
    return;
  }
  const playersKeys = Object.keys(this.players);
  //하단 status표기 (임시)
  // const status = document.querySelector("#status");
  // status.innerHTML = "";
  // playersKeys.forEach((key) => {
  //   const div = document.createElement("div");
  //   status.append(div);
  //   div.innerHTML = `id: ${this.players[key].id} | x: ${Math.floor(this.players[key].x / 64)} | y: ${Math.floor(this.players[key].y / 64) - 1}`;
  // });
  //

  playersKeys.forEach((key) => {
    if (this.players[key].id !== this.hero.id) {
      if (floor !== this.players[key].floor) {
        return;
      }
      //좌우반전
      let flipCheck = 1;
      if (this.players[key].dirR) {
        this.ctx.scale(-1, 1);
        flipCheck = -1;
      }
      //걷기모션
      let walkMotion = 1;
      if (this.players[key].isWalking) {
        walkMotion += Math.sin(new Date() / 40);
        walkMotion *= 3;
      }
      if (this.players[key].judy) {
        const m = this.players[key].customInfo.toneColor % 2;
        this.ctx.drawImage(
          this.hero.judyImage, // image
          m * 64, // source x
          0, // source y
          64, // source width
          64, // source height
          (this.players[key].x - this.camera.x) * flipCheck - map.tsize / 2,
          this.players[key].y - this.camera.y - map.tsize / 2 - 2 * walkMotion,
          map.tsize,
          map.tsize - walkMotion
        );
        if (flipCheck === -1) {
          this.ctx.scale(-1, 1);
        }
        return;
      }
      //바디드로잉
      this.ctx.drawImage(
        this.hero.bodysImage, // image
        this.players[key].customInfo.bodyShape * map.tsize, // source x
        this.players[key].customInfo.bodyColor * map.tsize, // source y
        map.tsize, // source width
        map.tsize, // source height
        (this.players[key].x - this.camera.x) * flipCheck - map.tsize / 2,
        this.players[key].y - this.camera.y - map.tsize / 2 - 2 * walkMotion,
        map.tsize,
        map.tsize - walkMotion
      );
      //머리드로잉
      this.ctx.drawImage(
        this.hero.headsImage, // image
        this.players[key].customInfo.headShape * map.tsize, // source x
        this.players[key].customInfo.toneColor * map.tsize, // source y
        map.tsize, // source width
        map.tsize, // source height
        (this.players[key].x - this.camera.x) * flipCheck - map.tsize / 2,
        this.players[key].y - this.camera.y - map.tsize / 2 - 2 * walkMotion,
        this.hero.width,
        this.hero.height - walkMotion
      );
      //헤어드로잉
      this.ctx.drawImage(
        this.hero.hairsImage, // image
        this.players[key].customInfo.hairShape * map.tsize, // source x
        this.players[key].customInfo.hairColor * map.tsize, // source y
        map.tsize, // source width
        map.tsize, // source height
        (this.players[key].x - this.camera.x) * flipCheck - map.tsize / 2,
        this.players[key].y - this.camera.y - map.tsize / 2 - 2 * walkMotion,
        map.tsize,
        map.tsize - walkMotion
      );

      // acc 드로잉
      this.ctx.drawImage(
        this.hero.AccsImage, // image
        this.players[key].customInfo.acc * map.tsize, // source x
        0,
        map.tsize, // source width
        map.tsize, // source height
        (this.players[key].x - this.camera.x) * flipCheck - map.tsize / 2,
        this.players[key].y - this.camera.y - map.tsize / 2 - 2 * walkMotion,
        map.tsize,
        map.tsize - walkMotion
      );
      // hands 드로잉
      this.ctx.drawImage(
        this.hero.handsImage, // image
        0,
        this.players[key].customInfo.toneColor * map.tsize, // source x
        map.tsize, // source width
        map.tsize, // source height
        (this.players[key].x - this.camera.x) * flipCheck - map.tsize / 2,
        this.players[key].y - this.camera.y - map.tsize / 2 - 2 * walkMotion,
        map.tsize,
        map.tsize - walkMotion
      );
      if (flipCheck === -1) {
        this.ctx.scale(-1, 1);
      }
    }
  });
};

Game._heroDraw = function (floor) {
  if (floor !== this.hero.floor) {
    return;
  }
  //바디드로잉
  let flipCheck = 1;
  if (this.hero.dirR) {
    this.ctx.scale(-1, 1);
    flipCheck = -1;
  }
  //걷기모션
  let walkMotion = 1;
  if (this.hero.isWalking) {
    walkMotion += Math.sin(new Date() / 40);
    walkMotion *= 3;
  }
  if (this.hero.judy) {
    const m = this.hero.customInfo.toneColor % 2;
    this.ctx.drawImage(
      this.hero.judyImage, // image
      m * 64, // source x
      0, // source y
      64, // source width
      64, // source height
      this.hero.screenX * flipCheck - this.hero.width / 2,
      this.hero.screenY - this.hero.height / 2 - 2 * walkMotion,
      this.hero.width,
      this.hero.height - walkMotion
    );
    if (flipCheck === -1) {
      this.ctx.scale(-1, 1);
    }
    return;
  }
  //바디드로잉
  this.ctx.drawImage(
    this.hero.bodysImage, // image
    this.hero.customInfo.bodyShape * this.hero.width, // source x
    this.hero.customInfo.bodyColor * this.hero.height, // source y
    this.hero.width, // source width
    this.hero.height, // source height
    this.hero.screenX * flipCheck - this.hero.width / 2,
    this.hero.screenY - this.hero.height / 2 - 2 * walkMotion,
    this.hero.width,
    this.hero.height - walkMotion
  );

  //머리드로잉
  this.ctx.drawImage(
    this.hero.headsImage, // image
    this.hero.customInfo.headShape * this.hero.width, // source x
    this.hero.customInfo.toneColor * this.hero.height, // source y
    this.hero.width, // source width
    this.hero.height, // source height
    this.hero.screenX * flipCheck - this.hero.width / 2,
    this.hero.screenY - this.hero.height / 2 - 2 * walkMotion,
    this.hero.width,
    this.hero.height - walkMotion
  );
  //헤어드로잉

  this.ctx.drawImage(
    this.hero.hairsImage, // image
    this.hero.customInfo.hairShape * this.hero.width, // source x
    this.hero.customInfo.hairColor * this.hero.height, // source y
    this.hero.width, // source width
    this.hero.height, // source height
    this.hero.screenX * flipCheck - this.hero.width / 2,
    this.hero.screenY - this.hero.height / 2 - 2 * walkMotion,
    this.hero.width,
    this.hero.height - walkMotion
  );

  // acc 드로잉
  this.ctx.drawImage(
    this.hero.AccsImage, // image
    this.hero.customInfo.acc * this.hero.width, // source x
    0,
    this.hero.width, // source width
    this.hero.height, // source height
    this.hero.screenX * flipCheck - this.hero.width / 2,
    this.hero.screenY - this.hero.height / 2 - 2 * walkMotion,
    this.hero.width,
    this.hero.height - walkMotion
  );
  // hands 드로잉
  this.ctx.drawImage(
    this.hero.handsImage, // image
    0,
    this.hero.customInfo.toneColor * this.hero.height, // source x
    this.hero.width, // source width
    this.hero.height, // source height
    this.hero.screenX * flipCheck - this.hero.width / 2,
    this.hero.screenY - this.hero.height / 2 - 2 * walkMotion,
    this.hero.width,
    this.hero.height - walkMotion
  );
  if (flipCheck === -1) {
    this.ctx.scale(-1, 1);
  }
};
Game._drawNameBox = function () {
  //nameBox 그리기
  const drawEachNameBox = (name, sX, sY) => {
    this.ctx.fillStyle = "white";
    const textWidth = this.ctx.measureText(name).width + 5;
    this.ctx.fillRect(sX + this.hero.width / 2 - textWidth / 2, sY - 14, textWidth, 14);
    this.ctx.beginPath();
    this.ctx.arc(sX + this.hero.width / 2 - textWidth / 2, sY - 7, 7, 0, 2 * Math.PI, true);
    this.ctx.arc(sX + this.hero.width / 2 + textWidth / 2, sY - 7, 7, 0, 2 * Math.PI, true);
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";

    this.ctx.fillText(name, sX + this.hero.width / 2, sY);
  };

  this.ctx.font = "8pt'Product Sans'";
  if (!this.hero.displayChatIcon) {
    drawEachNameBox(this.hero.nickName, this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2 - 10);
  }

  if (!this.players) {
    return;
  }
  const playerKeys = Object.keys(this.players);

  playerKeys.forEach((key) => {
    if (!this.players[key].displayChatIcon) {
      if (this.players[key].id !== this.hero.id) {
        drawEachNameBox(
          this.players[key].nickName,
          this.players[key].x - this.camera.x - this.hero.width / 2,
          this.players[key].y - this.camera.y - this.hero.height / 2 - 10
        );
      }
    } else {
      this.ctx.drawImage(
        this.hero.chatImage, // image
        0,
        0,
        64, // source width
        64, // source height
        this.players[key].x - this.camera.x - map.tsize / 4,
        this.players[key].y - this.camera.y - map.tsize,
        32,
        32
      );
    }
  });

  // this.players.forEach((player) => {
  //   drawEachNameBox(player.nickName, player.screenX, player.screenY);
  // });
};
Game._drawRectInterect = function () {
  if (map.logic) {
    map.rectBorder(this.ctx, map.interCol, map.interRow, 1, 1, "Red");
  }
  this._text();
};
Game._drawRect = function () {
  map.rect(this.ctx, "blue", 2, 1, 20, 23, 0, -32, [["밥친구하기", "<한끼어때>"], "이응과 시옷들"]);
  map.rect(this.ctx, "blue", 2, 1, 37, 23, 0, -32, [["여행플랫폼", "<moimmoim>"], "team B"]);
  map.rect(this.ctx, "blue", 2, 1, 20, 29, 0, -32, [["영화정보", "<WhatShow>"], "BOAAA"]);
  map.rect(this.ctx, "blue", 2, 1, 37, 29, 0, -32, [["FEEL the GLOW", "<LANEISFREE>"], "쌀과자"]);
  // map.rect(this.ctx, "blue", 2, 1, 34, 23, 20, -25, [["ㅇㅇㅇ", "XXX페이지"], "DD팀"]);
};
Game._text = function () {
  if (map.logic) {
    //반응 타일 상단 위치 구하는 공식
    const reactTileX = map.interCol * map.tsize - Game.camera.x;
    const reactTileY = map.interRow * map.tsize - Game.camera.y - map.tsize * 0.2 - 5;
    const radius = 4;
    const boxWidth = 20;
    const boxHeight = 10;

    this.ctx.font = "12pt'Product Sans'";
    this.ctx.fillStyle = "#00000070";
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    // 왼쪽 상단 모서리
    this.ctx.moveTo(reactTileX + radius - boxWidth, reactTileY - boxHeight);
    // 오른쪽 상단 모서리
    this.ctx.arcTo(reactTileX + map.tsize + boxWidth, reactTileY - boxHeight, reactTileX + map.tsize + boxWidth, reactTileY, radius);
    // 오른쪽 하단 모서리
    this.ctx.arcTo(
      reactTileX + map.tsize + boxWidth,
      reactTileY + boxHeight,
      reactTileX + map.tsize - radius + boxWidth,
      reactTileY + boxHeight + radius,
      radius
    );
    // 왼쪽 하단 모서리
    this.ctx.arcTo(reactTileX - boxWidth, reactTileY + boxHeight + radius - 2, reactTileX - boxWidth, reactTileY + boxHeight, radius);
    // 왼쪽 상단 모서리
    this.ctx.arcTo(reactTileX - boxWidth, reactTileY - boxHeight, reactTileX + radius - boxWidth, reactTileY - boxHeight, radius);
    // 선 그리기
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Press [Space]", reactTileX + map.tsize / 2, reactTileY - map.tsize * 0.2 + 20);
  }
};
Game.switchMap = 1;
Game._miniMapIcon = function () {
  const miniMapBtn = document.querySelector(".miniMap");
  miniMapBtn.addEventListener("click", () => {
    if (Game.switchMap === 1) {
      Game.switchMap = 2;
    } else if (Game.switchMap === 2) {
      Game.switchMap = 1;
    }
  });
};
Game._miniMap = function () {
  const w = map.cols * map.tsize * 0.08;
  const h = map.rows * map.tsize * 0.08;
  const screenX = 8;
  const screenY = 8;
  let x;
  let y;
  const speedX = 4.95;
  const speedY = 4.9;
  if (Game.switchMap === 1) {
    this.ctx.drawImage(this.miniMap, screenX, 30 + screenY, w, h);
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(screenX, 30 + screenY, w, h);
    this.ctx.strokeRect(screenX, screenY, w, 30);
    this.ctx.fillStyle = "#f2b400";
    this.ctx.fillRect(screenX + 1, 1 + screenY, w - 2, 28);
    this.ctx.fillStyle = "#000000";
    this.ctx.font = "15pt'Product Sans'";
    this.ctx.textAlign = "center";
    this.ctx.fillText("✨Metaverse", screenX + w * 0.5, 25 + screenY);

    if (!this.players) {
      return;
    }
    const playerKeys = Object.keys(this.players);
    this.ctx.fillStyle = "white";
    playerKeys.forEach((key) => {
      x = Math.floor(this.players[key].x / 64) + 4.3;
      y = Math.floor(this.players[key].y / 64) + 7.2;
      if (this.players[key].id !== this.hero.id) {
        this.ctx.fillRect(x * speedX - screenX - 3.5, y * speedY + 3, 6, 6);
      }
    });
    this.ctx.fillStyle = "red";
    x = Math.floor(this.hero.x / 64) + 4.3;
    y = Math.floor(this.hero.y / 64) + 7.2;
    this.ctx.fillRect(x * speedX - screenX - 3.5, y * speedY + 3, 6, 6);
  }
};

Game.customBtninit = function () {
  document.querySelector(".customBtn").addEventListener("click", () => {
    localStorage.setItem("heroXY", JSON.stringify([this.hero.x, this.hero.y]));
    location.href = "/customize";
  });
};

Game.render = function () {
  this._drawTiles(1);
  this._playersDraw(1);
  this._heroDraw(1);

  Game._drawTilesLayer(10); //bridge_floor

  this._playersDraw(2);
  this._heroDraw(2);
  this._drawTiles(2);
  this._drawRect();

  this._drawNameBox();
  this._drawRectInterect();
  this._text();
  this._miniMap();
};
