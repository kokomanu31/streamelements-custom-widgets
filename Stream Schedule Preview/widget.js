let words = "", wordsSpliced

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

window.addEventListener('onEventReceived', obj => {
  const { listener, event } = obj.detail;
  if (listener === 'message' && (event.data.tags.mod === "1" || event.data.tags["display-name"] === "BnRProject")) {
    let isFound = false;
  	for (let i = 0; i < wordsSpliced.length && !isFound; i++) {
      if (event.data.text.startsWith(wordsSpliced[i]))
        isFound = true;
    }
  	if (isFound) {
      $(".sundayCard").fadeIn(500).delay(16_000).fadeOut(500);
      $(".thursdayCard").delay(500).fadeIn(500).delay(15_500).fadeOut(500);
  	  $(".fridayCard").delay(1000).fadeIn(500).delay(15_000).fadeOut(500);
    }
  }
});

window.addEventListener('onWidgetLoad', obj => {
  words = "{{words}}";
  wordsSpliced = words.split(", ");  
});