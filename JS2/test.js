var fsm = new StateMachine({
  init: 'kill',
  transitions: [
  {name: 'kill', from: 'killer', to: 'ghost'},
  {name: 'testament', from: 'ghost', to: 'statement'},
  {name: 'voting', from:'statement', to: 'vote'},
  {name: 'dead', from: 'vote', to: 'killer'}
  ],
  methods: {
    onKill: function(){},
    onTestament: function(){},
    onVoting: function(){},
    onDead: function(){}
  }
});
