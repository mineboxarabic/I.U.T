
function draw()
{
    var c = document.getElementById('canvas')
    console.log(c)

    var ctx = c.getContext("2d");
    ctx.fillRect(25, 25, 100, 100);

}
document.addEventListener("load",draw());
