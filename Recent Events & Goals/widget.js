let fieldData, sessionData, nbPerEvent = {eventsLimit}, events = [], currentEvent = 0;

function fillFollowers(followerData) {
  followers = followerData.slice(0, nbPerEvent);
  followerTemplate = `{followerEventText}`;
  text = '';
  for (var i = 0; i < followers.length; i++) {
  	if (i < followers.length - 1)
      text = text.concat(followerTemplate.replace('{name}', followers[i].name)).concat('   ');
    else
      text = text.concat(followerTemplate.replace('{name}', followers[i].name).replace(',', '')).concat('   ');
  }
  $('#recent-followers-text')[0].textContent = text;
  if ({followerEnableScroll} === true) {
   $('#recent-followers-text').addClass('scroll');
  } else {
    $('#recent-followers-text').removeClass('scroll');
  }
}

function fillSubscribers(subscriberData) {
  subscribers = subscriberData.slice(0, nbPerEvent);
  subscriberTemplate = `{subscriberEventText}`;
  text = '';
  for (var i = 0; i < subscribers.length; i++) {
  	if (i < subscribers.length - 1)
      text = text.concat(subscriberTemplate.replace('{name}', subscribers[i].name).replace('{amount}', subscribers[i].amount)).concat('   ');
    else
      text = text.concat(subscriberTemplate.replace('{name}', subscribers[i].name).replace('{amount}', subscribers[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-subscribers-text')[0].textContent = text;
  if ({subscriberEnableScroll} === true) {
    $('#recent-subscribers-text').addClass('scroll');
  } else {
    $('#recent-subscribers-text').removeClass('scroll');
  }
}

function loop() {
  if (events.length === 0)
    return;
  
  nextEvent = 0;
  if (currentEvent < events.length - 1)
    nextEvent = currentEvent + 1;
  nextEventName = events[nextEvent];
  
  if (events[currentEvent] === "recent-followers") {
    fadeOutElement = $("#recent-followers");
  } else if (nextEventName === "recent-followers") {
    fadeInElement = $("#recent-followers");
  }
  
  if (events[currentEvent] === "recent-subscribers") {
    fadeOutElement = $("#recent-subscribers");
  } else if (nextEventName === "recent-subscribers") {
    fadeInElement = $("#recent-subscribers");
  }
  
  currentEvent = nextEvent;
  console.log('switching...');
  
  fadeOutElement.fadeOut('slow', function() {
    fadeInElement.fadeIn('slow');
  });
}

window.addEventListener('onWidgetLoad', (obj) => {
  console.log('sessionData has been created!', obj.detail.session);
    
  if ({enableRecentFollowers}) {
  	events.push("recent-followers");  
  	fillFollowers(obj.detail.session.data["follower-recent"]);
  }
  
  if ({enableRecentSubs}) {
    events.push("recent-subscribers");
    fillSubscribers(obj.detail.session.data["subscriber-recent"]);
  }
  
  setInterval(loop, 10_000);
});

window.addEventListener('onSessionUpdate', (obj) => {
  console.log('sessionData has been updated', obj.detail.session);
  if ({enableRecentFollowers})
  	fillFollowers(obj.detail.session.data["follower-recent"]);
  
  if ({enableRecentSubs})
    fillSubscribers(obj.detail.session.data["subscriber-recent"]);
});