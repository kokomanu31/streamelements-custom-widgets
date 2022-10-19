let events = [], eventsTime = [], currentEvent = 0;

function getRandomNames(nbNames) {
  let previewNames = ["thing_1", "thing_2", "thing_3", "thing_4", "thing_5", "vip_1", "vip_2", "vip_3", "vip_4", "vip_5", "sub_1", "sub_2", "sub_3", "sub_4", "sub_5", "mod_1", "mod_2", "mod_3", "mod_4", "mod_5", "thing_one", "thing_two", "thing_three", "thing_four", "thing_five", "vip_one", "vip_two", "vip_three", "vip_four", "vip_five", "sub_one", "sub_two", "sub_three", "sub_four", "sub_five", "mod_one", "mod_two", "mod_three", "mod_four", "mod_five"];
  let subNames = [];
  for (let i = 0; i < nbNames; i++) {
    subNames.push({"name": previewNames[Math.floor(Math.random() * previewNames.length)]});
  }
  return subNames;
}

function getRandomNamesAndAmounts(nbNames) {
  let names = getRandomNames(nbNames);
  let previewAmounts = [1, 22, 31, 4, 53, 619, 777, 84, 9, 10];
  for (let i = 0; i < names.length; i++) {
    names[i] = {"name": names[i].name, "amount": previewAmounts[Math.floor(Math.random() * previewAmounts.length)]};
  }
  return names;
}

function fillFollowers(followerData) {
  let followers = followerData.slice(0, {recentFollowerNameLimit});
  let followerTemplate = '{followerEventText}';
  let text = '';
  for (var i = 0; i < followers.length; i++) {
  	if (i < followers.length - 1)
      text = text.concat(followerTemplate.replace('{name}', followers[i].name)).concat('   ');
    else
      text = text.concat(followerTemplate.replace('{name}', followers[i].name).replace(',', '')).concat('   ');
  }
  $('#recent-followers-text')[0].textContent = text;
  if ({followerEnableScroll}) {
    $('#recent-followers-text').addClass('scroll-follower');
  } else {
    $('#recent-followers-text').removeClass('scroll-follower');
  }
}

