search      = document.querySelector("#q");
searchDica  = document.querySelector(".search-dica");
olho1       = document.querySelector(".olho1");
olho2       = document.querySelector(".olho2");
android     = document.querySelector(".android");
modal       = document.querySelector("#modal");
btnModal    = document.querySelector("#btn-modal");
clicksCount = 0;

var piscarOlhos = function () {
  olho1.classList.add('piscar');
  olho2.classList.add('piscar');

  setTimeout(paraDePiscar, 500);
}

var paraDePiscar = function () {
  olho1.classList.remove('piscar');
  olho2.classList.remove('piscar');     
}

var darTchau = function () {
  android.classList.add('tchau');
  setTimeout(paraDeDarTchau, 1000);
}

var paraDeDarTchau = function () {
  android.classList.remove('tchau');
}

var trocaTema = function () {
  var currentDate = new Date();
  var horaAtual = currentDate.getHours();
  if ( (horaAtual >= 18 && horaAtual <= 23) || (horaAtual >= 0 && horaAtual <= 5) ) {
    document.body.classList.add('night');
  } else { 
    document.body.classList.remove('night');
  }
}

var furiousEasterEgg = function () {
  clicksCount += 1;
  if (clicksCount == 10) {
    android.classList.add("furious");
    clearInterval(piscarOlhosId);
    clearInterval(darTchauId);
    setTimeout(furiousEasterEggOff, 7000);
  }
}

var furiousEasterEggOff = function () {
  android.classList.remove("furious");
  pisarOlhosId = setInterval(piscarOlhos, 3000);
  darTchauId   = setInterval(darTchau, 10000);
  clicksCount  = 0;
}

var showModal = function () {
  if (window.location.search.length > 0) {
    var busca = window.location.search.split('=');
    search.value = busca[1].replace(/[+]/g,' ') || "";
    if (busca[1].length > 0) {
      setTimeout(function () {
        modal.className += " show";
      }, 1000);  
    }
  }
}

var piscarOlhosId = setInterval(piscarOlhos, 3000);
var darTchauId    = setInterval(darTchau, 10000);
var trocaTemaId   = setInterval(trocaTema, 25000);

setTimeout(trocaTema, 500);
showModal();

android.onclick = function () {
  furiousEasterEgg();
}

btnModal.onclick = function () {
  modal.className = "modal";
  setTimeout(function(){
    modal.style.display = "none";
  }, 500);
}

search.onkeyup = function () {
  if (this.value.length > 2) {
    searchDica.className+= " show";
  } else {
    searchDica.className = "search-dica";
  }
}