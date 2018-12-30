(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,n){n("dHOs"),t.exports=n("uNSz")},1:function(t,e){},dHOs:function(t,e,n){"use strict";n.r(e);var o=n("XuX8"),a=n.n(o),i=n("gFX4"),s=n.n(i);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.socket=s()(),this.auth=window.localStorage.getItem("auth")}var e,n,o;return e=t,(n=[{key:"on",value:function(t,e){return this.socket.on(t,function(){for(var n,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];(n=console).info.apply(n,["event",t].concat(a)),e.apply(void 0,a)}),this}},{key:"emit",value:function(t,e,n){return e=this.appendAuthToData(e),this.socket.emit(t,e,n),this}},{key:"get",value:function(t,e){var n=this;return e=this.appendAuthToData(e),new Promise(function(o,a){n.socket.emit("get ".concat(t),e,o)})}},{key:"appendAuthToData",value:function(t){return"null"==typeof t||void 0===t?t={auth:this.auth}:"object"!==r(t)||t.hasOwnProperty("auth")||(t.auth=this.auth),t}}])&&l(e.prototype,n),o&&l(e,o),t}()),c={props:{auth:{required:!0},id:{required:!0}},data:function(){return{players:[]}},mounted:function(){var t=this;this.addEventListeners(),u.get("players").then(function(e){if(!e)return t.$emit("leave");t.players=e.players}).catch(function(t){console.error(t)})},methods:{startGame:function(t){u.emit("start game",{name:t})},addEventListeners:function(){u.on("players",this.onPlayers).on("user joined",this.onUserJoined)},onPlayers:function(t){var e=t.players;this.players=e},onUserJoined:function(t){var e=t.name;console.log(e,"joined the lobby")}},computed:{inviteUrl:function(){return window.location.toString()}}},h=n("KHd+"),v=Object(h.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lobby"},[n("div",{staticClass:"title"},[n("h1",[t._v("\n\t\t\tPonygon Lobby\n\t\t\t"),n("code",[t._v(t._s(t.id))])]),t._v(" "),n("div",{staticClass:"invite-link"},[t._v("\n\t\t\tInvite your friends using this link:\n\t\t\t"),n("a",{attrs:{href:t.inviteUrl},on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t"+t._s(t.inviteUrl)+"\n\t\t\t")]),t._v("\n\n\t\t\tor\n\n\t\t\t"),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$emit("leave")}}},[t._v("\n\t\t\t\tleave this lobby\n\t\t\t")])])]),t._v(" "),n("div",{staticClass:"player-list"},[n("h2",[t._v("Players in Your Lobby")]),t._v(" "),t._l(t.players,function(e){return n("div",[t._v("\n\t\t\t"+t._s(e.name)+"\n\n\t\t\t"),e.leader?[t._v("👑")]:t._e()],2)})],2),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"game-list"},[n("div",{staticClass:"game"},[n("h3",[t._v("werewolves")]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.startGame("werewolves")}}},[t._v("\n\t\t\t\tPlay\n\t\t\t")])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat"},[e("h2",[this._v("Chat")]),this._v(" "),e("p",[this._v("chat goes here")])])}],!1,null,null,null);v.options.__file="Lobby.vue";var d=v.exports,p={data:function(){return{name:""}},methods:{createLobby:function(){var t=this;u.emit("create lobby",{name:this.name},function(e){t.$emit("createdLobby",e)})}}},m=Object(h.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lobby-join-create"},[n("h1",[t._v("Create a Lobby")]),t._v(" "),n("form",{attrs:{action:"/app",method:"post"},on:{submit:function(e){return e.preventDefault(),t.createLobby(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Create a Lobby")])])])},[],!1,null,null,null);m.options.__file="Create.vue";var f=m.exports,_={props:{lobbyId:{required:!0}},data:function(){return{name:""}},methods:{joinLobby:function(){var t=this;u.emit("join lobby",{name:this.name,lobbyId:this.lobbyId},function(e){t.$emit("joinedLobby",e)})}}},b=Object(h.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lobby-join-join"},[n("h1",[t._v("Join a Lobby")]),t._v(" "),n("form",{attrs:{action:"/app",method:"post"},on:{submit:function(e){return e.preventDefault(),t.joinLobby(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Join")])])])},[],!1,null,null,null);b.options.__file="Join.vue";var y=b.exports,g={},w=Object(h.a)(g,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"waiting-for-players"},[e("h3",[this._v("\n\t\tWaiting for other players...\n\t")])])}],!1,null,null,null);w.options.__file="WaitingForPlayers.vue";var C=w.exports,P={props:{data:{required:!0}}},k=Object(h.a)(P,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"role-interstitial"},[e("h3",[this._v("\n\t\tYou are a "+this._s(this.data.role)+".\n\t")]),this._v(" "),e("p",[this._v("\n\t\tTODO Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t")])])},[],!1,null,null,null);k.options.__file="RoleInterstitial.vue";var I=k.exports,L={props:{players:{required:!0}},data:function(){return{chosen:[],submitted:!1}},methods:{choosePlayer:function(t){this.chosen.includes(t)||(2===this.chosen.length&&(this.chosen=[]),this.chosen.push(t))},submit:function(){u.emit("amor choice",{players:this.chosen.map(function(t){return t.id})}),this.submitted=!0}},computed:{summary:function(){return this.chosen.length>2&&(this.chosen=[]),0===this.chosen.length?"Please choose two players.":1===this.chosen.length?"".concat(this.chosen[0].name," will be in love."):"".concat(this.chosen[0].name," and ").concat(this.chosen[1].name," will be in love.")}}},j=Object(h.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amor --choose"},[n("h3",[t._v("\n\t\tWho should be in love?\n\t")]),t._v(" "),n("div",{staticClass:"players"},t._l(t.players,function(e){return n("a",{class:["player",{"--active":t.chosen.includes(e)}],attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.choosePlayer(e)}}},[t._v("\n\t\t\t"+t._s(e.name)+"\n\t\t")])}),0),t._v(" "),n("div",{staticClass:"summary"},[n("p",[t._v("\n\t\t\t"+t._s(t.summary)+"\n\t\t")]),t._v(" "),2!==t.chosen.length||t.submitted?t._e():n("button",{on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("\n\t\t\tConfirm\n\t\t")])])])},[],!1,null,null,null);j.options.__file="Choose.vue";var x=j.exports,O={props:{data:{required:!0}}},A=Object(h.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amor --in-love"},[n("h3",[t._v("\n\t\tYou are in love with "+t._s(t.data.other.name)+" ("+t._s(t.data.other.role)+").\n\t")]),t._v(" "),n("p",[t._v("\n\t\tYou are in love with "),n("strong",[t._v(t._s(t.data.other.name))]),t._v(" ("),n("strong",[t._v(t._s(t.data.other.role))]),t._v(").\n\t\tWhen one of you dies, the other will also die.\n\t\tWhen you two are the only survivors, you win the game.\n\t")])])},[],!1,null,null,null);A.options.__file="InLove.vue";var E=A.exports,q={props:{data:{required:!0},players:{required:!0}},data:function(){return{chosen:null,allChoices:this.getInitialAllChoices()}},methods:{getInitialAllChoices:function(){var t={};for(var e in this.data.werewolves)t[e.name]=null;return t},choosePlayer:function(t){this.chosen!==t&&u.emit("werewolf choice",{player:t.id})}},computed:{summary:function(){return null===this.chosen?"Please choose the victim.":"You want to kill ".concat(this.chosen.name,".")}}},D=Object(h.a)(q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"werewolf --chose"},[n("h3",[t._v("\n\t\tWho will be your victim?\n\t")]),t._v(" "),n("div",{staticClass:"grid"},t._l(t.allChoices,function(e,o){return n("div",{staticClass:"wolf"},[n("div",{staticClass:"name"},[t._v("\n\t\t\t\t"+t._s(o)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"victim"},[null===e?[t._v("\n\t\t\t\t\thas not yet chosen a victim\n\t\t\t\t")]:[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")]],2)])}),0),t._v(" "),n("div",{staticClass:"players"},t._l(t.players,function(e){return n("a",{class:["player",{"--active":t.chosen===e}],attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.choosePlayer(e)}}},[t._v("\n\t\t\t"+t._s(e.name)+"\n\t\t")])}),0),t._v(" "),n("div",{staticClass:"summary"},[n("p",[t._v("\n\t\t\t"+t._s(t.summary)+"\n\t\t")])])])},[],!1,null,null,null);D.options.__file="Choose.vue";var $=D.exports,S={props:{data:{required:!0},players:{required:!0}},data:function(){return{chosen:null,submitted:!1,allChoices:this.getInitialAllChoices()}},methods:{getInitialAllChoices:function(){var t={};for(var e in this.data.werewolves)t[e.name]=null;return t},choosePlayer:function(t){this.chosen!==t&&Connection.emit("werewolf choice",{player:t.id})}},computed:{summary:function(){return null===this.chosen?"Please choose the victim.":"You want to kill ".concat(this.chosen.name,".")}}},W=Object(h.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"werewolf --result"},[e("h3",[this._v("\n\t\tThe Werewolves will attack "+this._s(this.data.victim.name)+" tonight.\n\t")])])},[],!1,null,null,null);W.options.__file="Result.vue";var J={components:{PgWaitingForPlayers:C,PgRoleInterstitial:I,PgAmorChoose:x,PgAmorInLove:E,PgWerewolfChoose:$,PgWerewolfResult:W.exports},props:{lobbyId:{required:!0}},data:function(){return{logs:["Playing Werewolves on Ponygon in Lobby ".concat(this.lobbyId,".")],speakingAllowed:!1,view:"waiting-for-players",actionData:null,players:[],phase:{night:!0,round:1,part:1}}},mounted:function(){var t=this;this.addEventListeners(),u.get("players").then(function(e){t.players=e.players}).catch(function(t){return console.error(t)})},methods:{log:function(t){return this.logs.unshift(t),this},addEventListeners:function(){u.on("action",this.onAction).on("phase",this.onPhase)},onAction:function(t){var e=t.view,n=t.data;this.actionData=n,this.view=e.replace(/ /g,"-"),n&&n.role&&this.log("You are a ".concat(n.role,"."))},onPhase:function(t){var e=t.phase;this.phase=e}}},Y=Object(h.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"werewolves"},[n("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700"}}),t._v(" "),n("div",{staticClass:"player-list"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.speakingAllowed,expression:"speakingAllowed"}],staticClass:"speaking-allowed --true"},[t._v("\n\t\t\tYou may talk now.\n\t\t")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.speakingAllowed,expression:"! speakingAllowed"}],staticClass:"speaking-allowed --false"},[t._v("\n\t\t\tPlease do not talk now.\n\t\t")]),t._v(" "),n("h2",[t._v("The Village")]),t._v("\n\n\t\tplayer list\n\t")]),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"action"},[n("h2",[t._v("\n\t\t\t\t"+t._s(t.phase.night?"Night":"Day")+"\n\t\t\t\t"+t._s(t.phase.round)+" –\n\t\t\t\tPhase "+t._s(t.phase.part)+"\n\t\t\t")]),t._v(" "),n("pg-"+t.view,{tag:"component",attrs:{data:t.actionData,players:t.players}})],1),t._v(" "),n("div",{staticClass:"log"},t._l(t.logs,function(e){return n("p",[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}),0)])])},[],!1,null,null,null);Y.options.__file="Werewolves.vue";var N={components:{PgLobby:d,PgLobbyCreate:f,PgLobbyJoin:y,PgWerewolves:Y.exports},data:function(){return{auth:window.localStorage.getItem("auth"),lobbyId:window.location.hash.replace(/^#/,""),game:null}},mounted:function(){u.on("game starting",this.onGameStarting)},methods:{onCreatedOrJoinedLobby:function(t){var e=t.lobbyId,n=t.authString;this.auth=n,this.lobbyId=e},onGameStarting:function(t){var e=t.name;this.game=e}},watch:{auth:function(t,e){window.localStorage.setItem("auth",t),u.auth=t},lobbyId:function(t,e){window.location.hash="#".concat(t)}}},T=Object(h.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ponygon"},[t.game?["werewolves"===t.game?n("pg-werewolves",{attrs:{auth:t.auth,lobbyId:t.lobbyId}}):t._e()]:[t.lobbyId?t.lobbyId&&!t.auth?n("pg-lobby-join",{attrs:{lobbyId:t.lobbyId},on:{joinedLobby:t.onCreatedOrJoinedLobby}}):t._e():n("pg-lobby-create",{on:{createdLobby:t.onCreatedOrJoinedLobby}}),t._v(" "),t.lobbyId&&t.auth?n("pg-lobby",{attrs:{auth:t.auth,id:t.lobbyId},on:{leave:function(e){t.lobbyId=t.auth=""}}}):t._e()]],2)},[],!1,null,null,null);T.options.__file="App.vue";var U=T.exports;new a.a({el:"#app",components:{PgApp:U,PgCreateLobbyForm:f}})},uNSz:function(t,e){}},[[0,1,2]]]);