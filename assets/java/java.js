// dropdown button

function myCart() {
    document.getElementById("cart").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function respmenu() {
    document.getElementById("respomenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Insert platforms into cart

function addXONEX() {
  var cartitem = document.getElementById("xbonex");
  cartitem.style.display = "block";
}
function addXONE() {
  var cartitem = document.getElementById("xbone");
  cartitem.style.display = "block";
}
function addXONES() {
  var cartitem = document.getElementById("xbones");
  cartitem.style.display = "block";
}
function addPS4() {
  var cartitem = document.getElementById("ps4");
  cartitem.style.display = "block";
}
function addPS4PRO() {
  var cartitem = document.getElementById("ps4p");
  cartitem.style.display = "block";
}
function addRAZER() {
  var cartitem = document.getElementById("rpc");
  cartitem.style.display = "block";
}
function addBLUEPC() {
  var cartitem = document.getElementById("oppc");
  cartitem.style.display = "block";
}
function addRPHONE() {
  var cartitem = document.getElementById("rp");
  cartitem.style.display = "block";
}
function addROG() {
  var cartitem = document.getElementById("rog");
  cartitem.style.display = "block";
}
function addBS() {
  var cartitem = document.getElementById("bs");
  cartitem.style.display = "block";
}

//insert cameras into cart

function addIWC() {
  var cartitem = document.getElementById("IWC");
  cartitem.style.display = "block";
}
function addOWC() {
  var cartitem = document.getElementById("OWC");
  cartitem.style.display = "block";
}
function addICC() {
  var cartitem = document.getElementById("ICC");
  cartitem.style.display = "block";
}
function addDMC() {
  var cartitem = document.getElementById("DMC");
  cartitem.style.display = "block";
}
function addCMC() {
  var cartitem = document.getElementById("CMC");
  cartitem.style.display = "block";
}
function addPMC() {
  var cartitem = document.getElementById("PMC");
  cartitem.style.display = "block";
}

// Insert games into cart

function addDOOM() {
  var cartitem = document.getElementById("Doom");
  cartitem.style.display = "block";
}
function addACL() {
  var cartitem = document.getElementById("ACL");
  cartitem.style.display = "block";
}
function addSH() {
  var cartitem = document.getElementById("Superhot");
  cartitem.style.display = "block";
}
function addCOD() {
  var cartitem = document.getElementById("COD");
  cartitem.style.display = "block";
}
function addBF() {
  var cartitem = document.getElementById("BF");
  cartitem.style.display = "block";
}
function addTRT() {
  var cartitem = document.getElementById("TRT");
  cartitem.style.display = "block";
}
function addTYDS() {
  var cartitem = document.getElementById("TYDS");
  cartitem.style.display = "block";
}
function addF4() {
  var cartitem = document.getElementById("F4");
  cartitem.style.display = "block";
}
function addHI() {
  var cartitem = document.getElementById("HI");
  cartitem.style.display = "block";
}
function addAC() {
  var cartitem = document.getElementById("AC");
  cartitem.style.display = "block";
}
function addBM() {
  var cartitem = document.getElementById("BM");
  cartitem.style.display = "block";
}
function addCOH() {
  var cartitem = document.getElementById("COH");
  cartitem.style.display = "block";
}
function addDS() {
  var cartitem = document.getElementById("DS");
  cartitem.style.display = "block";
}
function addDE() {
  var cartitem = document.getElementById("DE");
  cartitem.style.display = "block";
}
function addFCP() {
  var cartitem = document.getElementById("FCP");
  cartitem.style.display = "block";
}
function addHP() {
  var cartitem = document.getElementById("HP");
  cartitem.style.display = "block";
}


// game filter

function filter() {
    var a = document.getElementById("top10");
    var b = document.getElementById("selling");
    var c = document.getElementById("rated");
    var o = document.getElementById("other");
    var m = document.getElementsByClassName("mix");

    if (document.getElementById("filt").value === "top") {

      b.style.display = "none";
      c.style.display = "none";
      o.style.display = "none";
    }
    else if (document.getElementById("filt").value === "hs") {
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        o.style.display = "none";
    }
    else if (document.getElementById("filt").value === "hr") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        o.style.display = "none";
    }
    else {
      a.style.display = "block";
      b.style.display = "block";
      c.style.display = "block";
    }
}

// platform filter

function platfilter() {
    var x = document.getElementById("consoles");
    var y = document.getElementById("pc");
    var z = document.getElementById("phone");

    if (document.getElementById("platselect").value === "consopt") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
    else if (document.getElementById("platselect").value === "pcopt") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
    else if (document.getElementById("platselect").value === "phoneopt") {
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "block";
    }
    else {
      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "block";
    }
}
