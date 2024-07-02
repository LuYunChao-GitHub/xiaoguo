function isdirection() {
    let div = document.querySelector('.direction');//获取容器
    let content = document.querySelector('.content')
    let rect = div.getBoundingClientRect();//返回容器大小以及距离视口距离的位置信息
    let theta = Math.atan2(rect.height, rect.width);//反正切
    div.onmouseenter = e => {
        const w = e.offsetX - rect.width / 2; //获取进入位置的X值
        const h = rect.height / 2 - e.offsetY;//获取进入位置的y值
        const angle = Math.atan2(h, w);
        // 从左上方进入 angle < theta ;从左下方进入angle >= -theata
        if (angle < theta && angle >= -theta) {
            console.log('right');
            content.innerHTML = 'right'
            content.className = 'right content'
        } else if (angle < - theta && angle >= -Math.PI + theta) {
            console.log('bottom');
            content.innerHTML = 'bottom'
            content.className = 'bottom content'
        } else if (angle < Math.PI - theta && angle >= theta) {
            console.log('top');
            content.innerHTML = 'top'
            content.className = 'top content'
        } else {
            console.log('left');
            content.innerHTML = 'left'
            content.className = 'left content'
        }
    }
    div.onmouseleave = e => {
        const w = e.offsetX - rect.width / 2;
        const h = rect.height / 2 - e.offsetY;
        const angle = Math.atan2(h, w);
        if (angle < theta && angle >= -theta) {
            console.log('right1');
            content.className = 'right1 content'
        } else if (angle < - theta && angle >= -Math.PI + theta) {
            console.log('bottom1');
            content.className = 'bottom1 content'
        } else if (angle < Math.PI - theta && angle >= theta) {
            console.log('top1');
            content.className = 'top1 content'
        } else {
            console.log('left1');
            content.className = 'left1 content'
        }
        // content.className = 'wu content'
    }
}
isdirection()