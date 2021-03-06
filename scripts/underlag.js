
//ko bindings example
let viewModel = {
	firstName : ko.observable("Jallo")
};
ko.applyBindings(viewModel);

//Add navigation bar
$(function(){
  $("#nav-placeholder").load("nav.html");
});

//Create tabs on the tables page
function openDiscipline(evt, discipline) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(discipline).style.display = "block";
  evt.currentTarget.className += " active";
} 

function createTrampMoveset(){
	let moves = ["tr1.svg",
				"tr2.svg",
				"tr3.svg",
				"tr4.svg",
				"tr5.svg",
				"tr6.svg",
				"tr7.svg",
				"tr8.svg",
				"tr9.svg",

				"tr10.svg",
				"tr11.svg",

				"tr22.svg",
				"tr23.svg",
				"tr24.svg",
				"tr25.svg",
				"tr26.svg",
				"tr27.svg",
				"tr28.svg",
				"tr29.svg",

				"tr30.svg",
				"tr31.svg",
				"tr32.svg",
				"tr33.svg",
				"tr34.svg",
				"tr35.svg",
				"tr36.svg",
				"tr37.svg",

				"tr41.svg",
				"tr42.svg",
				"tr43.svg",
				"tr44.svg",
				"tr45.svg",
				"tr46.svg",
				"tr47.svg",
				"tr48.svg",
				"tr49.svg",

				"tr50.svg",
				"tr51.svg",
				"tr52.svg",
				"tr53.svg",
				"tr54.svg",
				"tr55.svg",
				"tr56.svg",
				"tr57.svg",
				"tr58.svg",
				"tr59.svg",

				"tr60.svg",
				"tr61.svg",
				"tr62.svg",
				"tr63.svg",
				"tr64.svg",
				"tr65.svg",
				"tr66.svg",
				"tr67.svg",
				"tr68.svg",
				"tr69.svg",

				"tr70.svg",
				"tr71.svg",
				"tr72.svg",
				"tr73.svg",
				"tr74.svg",


				"tro1.svg",
				"tro2.svg",
				"tro3.svg",
				"tro4.svg",
				"tro5.svg",

				"tro20.svg",
				"tro21.svg",
				"tro22.svg",
				"tro23.svg",
				"tro24.svg",
				"tro25.svg",
				"tro26.svg",
				"tro27.svg",
				"tro28.svg",
				"tro29.svg",
				"tro30.svg",
				"tro31.svg"
				]
}

