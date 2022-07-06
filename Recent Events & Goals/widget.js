let fieldData, sessionData, nbPerEvent = {eventsLimit}, events = [], currentEvent = 0;
//console.log("chosen events:", events);

function getRandomNames() {
  let previewNames = ["thing_1", "thing_2", "thing_3", "thing_4", "thing_5", "vip_1", "vip_2", "vip_3", "vip_4", "vip_5", "sub_1", "sub_2", "sub_3", "sub_4", "sub_5", "mod_1", "mod_2", "mod_3", "mod_4", "mod_5", "thing_one", "thing_two", "thing_three", "thing_four", "thing_five", "vip_one", "vip_two", "vip_three", "vip_four", "vip_five", "sub_one", "sub_two", "sub_three", "sub_four", "sub_five", "mod_one", "mod_two", "mod_three", "mod_four", "mod_five"];
  subNames = [];
  for (let i = 0; i < nbPerEvent; i++) {
    subNames.push({"name": previewNames[Math.floor(Math.random() * previewNames.length)]});
  }
  return subNames;
}

function getRandomNamesAndAmounts() {
  names = getRandomNames();
  let previewAmounts = [1, 22, 31, 4, 53, 619, 777, 84, 9, 10];
  for (let i = 0; i < names.length; i++) {
    names[i] = {"name": names[i].name, "amount": previewAmounts[Math.floor(Math.random() * previewAmounts.length)]};
  }
  return names;
}

