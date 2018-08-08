//particles-js 为 HTML-DOM  ID
particlesJS("particles-js", {
  //颗粒参数
  "particles": {
      "number": {
          //离粒子显示的数量值
          "value": 50,
          //密度
          "density": {
              //激活
              "enable": true,
              //值区 值越小 显示的越多
              "value_area": 300
          }
      },
      "color": {
          //下面是各种可接收值的格式
          //"#b61924" 
          // {r:182, g:25, b:36} 
          // {h:356, s:76, l:41} 
          // ["#b61924", "#333333", "999999"] 
          // "random"
          "value": "#333"
      },
      //形状
      "shape": {
          //下面是各种可接收值的格式 都可以与下面的 nb_sides 边的数量结合使用
          //"circle"  园
          // "edge" 有边的 看起来像是嵌套的一种图形
          // "triangle" 三角形
          // "polygon" 多边形
          // "star" 星星
          // "image" 图片 对应下面的 image 参数
          // ["circle", "triangle", "image"]  数组混合参数 这样出来的形状就像是随机的多个形状
          "type": "circle",
          //
          "stroke": {
              "width": 1,
              "color": "#333"
          },
          //多边形 配合上面的形状使用
          "polygon": {
              //边数
              "nb_sides": 5
          },
          //图片参数 配合上面的形状 type 为 image 使用
          "image": {
              "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
              "width": 100,
              "height": 100
          }
      },
      //透明度
      "opacity": {
          //数字（0到1）
          "value": 0.5,
          //布尔值
          "random": true,
          //动画参数
          "anim": {
              //激活
              "enable": false,
              //速度
              "speed": 1,
              //时间
              "opacity_min": 0.1,
              //同步 
              //布尔值
              "sync": false
          }
      },
      //尺寸
      "size": {
          //粒子尺寸的数值 
          //注意：不可过大会报错  这个数值应该是计算推算出的一个大致的区间
          "value": 3,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 20,
              "size_min": 1,
              "sync": false
          }
      },
      //连接线
      "line_linked": {
          //激活
          "enable": true,
          //距离
          "distance": 50,
          "color": "#333",
          "opacity": 0.6,
          "width": 1
      },
      //移动
      "move": {
          "enable": true,
          //移动的速度
          "speed": 10,
          //移动的方向
          //下面是各种可接收值
          //"none" 
          // "top" 
          // "top-right" 
          // "right" 
          // "bottom-right" 
          // "bottom" 
          // "bottom-left" 
          // "left" 
          // "top-left"
          "direction": "none",
          "random": true,
          //直线运动 数值为 true 粒子动效不好看
          //布尔值
          "straight": false,
          //输出模式
          //下面是各种可接收值
          //"out" 跑到外面
          //"bounce"  反弹
          "out_mode": "out",
          //粒子之间碰撞是否反弹
          //布尔值
          "bounce": true,
          //吸引 激活之后粒子的方向会有些杂乱无章
          "attract": {
              "enable": false,
              "rotateX": 300,
              "rotateY": 1200
          }
      }
  },
  //互动性
  "interactivity": {
      //检测
      //下面是各种可接收值
      //"canvas", "window"
      "detect_on": "canvas",
      //添加各种事件
      "events": {
          //鼠标经过
          "onhover": {
              "enable": true,
              //模式
              //下面是各种可接收值
              //"grab" 抓住  显示的是粒子间的连接线
              // "bubble" 气泡 显示的是放大版的上面的 image src 的图片 
              // "repulse" 浅水 使粒子无法进入鼠标固定的范围
              // ["grab", "bubble"]  还可以用数组的形式来设置
              "mode": "grab"
          },
          //点击事件
          "onclick": {
              "enable": true,
              //下面是各种可接收值
              //"push"  增加粒子
              // "remove"  删除粒子
              // "bubble" 
              // "repulse" 
              // ["push", "repulse"]
              "mode": "bubble"
          },
          //调整大小
          //布尔值
          "resize": false
      },
      //给上面的可设置的模式增加更多的的参数设置
      "modes": {
          "grab": {
              //距离
              "distance": 150,
              //连接线
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 200,
              //尺寸
              "size": 20,
              //持续的时间
              "duration": 2,
              "opacity": 8,
              //速度
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.2
          },
          //增加
          "push": {
              //颗粒面积
              "particles_nb": 1
          },
          //去除
          "remove": {
              //颗粒面积
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true //视网膜检测
});