function createTumblingMoveset(){
	let moves = ["tu1.svg",
				"tu2.svg",
				"tu3.svg",
				"tu4.svg",
				"tu5.svg",
				"tu6.svg",
				"tu7.svg",
				"tu8.svg",
				"tu9.svg",

				"tu10.svg",
				"tu11.svg",
				"tu12.svg",
				"tu13.svg",
				"tu14.svg",
				"tu15.svg",
				"tu16.svg",
				"tu17.svg",
				"tu18.svg",
				"tu19.svg",

				"tu20.svg",
				"tu21.svg",
				"tu22.svg",
				"tu23.svg",
				"tu24.svg",
				"tu25.svg",
				"tu26.svg",

				"tu32.svg",
				"tu33.svg",
				"tu34.svg",
				"tu35.svg",
				"tu36.svg",
				"tu37.svg",
				"tu38.svg",
				"tu39.svg",

				"tu40.svg",
				"tu42.svg",
				"tu43.svg",
				"tu44.svg",
				"tu45.svg",
				"tu46.svg",
				"tu47.svg",
				"tu48.svg",
				"tu49.svg",

				"tu51.svg",
				"tu52.svg",
				"tu53.svg",
				"tu54.svg",
				"tu55.svg",
				"tu56.svg",
				"tu57.svg",
				"tu58.svg",
				"tu59.svg",

				"tu60.svg",
				"tu61.svg",
				"tu62.svg",
				"tu63.svg",
				"tu64.svg",
				"tu65.svg",
				"tu66.svg",
				"tu67.svg",

				"tuo1.svg",
				"tuo2.svg",
				"tuo3.svg",
				]
}
function createFristMoveset(){
	let moves = ["a201.svg",
				"a202.svg",
				"a203.svg",
				"a204.svg",
				"a206.svg",
				"a401.svg",
				"a405.svg",
				"a406.svg",
				"a605.svg",
				"a607.svg",
				"a608.svg",
				"b1001.svg",
				"b1004.svg",
				"b1006.svg",
				"b1012.svg",
				"b1014.svg",
				"b1201.svg",
				"b1207.svg",
				"b1209.svg",
				"b1212.svg",
				"b1214.svg",
				"b202.svg",
				"b203.svg",
				"b204.svg",
				"b205.svg",
				"b208.svg",
				"b209.svg",
				"b210.svg",
				"b211.svg",
				"b212.svg",
				"b214.svg",
				"b401.svg",
				"b403.svg",
				"b404.svg",
				"b407.svg",
				"b408.svg",
				"b409.svg",
				"b411.svg",
				"b414.svg",
				"b415.svg",
				"b601.svg",
				"b603.svg",
				"b604.svg",
				"b605.svg",
				"b606.svg",
				"b609a.svg",
				"b609b.svg",
				"b610.svg",
				"b612.svg",
				"b613.svg",
				"b614.svg",
				"b615.svg",
				"b616.svg",
				"b801.svg",
				"b804.svg",
				"b807.svg",
				"b809.svg",
				"b810.svg",
				"b811.svg",
				"b814.svg",
				"b815.svg",
				"b816.svg",
				"b817.svg",
				"h1001.svg",
				"h1002.svg",
				"h1006.svg",
				"h1013.svg",
				"h1016.svg",
				"h1019.svg",
				"h1020.svg",
				"h1023.svg",
				"h1024.svg",
				"h1210.svg",
				"h1213.svg",
				"h1216.svg",
				"h1219.svg",
				"h1222.svg",
				"h201.svg",
				"h202.svg",
				"h204.svg",
				"h205.svg",
				"h206.svg",
				"h207.svg",
				"h208.svg",
				"h209.svg",
				"h210.svg",
				"h211.svg",
				"h212.svg",
				"h213.svg",
				"h214.svg",
				"h215.svg",
				"h216.svg",
				"h217.svg",
				"h401.svg",
				"h402.svg",
				"h403.svg",
				"h404.svg",
				"h406.svg",
				"h407.svg",
				"h408.svg",
				"h409.svg",
				"h411.svg",
				"h412.svg",
				"h415.svg",
				"h416.svg",
				"h417.svg",
				"h418.svg",
				"h419.svg",
				"h601.svg",
				"h602.svg",
				"h605.svg",
				"h606.svg",
				"h610.svg",
				"h613.svg",
				"h615.svg",
				"h616.svg",
				"h618.svg",
				"h619.svg",
				"h620.svg",
				"h801.svg",
				"h802.svg",
				"h803.svg",
				"h808.svg",
				"h809.svg",
				"h810a.svg",
				"h810b.svg",
				"h810.svg",
				"h811.svg",
				"h812.svg",
				"h813.svg",
				"h818.svg",
				"h820.svg",
				"h821bkt.svg",
				"h821frmt.svg",
				"h822.svg",
				"k1001.svg",
				"k1002.svg",
				"k1201.svg",
				"k1202.svg",
				"k1203.svg",
				"k1204.svg",
				"k203.svg",
				"k402.svg",
				"k403.svg",
				"k602.svg",
				"k603.svg",
				"k801.svg",
				"k802.svg",
				"k803.svg",
				"obl401.svg",
				"obl402.svg",
				"obl403.svg",
				"obl404.svg",
				"obl601.svg",
				"obl602.svg",
				"obl603.svg",
				"obl604.svg",
				"p1001.svg",
				"p1002.svg",
				"p1005.svg",
				"p1006.svg",
				"p1007.svg",
				"p1008.svg",
				"p1201.svg",
				"p1202.svg",
				"p1207.svg",
				"p1208.svg",
				"p201.svg",
				"p202.svg",
				"p203.svg",
				"p204.svg",
				"p401.svg",
				"p402.svg",
				"p403.svg",
				"p404.svg",
				"p405.svg",
				"p406.svg",
				"p607.svg",
				"p608.svg",
				"p801.svg",
				"p802.svg",
				"p803.svg",
				"p804.svg",
				"p805.svg",
				"p806.svg"
				]

}





