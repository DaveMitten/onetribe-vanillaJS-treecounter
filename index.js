var selector = "#counter";
var counter = document.querySelector(selector);

function waitForTheCounterIdToExistInTheDom() {}
function insertSVG() {
  const treeCounter = document.getElementById("treeCounter");
  treeCounter.innerHTML = ` <svg className={textColour} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235 105">
          <path
              d="M9.55 19.4c-1.05 0-1.65-.45-1.65-1.35v-2.7c0-.9.6-1.35 1.65-1.35h21.9c1.05 0 1.5.45 1.5 1.35v2.7c0 .9-.45 1.35-1.5 1.35H23.5v23.25c0 .75-.3 1.2-1.05 1.2H18.4c-.6 0-.9-.45-.9-1.2V19.4H9.55zm28.2 24.45c-.9 0-1.35-.6-1.35-1.65V15.65c0-1.05.45-1.65 1.35-1.65h9.6c4.35 0 7.35.75 9.45 2.1 1.95 1.2 2.85 3.45 2.85 6.45 0 2.1-.75 3.9-2.4 5.25s-3.6 2.1-6.15 2.55c1.35.6 2.4 1.2 3 2.1l1.8 2.4 4.2 7.2c.75 1.2.45 1.8-.75 1.8h-3.3c-.75 0-1.35-.45-1.8-1.35l-4.2-6.9c-.45-.75-1.35-1.65-2.55-2.55-1.2-.75-2.4-1.2-3.6-1.2h-1.5V42.2c0 1.05-.45 1.65-1.5 1.65h-3.15zM42.4 26.6h3.75c2.7 0 4.65-.3 5.85-.9s1.8-1.65 1.8-3c0-1.5-.6-2.4-1.8-2.85-1.05-.45-2.7-.75-4.95-.75H42.4v7.5zm37.2-6.45c-.45-.6-.15-1.2.6-1.5a13.35 13.35 0 004.65-3.6c.6-.75 1.2-1.05 1.8-1.05h3.45c.75 0 1.2.3 1.2 1.2v27.3c0 .9-.45 1.35-1.2 1.35h-3.3c-.9 0-1.35-.45-1.35-1.35V21.2a7.95 7.95 0 01-3 2.25c-.6.3-1.2.15-1.5-.45l-1.35-2.85zm-12.45 28.5c-.75 0-1.2-.45-1.2-1.2V10.4c0-.75.45-1.2 1.2-1.2h7.2c.9 0 1.35.3 1.35 1.05v2.1c0 .6-.45 1.05-1.35 1.05H71.8v31.05h2.55c.9 0 1.35.45 1.35 1.05v2.1c0 .75-.45 1.05-1.35 1.05h-7.2zm31.2 0c-.75 0-1.2-.3-1.2-1.05v-2.1c0-.6.45-1.05 1.2-1.05h2.7V13.4h-2.7c-.75 0-1.2-.45-1.2-1.05v-2.1c0-.75.45-1.05 1.2-1.05h7.2c.9 0 1.35.45 1.35 1.2v37.05c0 .75-.45 1.2-1.35 1.2h-7.2zm16.8-4.8c-1.05 0-1.65-.6-1.65-1.65V15.65c0-1.05.6-1.65 1.65-1.65h7.05c5.25 0 8.85.75 10.8 1.95s2.7 3.45 2.7 6.15c0 1.8-.6 3.3-2.1 4.35-1.35 1.05-2.7 1.65-4.05 1.8 1.35.15 2.85.75 4.5 1.95s2.55 2.85 2.55 5.1c0 2.55-1.05 4.5-3.15 6.15-2.1 1.5-5.4 2.4-10.2 2.4h-8.1zm4.35-17.7h2.7c1.8 0 3.45-.45 5.1-1.05s2.25-1.5 2.25-2.85c0-1.05-.45-1.8-1.2-2.4-.9-.45-3-.75-6.15-.75h-2.7v7.05zm0 12.6h3c3 0 4.95-.3 6-.75 1.05-.6 1.65-1.65 1.65-3.15s-.6-2.4-1.8-3c-1.35-.6-3.15-.9-5.85-.9h-3v7.8zm24 5.1c-.9 0-1.5-.6-1.5-1.65V15.65c0-1.05.6-1.65 1.5-1.65h17.85c1.05 0 1.5.45 1.5 1.35v2.55c0 .9-.45 1.35-1.5 1.35h-13.2v6.6h12c1.05 0 1.65.45 1.65 1.35v2.4c0 .9-.6 1.35-1.65 1.35h-12v7.65h13.8c1.05 0 1.5.45 1.5 1.35v2.55c0 .9-.45 1.35-1.5 1.35H143.5zM164.8 9.8l-.15-.15v-.3l.15-.15h2.25l.15.15v.3l-.15.15h-.75v2.1l-.15.15h-.45l-.15-.15V9.8h-.75zm3 2.25l-.3-.15V9.35l.3-.15h.75l.15.15.45 1.65.15.15V11l.45-1.65.3-.15h.75l.15.15v2.55l-.15.15h-.45l-.15-.15v-1.65l-.45 1.65-.15.15h-.6l-.15-.15-.45-1.65v1.65l-.15.15h-.45zm59 15.45c0-4.5-3.4-8.2-7.8-8.6a8.7 8.7 0 00-12.5-4.5 8.7 8.7 0 00-16.1 2.9l-1.1-.1a8.7 8.7 0 00-8.6 9.4 8.6 8.6 0 00-.8 14l-.1.5a8.7 8.7 0 0012.7 7.7c1.6 1.2 4 2.6 5.1 2.3 0 0 .4 6.6.3 8.3-.1 3.2-1.1 6.7-1.8 9.6h10.5s-1.6-6.4-1.6-8.5c-.1-2.2.6-6.1.6-6.1l3.6-3.7a8.7 8.7 0 0013.5-6.3 8.7 8.7 0 003.5-13.8c.4-1 .6-2 .6-3.1zm-32.3 19.8a8.7 8.7 0 001.7-2.3l1.7 3.6s-.9.4-3.4-1.3zm6.3 2.2c-.9.2-2.4-2.5-3.4-4.7a8.6 8.6 0 005 .9c-.3 1.7-.8 3.7-1.6 3.8zm3.8 1.8c-2.1.5-.9-3.7-.3-6.1l1.2-.6c.3 1.8 1 3.4 2.2 4.7-1 .9-2.1 1.7-3.1 2z"
              fill={'currentColor'}
          ></path>
          <text x="140" y="80" fill={'currentColor'} fontWeight={fontWeight} fontSize={textFontSize}>
              TREES
          </text>
          <text x="140" y="95" fill={'currentColor'} fontWeight={fontWeight} fontSize={textFontSize}>
              PROTECTED
          </text>
          <div
              x="132"
              y="86"
              dominantBaseline="middle"
              textAnchor="end"
              fontSize={fontsizeMapB}
              fontWeight={fontWeight}
              stroke={'currentColor'}
              fill={'currentColor'}
              id="counter"
              class="counter"
          >0</div>
      </svg>`;
}
function countUp(treesToAdd, currentTrees, incrementBy, incrementSpeed) {
  const finalSum = treesToAdd + currentTrees;
  const interval = setInterval(() => {
    counter.innerHTML = currentTrees;
    currentTrees += incrementBy;
    if (currentTrees >= finalSum) {
      clearInterval(interval);
      counter.innerHTML = treesToAdd + currentTrees;
    }
  }, incrementSpeed);
}

async function stats(merchantId, treesToAdd, incrementBy, incrementSpeed) {
  insertSVG();
  console.log("1. counter", counter);
  waitForElement(counter).then(() => {
    console.log("3. counter", counter);
    fetch(`https://staging-api.onetribeglobal.com/direct/stats/${merchantId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.dir(json.stats.trees);
        const trees = json.stats.trees;
        countUp(treesToAdd, trees, incrementBy, incrementSpeed);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  });

  // if (counter) {
  //   console.log("2. counter", counter);
  //   fetch(
  //     `https://staging-api.onetribeglobal.com/direct/stats/${merchantId}`
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (json) {
  //       console.dir(json.stats.trees);
  //       const trees = json.stats.trees;
  //       countUp(treesToAdd, trees, incrementBy, incrementSpeed);
  //     })
  //     .catch(function (error) {
  //       console.log("Error: " + error);
  //     });
  // }
}
