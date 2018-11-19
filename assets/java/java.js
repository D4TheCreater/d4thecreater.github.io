// dropdown button

function myFunction() {
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

// Insert into cart

function addtocart() {
  var para = document.createElement("p");
  var node = document.createTextNode("Doom");
  para.appendChild(node);

  var element = document.getElementById("cart");
  element.appendChild(para);
}

// game filter

function filter() {
    var a = document.getElementById("top10");
    var b = document.getElementById("selling");
    var c = document.getElementById("rated");
    var o = document.getElementById("other");

    if (document.getElementById("filt").value === "top") {
      a.style.display = "block";
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
        b.style.display = "none";
        a.style.display = "none";
        c.style.display = "block";
        o.style.display = "none";
    }
    else {
      a.style.display = "block";
      b.style.display = "block";
      c.style.display = "block";
      o.style.display = "block";
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
