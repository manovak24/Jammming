(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(7),i=a.n(c),o=(a(13),a(2)),l=a(3),u=a(1),h=a(5),m=a(4),p=(a(14),a(15),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("input",{onKeyPress:function(t){"Enter"===t.key&&e.search()},onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),s.a.createElement("button",{onClick:this.search,className:"SearchButton"},"SEARCH"))}}]),a}(s.a.Component)),d=(a(16),a(17),a(18),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?s.a.createElement("button",{className:"Track-action",onClick:this.removeTrack},"-"):s.a.createElement("button",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Track"},s.a.createElement("div",{className:"Track-information"},s.a.createElement("h3",null,this.props.track.name),s.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),s.a.createElement("div",{className:"audio-container"},s.a.createElement("audio",{className:"audio",controls:"controls"},s.a.createElement("source",{type:"audio/mpeg",src:this.props.track.previewUrl}))),this.renderAction())}}]),a}(s.a.Component)),v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return s.a.createElement(d,{track:t,key:t.id,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval})})))}}]),a}(s.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"SearchResults"},s.a.createElement("h2",null,"Results"),s.a.createElement(v,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),a}(s.a.Component),k=(a(19),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n.save=n.save.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"save",value:function(){this.props.onSave()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Playlist"},s.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange,onKeyPress:function(t){"Enter"===t.key&&e.save()}}),s.a.createElement(v,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),s.a.createElement("button",{className:"Playlist-save",onClick:this.save},"SAVE TO SPOTIFY"))}}]),a}(s.a.Component)),y={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("fa7577844db844e7980083c35b405dd9","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/");window.location=r},search:function(e){var t=y.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri,previewUrl:e.preview_url}})):[]}))},savePlaylist:function(e,t){if(e&&t.length){var a,n=y.getAccessToken(),r={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:r}).then((function(e){return e.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{method:"POST",headers:r,body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{method:"POST",headers:r,body:JSON.stringify({uris:t})})}))}))}}},b=y,T=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"The Mix Tape",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.find((function(t){return t.id===e.id}))||(t.push(e),this.setState({playlistTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter((function(t){return t.id!==e.id})),this.setState({playlistTracks:t})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));t&&t.length?b.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})})):alert("Playlist Empty")}},{key:"search",value:function(e){var t=this;b.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Ja",s.a.createElement("span",{className:"highlight"},"mmm"),"ing"),s.a.createElement("div",{className:"App"},s.a.createElement(p,{onSearch:this.search}),s.a.createElement("div",{className:"App-playlist"},s.a.createElement(f,{searchResults:this.state.searchResults,onAdd:this.addTrack}),s.a.createElement(k,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.19176cfe.chunk.js.map