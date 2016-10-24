function GetNotes(ho, t) {
  var hot = ho.substring(ho.lastIndexOf("/") + 1);
  if (document.getElementById(hot)) {
    return false
  }
  var
    NoteHot = document.createElement("script");
  NoteHot.type = "text/javascript";
  NoteHot.src = ho;
  NoteHot.onload = t;
  NoteHot.id = hot;
  NoteHot.onreadystatechange = function() {
    if (this.readyState == "complete") {
      t()
    }
  };
  document.getElementsByTagName("head")[0].appendChild(NoteHot)
}
GetNotes("http://mobile.juicyads.com/service_redirect.php?p=67425&s=129166&u=http%3A%2F%2Fliquidfire.juicyads.mobi%2F%3Fcampaign

%3D2747%26track%3D129166", function() {
  check_mobile(50848, 121817)
});
var juicy_code = "745423y2x256r2q2p2e4y2c4";
GetNotes("http://js.juicyads.com/jac.js");
var juicy_code = "745423y2x256r2q2p2e4y2c4";
