# watch-wheel

🖱️ 监控鼠标滚动

## 安装

```shell
yarn add watch-wheel
```

## 使用

```javascript
import watchWheel from 'watch-wheel';
// 任意元素
const el = document.getElementById('any');

// 监视鼠标指针在该元素上触发的滚轮滚动.
watchWheel(el, (e) => {
    console.log(e.type); // wheelstart / wheelmove / wheelend
    console.log(e.delatY); // 鼠标滚轮滚动一下的距离
    console.log(e.velocityY); // 滚动速度, 每隔16ms取一次值
});
```

如果你的鼠标滚轮**支持 x 轴滚动**, 那么你还可以监听到`delatX`和`velocityX`的数值变化.