function fillFollowers(followerData) {
  followers = followerData.slice(0, nbPerEvent);
  followerTemplate = '{followerEventText}';
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
  subscriberTemplate = '{subscriberEventText}';
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

function fillCheers(cheerData) {
  cheers = cheerData.slice(0, nbPerEvent);
  cheerTemplate = '{cheerEventText}';
  text = '';
  for (var i = 0; i < cheers.length; i++) {
  	if (i < cheers.length - 1)
      text = text.concat(cheerTemplate.replace('{name}', cheers[i].name).replace('{amount}', cheers[i].amount)).concat('   ');
    else
      text = text.concat(cheerTemplate.replace('{name}', cheers[i].name).replace('{amount}', cheers[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-cheers-text')[0].textContent = text;
  if ({cheerEnableScroll} === true) {
    $('#recent-cheers-text').addClass('scroll');
  } else {
    $('#recent-cheers-text').removeClass('scroll');
  }
}

function fillTips(tipData) {
  tips = tipData.slice(0, nbPerEvent);
  tipTemplate = '{tipEventText}';
  text = '';
  for (var i = 0; i < tips.length; i++) {
  	if (i < tips.length - 1)
      text = text.concat(tipTemplate.replace('{name}', tips[i].name).replace('{amount}', tips[i].amount)).concat('   ');
    else
      text = text.concat(tipTemplate.replace('{name}', tips[i].name).replace('{amount}', tips[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-tips-text')[0].textContent = text;
  if ({tipEnableScroll} === true) {
    $('#recent-tips-text').addClass('scroll');
  } else {
    $('#recent-tips-text').removeClass('scroll');
  }
}

function fillRaids(raidData) {
  raids = raidData.slice(0, nbPerEvent);
  raidTemplate = '{raidEventText}';
  text = '';
  for (var i = 0; i < raids.length; i++) {
  	if (i < raids.length - 1)
      text = text.concat(raidTemplate.replace('{name}', raids[i].name).replace('{amount}', raids[i].amount)).concat('   ');
    else
      text = text.concat(raidTemplate.replace('{name}', raids[i].name).replace('{amount}', raids[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-raids-text')[0].textContent = text;
  if ({raidEnableScroll} === true) {
    $('#recent-raids-text').addClass('scroll');
  } else {
    $('#recent-raids-text').removeClass('scroll');
  }
}

function fillFollowerGoal(followerCount) {
  followerGoalTemplate = '{followerGoalText}';
  text = followerGoalTemplate.replace('{count}', followerCount);
  $('#follower-goal-text')[0].textContent = text;
}

function fillSubscriberGoal(subscriberCount) {
  subscriberGoalTemplate = '{subscriberGoalText}';
  text = subscriberGoalTemplate.replace('{count}', subscriberCount);
  $('#subscriber-goal-text')[0].textContent = text;
}

function fillTipGoal(tipCount) {
  tipGoalTemplate = '{tipGoalText}';
  text = tipGoalTemplate.replace('{count}', tipCount);
  $('#tip-goal-text')[0].textContent = text;
}

function fillCheerGoal(cheerCount) {
  cheerGoalTemplate = '{cheerGoalText}';
  text = cheerGoalTemplate.replace('{count}', cheerCount);
  $('#cheer-goal-text')[0].textContent = text;
}

function loop() {
  if (events.length === 1)
    return;
  
  nextEvent = 0;
  if (currentEvent < events.length - 1)
    nextEvent = currentEvent + 1;
  nextEventName = events[nextEvent];
  
  //console.log("currentEvent : ", events[currentEvent]);
  //console.log("nextEvent : ", nextEventName);
  
  if (events[currentEvent] === "recent-followers")
    fadeOutElement = $("#recent-followers");
  else if (nextEventName === "recent-followers")
    fadeInElement = $("#recent-followers");
  
  if (events[currentEvent] === "recent-subscribers")
    fadeOutElement = $("#recent-subscribers");
  else if (nextEventName === "recent-subscribers")
    fadeInElement = $("#recent-subscribers");
    
  if (events[currentEvent] === "recent-cheers")
    fadeOutElement = $("#recent-cheers");
  else if (nextEventName === "recent-cheers")
    fadeInElement = $("#recent-cheers");
  
  if (events[currentEvent] === "recent-tips")
    fadeOutElement = $("#recent-tips");
  else if (nextEventName === "recent-tips")
    fadeInElement = $("#recent-tips");
  
  if (events[currentEvent] === "recent-raids")
    fadeOutElement = $("#recent-raids");
  else if (nextEventName === "recent-raids")
    fadeInElement = $("#recent-raids");
  
  if (events[currentEvent] === "follower-goal")
    fadeOutElement = $("#follower-goal");
  else if (nextEventName === "follower-goal")
    fadeInElement = $("#follower-goal");
  
  if (events[currentEvent] === "subscriber-goal")
    fadeOutElement = $("#subscriber-goal");
  else if (nextEventName === "subscriber-goal")
    fadeInElement = $("#subscriber-goal");
  
  if (events[currentEvent] === "tip-goal")
    fadeOutElement = $("#tip-goal");
  else if (nextEventName === "tip-goal")
    fadeInElement = $("#tip-goal");

  if (events[currentEvent] === "cheer-goal")
    fadeOutElement = $("#cheer-goal");
  else if (nextEventName === "cheer-goal")
    fadeInElement = $("#cheer-goal");
  
  currentEvent = nextEvent;
  
  fadeOutElement.fadeOut('slow', function() {
    fadeInElement.fadeIn('slow');
  });
}

window.addEventListener('onWidgetLoad', (obj) => {
  // console.log('sessionData has been created!', obj.detail.session);
  
  if ({enableRecentFollowers}) {
  	events.push("recent-followers");
    $("#recent-followers").removeClass('hidden');
    if ({enablePreview} === true) {
      fillFollowers(getRandomNames());
    } else {
      fillFollowers(obj.detail.session.data["follower-recent"]);
    }
  }
  
  if ({enableRecentSubs}) {
    events.push("recent-subscribers");
    $("#recent-subscribers").removeClass('hidden');
    if ({enablePreview} === true) {
      fillSubscribers(getRandomNamesAndAmounts());
    } else {
      fillSubscribers(obj.detail.session.data["subscriber-recent"]);
    }
  }
  
  if ({enableRecentCheers}) {
  	events.push("recent-cheers");
    $("#recent-cheers").removeClass('hidden');
    if ({enablePreview} === true) {
      fillCheers(getRandomNamesAndAmounts());
    } else {
      fillCheers(obj.detail.session.data["cheer-recent"]);
    }
  }
  
  if ({enableRecentTips}) {
  	events.push("recent-tips");
    $("#recent-tips").removeClass('hidden');
    if ({enablePreview} === true) {
      fillTips(getRandomNamesAndAmounts());
    } else {
      fillTips(obj.detail.session.data["tip-recent"]);
    }
  }
  
  if ({enableRecentRaids}) {
  	events.push("recent-raids");
    $("#recent-raids").removeClass('hidden');
    if ({enablePreview} === true) {
      fillRaids(getRandomNamesAndAmounts());
    } else {
      fillRaids(obj.detail.session.data["raid-recent"]);
    }
  }
  
  if ({enableFollowerGoal}) {
  	events.push("follower-goal");
    $("#follower-goal").removeClass('hidden');
    followerCountType = '{followerTypeDrowpdown}';
    if (followerCountType === "total")
      fillFollowerGoal(obj.detail.session.data["follower-total"].count);
    else if (followerCountType === "goal")
      fillFollowerGoal(obj.detail.session.data["follower-goal"].amount);
    else if (followerCountType === "session")
      fillFollowerGoal(obj.detail.session.data["follower-session"].count);
    else if (followerCountType === "weekly")
      fillFollowerGoal(obj.detail.session.data["follower-week"].count);
    else
      fillFollowerGoal(obj.detail.session.data["follower-month"].count);
  }
  
  if ({enableSubscriberGoal}) {
  	events.push("subscriber-goal");
    $("#subscriber-goal").removeClass('hidden');
    subscriberCountType = '{subscriberTypeDrowpdown}';
    if (subscriberCountType === "total")
      fillSubscriberGoal(obj.detail.session.data["subscriber-total"].count);
    else if (subscriberCountType === "goal")
      fillSubscriberGoal(obj.detail.session.data["subscriber-goal"].amount);
    else if (subscriberCountType === "session")
      fillSubscriberGoal(obj.detail.session.data["subscriber-session"].count);
    else if (subscriberCountType === "weekly")
      fillSubscriberGoal(obj.detail.session.data["subscriber-week"].count);
    else
      fillSubscriberGoal(obj.detail.session.data["subscriber-month"].count);
  }
  
  if ({enableTipGoal}) {
  	events.push("tip-goal");
    $("#tip-goal").removeClass('hidden');
    tipCountType = '{tipTypeDrowpdown}';
    if (tipCountType === "total")
      fillTipGoal(obj.detail.session.data["tip-total"].amount);
    else if (tipCountType === "goal")
      fillTipGoal(obj.detail.session.data["tip-goal"].amount);
    else if (tipCountType === "session")
      fillTipGoal(obj.detail.session.data["tip-session"].amount);
    else if (tipCountType === "weekly")
      fillTipGoal(obj.detail.session.data["tip-week"].amount);
    else
      fillTipGoal(obj.detail.session.data["tip-month"].amount);
  }

  if ({enableCheerGoal}) {
  	events.push("cheer-goal");
    $("#cheer-goal").removeClass('hidden');
    cheerCountType = '{cheerTypeDrowpdown}';
    if (cheerCountType === "total")
      fillCheerGoal(obj.detail.session.data["cheer-total"].amount);
    else if (cheerCountType === "goal")
      fillCheerGoal(obj.detail.session.data["cheer-goal"].amount);
    else if (cheerCountType === "session")
      fillCheerGoal(obj.detail.session.data["cheer-session"].amount);
    else if (cheerCountType === "weekly")
      fillCheerGoal(obj.detail.session.data["cheer-week"].amount);
    else
      fillCheerGoal(obj.detail.session.data["cheer-month"].amount);
  }
  
  setInterval(loop, {eventsTime} * 1000);
});

window.addEventListener('onSessionUpdate', (obj) => {
  console.log('sessionData has been updated', obj.detail.session);
  if ({enableRecentFollowers})
  	fillFollowers(obj.detail.session.data["follower-recent"]);
    
  if ({enableRecentSubs})
    fillSubscribers(obj.detail.session.data["subscriber-recent"]);
  
  if ({enableRecentCheers})
    fillCheers(obj.detail.session.data["cheers-recent"]);
  
  if ({enableRecentTips})
    fillTips(obj.detail.session.data["tip-recent"]);
  
  if ({enableRecentRaids})
    fillRaids(obj.detail.session.data["raid-recent"]);
  
  if ({enableFollowerGoal}) {
    followerCountType = '{followerTypeDrowpdown}';
    if (followerCountType === "total")
      fillFollowerGoal(obj.detail.session.data["follower-total"].count);
    else if (followerCountType === "goal")
      fillFollowerGoal(obj.detail.session.data["follower-goal"].amount);
    else if (followerCountType === "session")
      fillFollowerGoal(obj.detail.session.data["follower-session"].count);
    else if (followerCountType === "weekly")
      fillFollowerGoal(obj.detail.session.data["follower-week"].count);
    else
      fillFollowerGoal(obj.detail.session.data["follower-month"].count);
  }
  
  if ({enableSubscriberGoal}) {
    subscriberCountType = '{subscriberTypeDrowpdown}';
    if (subscriberCountType === "total")
      fillSubscriberGoal(obj.detail.session.data["subscriber-total"].count);
    else if (subscriberCountType === "goal")
      fillSubscriberGoal(obj.detail.session.data["subscriber-goal"].amount);
    else if (subscriberCountType === "session")
      fillSubscriberGoal(obj.detail.session.data["subscriber-session"].count);
    else if (subscriberCountType === "weekly")
      fillSubscriberGoal(obj.detail.session.data["subscriber-week"].count);
    else
      fillSubscriberGoal(obj.detail.session.data["subscriber-month"].count);
  }
  
  if ({enableTipGoal}) {
    tipCountType = '{tipTypeDrowpdown}';
    if (tipCountType === "total")
      fillTipGoal(obj.detail.session.data["tip-total"].amount);
    else if (tipCountType === "goal")
      fillTipGoal(obj.detail.session.data["tip-goal"].amount);
    else if (tipCountType === "session")
      fillTipGoal(obj.detail.session.data["tip-session"].amount);
    else if (tipCountType === "weekly")
      fillTipGoal(obj.detail.session.data["tip-week"].amount);
    else
      fillTipGoal(obj.detail.session.data["tip-month"].amount);
  }

  if ({enableCheerGoal}) {
    cheerCountType = '{cheerTypeDrowpdown}';
    if (cheerCountType === "total")
      fillCheerGoal(obj.detail.session.data["cheer-total"].amount);
    else if (cheerCountType === "goal")
      fillCheerGoal(obj.detail.session.data["cheer-goal"].amount);
    else if (cheerCountType === "session")
      fillCheerGoal(obj.detail.session.data["cheer-session"].amount);
    else if (cheerCountType === "weekly")
      fillCheerGoal(obj.detail.session.data["cheer-week"].amount);
    else
      fillCheerGoal(obj.detail.session.data["cheer-month"].amount);
  }
});