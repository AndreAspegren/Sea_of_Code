function projectpage(){
    app.innerHTML = /*HTML*/`
    <div id="projectinfo">prosjektinfo</div>
    <div id="project">prosjekt</div>
    <div id="comments">comments</div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
}