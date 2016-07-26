var my_fav_people = [];

function resetNames(){
	my_fav_people = ["Louis CK", "Neil Degrasse Tyson", "Eric Andre", "Stephen Colbert"]
}

function resetAnimation(){
	document.getElementById("chosen_one").removeAttribute("class");
}

function namePicker(){
	var random1 = Math.floor(Math.random() * 9);
  	var random2 = Math.floor(Math.random() * 3);
  	var random3 = Math.floor(Math.random() * 3);

  	if (my_fav_people.length > 0) {
  		document.getElementById("chosen_one").innerHTML = (namePick);
  		document.getElementsByTagName("body")[0].style.backgroundColor = "#"+random1+random2+random3+random1+random2+random3;
  		document.getElementById("chosen_one").setAttribute("class", animatePick[random1]);
  	} else {
  		resetNames ();
  	};
 }

 function detectSpecialKeys(e){
    var evtobj=window.event? event : e
    if (evtobj.keyCode == 32) // || evtobj.ctrlKey || evtobj.shiftKey)
      namePicker();
}
document.onclick=namePicker();