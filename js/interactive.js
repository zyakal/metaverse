// 기초 베이스 객체

const base = {
  //상호작용을 위한 값들과 함수
  hasKeydown: 0,
  interactiveNumber: 0,
  event1: function (e) {
    if (document.activeElement.id) {
      return;
    }
    if (e.code === "Space") {
      document.querySelector(".modalClick").click();
      base.missionCheck(base.interactiveNumber);
      // 라네즈
      if (base.interactiveNumber === 11) {
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<iframe id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src="http://192.168.0.52:8080/">
          </iframe>`;
      }
      // 한끼어때
      if (base.interactiveNumber === 12) {
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<iframe id="inlineFrameExample"
          title="Inline Frame Example"     
          width="100%"
          height="100%"     
          src="http://192.168.0.42:8080/">
          </iframe>`;
      }
      //모임
      if (base.interactiveNumber === 13) {
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<iframe id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src="http://192.168.0.71:8080/">
          </iframe>`;
      }
      if (base.interactiveNumber === 14) {
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<iframe id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src="http://192.168.0.63:8080/">
          </iframe>`;
      }
      if (base.interactiveNumber === 15) {
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<img src='../img/judy.jpg' width=100% style="object-fit:cover;" >`;
      }
    }
  },
  missionCheck: function (num = false) {
    if (num === 15) {
      this.easterEggJudy();
      return;
    }
    let missionStatus = { length: 0, complete: false };
    const temp = localStorage.getItem("mission1");
    if (temp) {
      missionStatus = JSON.parse(temp);
      if (missionStatus.complete === true) {
        return;
      }
    }

    if (num) {
      if (!missionStatus[num]) {
        missionStatus.length++;
      }
      missionStatus[num] = true;
      localStorage.setItem("mission1", JSON.stringify(missionStatus));
    }
    const missionCountDiv = document.querySelector(".missionCount");
    missionCountDiv.innerHTML = `${missionStatus.length} / 4`;

    if (missionStatus.length >= 4) {
      const missionClearDiv = document.createElement("div");
      const missionClear = document.createElement("button");
      missionClear.className = "missionClear";
      missionCountDiv.innerHTML = "미션 클리어!";
      missionClear.innerHTML = "Click";
      console.log(missionCountDiv);
      missionCountDiv.appendChild(missionClearDiv).append(missionClear);
      missionClear.addEventListener("click", () => {
        document.querySelector(".mission-body").innerHTML = "<p2>모든 포트폴리오 감상하기 미션을 완료했습니다!</p2><div>리워드 : ✨뱃지</div>";
        document.querySelector(".mission1Btn").click();
      });
    }
  },
  missionInit: () => {
    document.querySelector(".missionToggleBtn").addEventListener("click", () => {
      document.querySelector(".mission").classList.toggle("d-none");
    });
    const missionStatus = localStorage.getItem("mission1");
    if (missionStatus) {
      if (JSON.parse(missionStatus).complete === true) {
        base.missionRewards1();
        //
        return;
      }
    }
    document.querySelector(".mission-btn").addEventListener("click", () => {
      base.missionRewards1();
    });
  },
  missionRewards1: () => {
    const missionStatus = JSON.parse(localStorage.getItem("mission1"));
    missionStatus.complete = true;
    localStorage.setItem("mission1", JSON.stringify(missionStatus));

    if (!Game.hero.nickName.includes("✨")) {
      Game.hero.nickName = "✨" + Game.hero.nickName;
      localStorage.setItem("nickName", Game.hero.nickName);
    }
    const EasterEgg = localStorage.getItem("easterEgg");

    document.querySelector(".missionBigTitle").innerHTML = "👾미션 달성 진행도";
    document.querySelector(".missionSmallTitle").innerHTML = "이스터에그를 찾아라!";
    document.querySelector(".missionCount").innerHTML = `${EasterEgg ? JSON.parse(EasterEgg).length : 0} / ???`;
  },
  easterEggJudy: (eggName = "judy") => {
    Game.hero.judy = true;
    setTimeout(() => {
      Game.hero.judy = false;
    }, 5000 * 60);
    const EasterEggJson = localStorage.getItem("easterEgg");
    let EasterEggObj = { length: 0 };
    if (EasterEggJson) {
      EasterEggObj = JSON.parse(EasterEggJson);
    }
    if (!EasterEggObj[eggName]) {
      EasterEggObj[eggName] = true;
      EasterEggObj.length += 1;
    }

    let missionStatus = { length: 0, complete: false };
    const temp = localStorage.getItem("mission1");
    if (temp) {
      missionStatus = JSON.parse(temp);
      if (missionStatus.complete === true) {
        console.log(document.querySelector(".missionCount"));
        document.querySelector(".missionCount").innerHTML = `${EasterEggObj.length} / ???`;
      }
    }
    localStorage.setItem("easterEgg", JSON.stringify(EasterEggObj));
  },
};
