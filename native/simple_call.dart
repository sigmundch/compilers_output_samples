import "dart:html";

main() {
  var div = new DivElement();
  div.text = "some text here";
  document.body!.append(div);
}
