   // 获得canvas画布
   var canvas = document.getElementById('myCanvas')
       // 获得2d画笔
   var context = canvas.getContext('2d')
   console.log(context);
   // 把图片画入画布里面
   // var img = new Image();
   // img.src = 'diandian.png'
   // 等待图片加载完成开始绘制图片
   var arr = []
   var timer = null

   function createdian() {
       timer = setInterval(() => {
           var black = {}
           black.x = Math.round(Math.random() * 1000 + 200)
           black.y = Math.round(Math.random() * 600 - 600)
           black.img = new Image()
           black.img.src = "00" + Getrandom(2, 5) + ".png"
           arr.push(black)
       }, 100)
   }

   createdian()


   setTimeout(() => {
       setInterval(() => {
           context.clearRect(0, 0, 2000, 800);
           drawdian()
       }, 10)

   }, 200)

   function drawdian() {
       for (var i = 0; i < arr.length; i++) {
           context.drawImage(arr[i].img, arr[i].x, arr[i].y)
           if (arr[i].x > 850) {
               arr[i].x += 1
           } else(
               arr[i].x -= 1
           )
           arr[i].y += 1

       }
   }

   function Getrandom(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }