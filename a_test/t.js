var minTop = this.paper.canvas.parentElement.parentElement.offsetTop;
var logicPaperHeight = this.paper.height;
var shapeHeight = this.attrs.height / 2;
var scrollTop = this.paper.canvas.parentElement.parentElement.scrollTop;
if (y < minTop + shapeHeight + 40 ||
    y + shapeHeight + scrollTop > minTop + logicPaperHeight + 40
) {
    deltaY = 0;
}
var minLeft = this.paper.canvas.parentElement.parentElement.offsetLeft;
var logicPaperWidth = this.paper.width;
var shapeWidth = this.attrs.width / 2;
if (x < minLeft + shapeWidth ||
    x + shapeWidth > minLeft + logicPaperWidth
) {
    deltaX = 0;
}