function fillSubscribers(subscriberData) {
  let subscribers = [];
  if ({subscriberCondensed}) {
    let currentSubscriber = 0, i = -1;
  	while (subscribers.length < {recentSubscriberNameLimit} && currentSubscriber < subscriberData.length - 1) {
      i = subscribers.findIndex(subscriber => subscriber.name === subscriberData[currentSubscriber]["name"]);
      if (i === -1) {
		subscribers.push(subscriberData[currentSubscriber]);
      }
      currentSubscriber++;
    }
  } else {
  	subscribers = subscriberData.slice(0, {recentSubscriberNameLimit});
  }
  
  let subscriberTemplate = '{subscriberEventText}';
  let text = '';
  for (var i = 0; i < subscribers.length; i++) {
  	if (i < subscribers.length - 1)
      text = text.concat(subscriberTemplate.replace('{name}', subscribers[i].name).replace('{amount}', subscribers[i].amount)).concat('   ');
    else
      text = text.concat(subscriberTemplate.replace('{name}', subscribers[i].name).replace('{amount}', subscribers[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-subscribers-text')[0].textContent = text;
  if ({subscriberEnableScroll}) {
    $('#recent-subscribers-text').addClass('scroll-subscriber');
  } else {
    $('#recent-subscribers-text').removeClass('scroll-subscriber');
  }
}

function fillCheers(cheerData) {
  let cheers = [];
  if ({cheerCondensed}) {
    let currentCheer = 0, i = -1;
  	while (cheers.length < {recentCheerNameLimit} && currentCheer < cheerData.length - 1) {
      i = cheers.findIndex(cheerer => cheerer.name === cheerData[currentCheer]["name"]);
      if (i > -1) {
      	cheers[i]["amount"] += cheerData[currentCheer]["amount"];
      } else {
      	cheers.push(cheerData[currentCheer]);
      }
      currentCheer++;
    }
  } else {
  	cheers = cheerData.slice(0, {recentCheerNameLimit});
  }
  
  let cheerTemplate = '{cheerEventText}';
  let text = '';
  for (var i = 0; i < cheers.length; i++) {
  	if (i < cheers.length - 1)
      text = text.concat(cheerTemplate.replace('{name}', cheers[i].name).replace('{amount}', cheers[i].amount)).concat('   ');
    else
      text = text.concat(cheerTemplate.replace('{name}', cheers[i].name).replace('{amount}', cheers[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-cheers-text')[0].textContent = text;
  if ({cheerEnableScroll}) {
    $('#recent-cheers-text').addClass('scroll-cheer');
  } else {
    $('#recent-cheers-text').removeClass('scroll-cheer');
  }
}

function fillTips(tipData) {
  let tips = [];
  if ({tipCondensed}) {
    let currentTip = 0, i = -1;
  	while (tips.length < {recentTipNameLimit} && currentTip < tipData.length - 1) {
      i = tips.findIndex(tiper => tiper.name === tipData[currentTip]["name"]);
      if (i > -1) {
      	tips[i]["amount"] += tipData[currentTip]["amount"];
      } else {
      	tips.push(tipData[currentTip]);
      }
      currentTip++;
    }
  } else {
  	tips = tipData.slice(0, {recentTipNameLimit});
  }
  
  let tipTemplate = '{tipEventText}';
  let text = '';
  for (var i = 0; i < tips.length; i++) {
  	if (i < tips.length - 1)
      text = text.concat(tipTemplate.replace('{name}', tips[i].name).replace('{amount}', tips[i].amount)).concat('   ');
    else
      text = text.concat(tipTemplate.replace('{name}', tips[i].name).replace('{amount}', tips[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-tips-text')[0].textContent = text;
  if ({tipEnableScroll}) {
    $('#recent-tips-text').addClass('scroll-tip');
  } else {
    $('#recent-tips-text').removeClass('scroll-tip');
  }
}

function fillRaids(raidData) {
  let raids = [];
  if ({raidCondensed}) {
    let currentRaid = 0, i = -1;
  	while (raids.length < {recentRaidNameLimit} && currentRaid < raidData.length - 1) {
      i = raids.findIndex(raider => raider.name === raidData[currentRaid]["name"]);
      if (i === -1) {
      	raids.push(raidData[currentRaid]);
      }
      currentRaid++;
    }
  } else {
  	raids = raidData.slice(0, {recentRaidNameLimit});
  }
  
  let raidTemplate = '{raidEventText}';
  let text = '';
  for (var i = 0; i < raids.length; i++) {
  	if (i < raids.length - 1)
      text = text.concat(raidTemplate.replace('{name}', raids[i].name).replace('{amount}', raids[i].amount)).concat('   ');
    else
      text = text.concat(raidTemplate.replace('{name}', raids[i].name).replace('{amount}', raids[i].amount).replace(',', '')).concat('   ');
  }
  $('#recent-raids-text')[0].textContent = text;
  if ({raidEnableScroll}) {
    $('#recent-raids-text').addClass('scroll-raid');
  } else {
    $('#recent-raids-text').removeClass('scroll-raid');
  }
}

function fillFollowerGoal(followerCount) {
  let followerGoalTemplate = '{followerGoalText}';
  let text = followerGoalTemplate.replace('{count}', followerCount);
  $('#follower-goal-text')[0].textContent = text;
}

function fillSubscriberGoal(subscriberCount) {
  let subscriberGoalTemplate = '{subscriberGoalText}';
  let text = subscriberGoalTemplate.replace('{count}', subscriberCount);
  $('#subscriber-goal-text')[0].textContent = text;
}

function fillCheerGoal(cheerCount) {
  let cheerGoalTemplate = '{cheerGoalText}';
  let text = cheerGoalTemplate.replace('{count}', cheerCount);
  $('#cheer-goal-text')[0].textContent = text;
}

function fillTipGoal(tipCount) {
  let tipGoalTemplate = '{tipGoalText}';
  let text = tipGoalTemplate.replace('{count}', tipCount);
  $('#tip-goal-text')[0].textContent = text;
}

function loop() {
  if (events.length === 1)
    return;
  
  let nextEvent = 0;
  if (currentEvent < events.length - 1)
    nextEvent = currentEvent + 1;
  let nextEventName = events[nextEvent];

  let fadeInElement, fadeOutElement;

  switch (events[currentEvent]) {
    case "recent-followers-title":
      fadeOutElement = $("#recent-followers-title");
      break;
      
    case "recent-followers":
      fadeOutElement = $("#recent-followers-text");
      break;
      
    case "recent-subscribers-title":
      fadeOutElement = $("#recent-subscribers-title");
      break;
      
    case "recent-subscribers":
      fadeOutElement = $("#recent-subscribers-text");
      break;
      
    case "recent-cheers-title":
      fadeOutElement = $("#recent-cheers-title");
      break;
      
    case "recent-cheers":
      fadeOutElement = $("#recent-cheers-text");
      break;
      
    case "recent-tips-title":
      fadeOutElement = $("#recent-tips-title");
      break;
      
    case "recent-tips":
      fadeOutElement = $("#recent-tips-text");
      break;
      
    case "recent-raids-title":
      fadeOutElement = $("#recent-raids-title");
      break;
      
    case "recent-raids":
      fadeOutElement = $("#recent-raids-text");
      break;
      
    case "follower-goal":
      fadeOutElement = $("#follower-goal");
      break;
      
    case "subscriber-goal":
      fadeOutElement = $("#subscriber-goal");
      break;
      
    case "cheer-goal":
      fadeOutElement = $("#cheer-goal");
      break;
      
    case "tip-goal":
      fadeOutElement = $("#tip-goal");
      break;
  }

  switch (nextEventName) {
    case "recent-followers-title":
      fadeInElement = $("#recent-followers-title");
      break;
      
    case "recent-followers":
      fadeInElement = $("#recent-followers-text");
      break;
      
    case "recent-subscribers-title":
      fadeInElement = $("#recent-subscribers-title");
      break;
      
    case "recent-subscribers":
      fadeInElement = $("#recent-subscribers-text");
      break;
      
    case "recent-cheers-title":
      fadeInElement = $("#recent-cheers-title");
      break;
      
    case "recent-cheers":
      fadeInElement = $("#recent-cheers-text");
      break;
      
    case "recent-tips-title":
      fadeInElement = $("#recent-tips-title");
      break;
      
    case "recent-tips":
      fadeInElement = $("#recent-tips-text");
      break;
      
    case "recent-raids-title":
      fadeInElement = $("#recent-raids-title");
      break;
      
    case "recent-raids":
      fadeInElement = $("#recent-raids-text");
      break;
      
    case "follower-goal":
      fadeInElement = $("#follower-goal");
      break;
      
    case "subscriber-goal":
      fadeInElement = $("#subscriber-goal");
      break;
      
    case "cheer-goal":
      fadeInElement = $("#cheer-goal");
      break;
      
    case "tip-goal":
      fadeInElement = $("#tip-goal");
      break;
  }
  
  currentEvent = nextEvent;
  
  fadeOutElement.fadeOut('slow', function() {
    fadeInElement.fadeIn('slow');
  });

  setTimeout(loop, eventsTime[currentEvent] * 1000);
}

window.addEventListener('onWidgetLoad', (obj) => {
  const data = obj.detail.session.data;
  if ({enableRecentFollowers}) {
    events.push("recent-followers-title");
    eventsTime.push({eventsTitleTime});
  	events.push("recent-followers");
    eventsTime.push({recentFollowerTime});
    
    if ({enablePreview})
      fillFollowers(getRandomNames({recentFollowerNameLimit}));
    else
      fillFollowers(data["follower-recent"]);
  }
  
  if ({enableRecentSubs}) {
    events.push("recent-subscribers-title");
    eventsTime.push({eventsTitleTime});
  	events.push("recent-subscribers");
    eventsTime.push({recentSubscriberTime});
    
    if ({enablePreview})
      fillSubscribers(getRandomNamesAndAmounts({recentSubscriberNameLimit}));
    else
      fillSubscribers(data["subscriber-recent"]);
  }
  
  if ({enableRecentCheers}) {
    events.push("recent-cheers-title");
    eventsTime.push({eventsTitleTime});
  	events.push("recent-cheers");
    eventsTime.push({recentCheerTime});
    
    if ({enablePreview})
      fillCheers(getRandomNamesAndAmounts({recentCheerNameLimit}));
    else
      fillCheers(data["cheer-recent"]);
  }
  
  if ({enableRecentTips}) {
    events.push("recent-tips-title");
    eventsTime.push({eventsTitleTime});
  	events.push("recent-tips");
    eventsTime.push({recentTipTime});
    
    if ({enablePreview})
      fillTips(getRandomNamesAndAmounts({recentTipNameLimit}));
    else
      fillTips(data["tip-recent"]);
  }
  
  if ({enableRecentRaids}) {
    events.push("recent-raids-title");
    eventsTime.push({eventsTitleTime});
  	events.push("recent-raids");
    eventsTime.push({recentRaidTime});
    
    if ({enablePreview})
      fillRaids(getRandomNamesAndAmounts({recentRaidNameLimit}));
    else
      fillRaids(data["raid-recent"]);
  }
  
  if ({enableFollowerGoal}) {
  	events.push("follower-goal");
    eventsTime.push({followerGoalTime});
    followerCountType = '{followerTypeDrowpdown}';
    if (followerCountType === "total")
      fillFollowerGoal(data["follower-total"]["count"]);
    else if (followerCountType === "goal")
      fillFollowerGoal(data["follower-goal"]["amount"]);
    else if (followerCountType === "weekly")
      fillFollowerGoal(data["follower-week"]["count"]);
    else
      fillFollowerGoal(data["follower-month"]["count"]);
  }
  
  if ({enableSubscriberGoal}) {
  	events.push("subscriber-goal");
    eventsTime.push({subscriberGoalTime});
    subscriberCountType = '{subscriberTypeDrowpdown}';
    if (subscriberCountType === "total")
      fillSubscriberGoal(data["subscriber-total"]["count"]);
    else if (subscriberCountType === "goal")
      fillSubscriberGoal(data["subscriber-goal"]["amount"]);
    else if (subscriberCountType === "weekly")
      fillSubscriberGoal(data["subscriber-week"]["count"]);
    else
      fillSubscriberGoal(data["subscriber-month"]["count"]);
  }
  
  if ({enableCheerGoal}) {
  	events.push("cheer-goal");
    eventsTime.push({cheerGoalTime});
    cheerCountType = '{cheerTypeDrowpdown}';
    if (cheerCountType === "total")
      fillCheerGoal(data["cheer-total"]["amount"]);
    else if (cheerCountType === "goal")
      fillCheerGoal(data["cheer-goal"]["amount"]);
    else if (cheerCountType === "weekly")
      fillCheerGoal(data["cheer-week"]["amount"]);
    else
      fillCheerGoal(data["cheer-month"]["amount"]);
  }
  
  if ({enableTipGoal}) {
  	events.push("tip-goal");
    eventsTime.push({tipGoalTime});
    tipCountType = '{tipTypeDrowpdown}';
    if (tipCountType === "total")
      fillTipGoal(data["tip-total"]["amount"]);
    else if (tipCountType === "goal")
      fillTipGoal(data["tip-goal"]["amount"]);
    else if (tipCountType === "weekly")
      fillTipGoal(data["tip-week"]["amount"]);
    else
      fillTipGoal(data["tip-month"]["amount"]);
  }
  
  currentEvent = events.length - 1;
  setTimeout(loop, 1);
});

window.addEventListener('onSessionUpdate', (obj) => {
  const data = obj.detail.session;
  
  if ({enableRecentFollowers}) {
    if ({enablePreview})
      fillFollowers(getRandomNames({recentFollowerNameLimit}));
    else
      fillFollowers(data["follower-recent"]);
  }
  
  if ({enableRecentSubs}) {
    if ({enablePreview})
      fillSubscribers(getRandomNamesAndAmounts({recentSubscriberNameLimit}));
    else
      fillSubscribers(data["subscriber-recent"]);
  }
  
  if ({enableRecentCheers}) {    
    if ({enablePreview})
      fillCheers(getRandomNamesAndAmounts({recentCheerNameLimit}));
    else
      fillCheers(data["cheer-recent"]);
  }
  
  if ({enableRecentTips}) {    
    if ({enablePreview})
      fillTips(getRandomNamesAndAmounts({recentTipNameLimit}));
    else
      fillTips(data["tip-recent"]);
  }
  
  if ({enableRecentRaids}) {    
    if ({enablePreview})
      fillRaids(getRandomNamesAndAmounts({recentRaidNameLimit}));
    else
      fillRaids(data["raid-recent"]);
  }
  
  if ({enableFollowerGoal}) {
    let followerCountType = '{followerTypeDrowpdown}';
    if (followerCountType === "total")
      fillFollowerGoal(data["follower-total"].count);
    else if (followerCountType === "goal")
      fillFollowerGoal(data["follower-goal"].amount);
    else if (followerCountType === "weekly")
      fillFollowerGoal(data["follower-week"].count);
    else
      fillFollowerGoal(data["follower-month"].count);
  }
  
  if ({enableSubscriberGoal}) {
    let subscriberCountType = '{subscriberTypeDrowpdown}';
    if (subscriberCountType === "total")
      fillSubscriberGoal(data["subscriber-total"].count);
    else if (subscriberCountType === "goal")
      fillSubscriberGoal(data["subscriber-goal"].amount);
    else if (subscriberCountType === "weekly")
      fillSubscriberGoal(data["subscriber-week"].count);
    else
      fillSubscriberGoal(data["subscriber-month"].count);
  }
  
  if ({enableCheerGoal}) {
    let cheerCountType = '{cheerTypeDrowpdown}';
    if (cheerCountType === "total")
      fillCheerGoal(data["cheer-total"]["amount"]);
    else if (cheerCountType === "goal")
      fillCheerGoal(data["cheer-goal"]["amount"]);
    else if (cheerCountType === "weekly")
      fillCheerGoal(data["cheer-week"]["amount"]);
    else
      fillCheerGoal(data["cheer-month"]["amount"]);
  }
  
  if ({enableTipGoal}) {
    let tipCountType = '{tipTypeDrowpdown}';
    if (tipCountType === "total")
      fillTipGoal(data["tip-total"]["amount"]);
    else if (tipCountType === "goal")
      fillTipGoal(data["tip-goal"]["amount"]);
    else if (tipCountType === "weekly")
      fillTipGoal(data["tip-week"]["amount"]);
    else
      fillTipGoal(data["tip-month"]["amount"]);
  }
});