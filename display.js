function display(y) {
  var x;
  clearTimeout(s);
  if (y > 1705) y = 1527;
  if (s || y == document.getElementById("year").innerHTML) s = (y == year && y < 1705) ? setTimeout("display("+(++year)+");", 1000) : 0;
  document.getElementById("slider").value = y;
  document.getElementById("slider").title = y;
  document.getElementById("year").innerHTML = y;
  for (var i in p) {
    x = "";
    if (y == p[i][0] && document.getElementById("FX"+p[i][2]).checked) {
      k[i].setMap(null);
      x += "k["+i+"].setAnimation(google.maps.Animation.DROP);";
    }
    if (p[i][0] <= y && y <= p[i][1] && document.getElementById("FX"+p[i][2]).checked) {
      x += k[i].getMap() ? "" : "k["+i+"].setMap(map);";
    } else {
      x += k[i].getMap() ? "k["+i+"].setMap(null);" : "";
    }
    if (x) setTimeout(x, Math.floor(Math.random()*1000));
  }
}
