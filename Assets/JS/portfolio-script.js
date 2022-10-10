var ticker = $("#ticker");
var container = $("#ticker > div");
var spacing = ticker.outerHeight() - ticker.height();

function animator(currentItem) {
  var distance = currentItem.outerHeight() + spacing;
  var currentTop = parseInt(container.css("margin-top"), 10);
  var duration = (distance + currentTop) / 0.05;

  container.animate({ marginTop: -distance }, duration, "linear", function () {
    var parent = currentItem.parent();

    currentItem.detach();
    parent.css("marginTop", 5);

    parent.append(currentItem);
    animator(parent.children(":first"));
  });
}

animator(container.children(":first"));
ticker.mouseenter(function () {
  container.stop();
});

ticker.mouseleave(function () {
  animator(container.children(":first"));
});
