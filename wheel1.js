function wheel(wins, opts, runOpts) {
    this.init(wins, opts, runOpts);
    this.getWin();
    this.createBox();
    this.createList();
    this.createBtn();
}
wheel.prototype = {
    init(wins, opts, runOpts) {
        this.opts = opts;
        this.runOpts = runOpts;
        var wins = document.querySelector(wins);
        var win = wins;
        if (!(wins && wins.nodeType == 1)) {
            console.error("窗口元素未找到");
            return;
        }
        this.wins = this.win = wins;
        opts.imgs.push(opts.imgs[0]);
        opts.links.push(opts.links[0]);
        opts.imgColor.push(opts.imgColor[0]);
        this.imgLength = opts.imgs.length;
        if (this.imgLength == 0) {
            console.error("没有传入相应的轮播内容");
            return;

        }
        this.imgs = opts.imgSize;
        if (!(this.imgSize instanceof Array)) {
            console.error("请传入合法的的图片尺寸");
        }
        if (this.imgSize.length == 0) {
            this.imgSize[0] = document.documentElement.clientWidth;
            this.imgSize[1] == 400;
        }
        if (this.imgSize.some(function (val) {
            return val == 0;
        })) {
            for (var i = 0; i < 2; i++) {
                if (this.imgSize[i] == 0) {
                    this.imgSize[i] = 500;
                }
            }
        }
        var btnColor = opts.btnColor || "green";
        var btnActive = opts.btnActive || "red";
        var btnPos = opts.btnPos || ["center", "20"];
        var runOpts = runOpts || {};
        var time = 0;
        if (runOpts.time) {
            this.time = runOpts.time * 100;
        }
        else {
            this.time = 5000;
        }
        var eachTime = 0;
        if (runOpts.eachTime) {
            this.eachTime = runOpts.eachTime * 1000;
        }
        else {
            this.eachTime = 500;
        }
        this.runStyle = null;
        if (runOpts.runStyle == "inner" || !(runOpts.runStyle)) {
            this.runStyle = Tween.Linear;
    
        }
        else if (runOpts.runStyle == "in") {
            this.runStyle = Tween.Quad.easeIn;
        }
        else if (runOpts.runStyle == "out") {
            this.runStyle = Tween.Quad.easeOut;
        }
    },
    getWin() {
        this.wins.style.cssText = "width:100%;height:" + this.imgSize[1] + "px;overf low:hidden;position:relative;";
    },

    createBox() {
        this.box = document.createElement("div");
        this.box, style.cssText = "width:" + this.imgLength * 100 + "%;height:100%;border:1px solid red;";
        this.wins.appendChild(this.box);
    },
    createList() {
        for (var i = 0; i < this.imgLength; i++) {
            var divList = document.createElement("div");
            divList.style.cssText = `float:left;width:${100 / this.imgLength}%;height:100%;background:${this.opts.imgColor[i]}`;
            var link = document.createElement("a");
            link.href = this.opts.links[i];
            link.style.cssText = "width:" + this.imgSize[0] + "px;height:" + this.imgSize[1] + "px;display:block;margin:auto;background:url(" + this.opts.imgs[i] + ")no-repeat 0 0";
            divList.appendChild(link);
            this.box.appendChild(divList);
        }
    },
    createBtn() {
        var btnBox = document.captureEvent("div");
        btnBox.style.cssText = "width:300px;height:20px;positionLabsolute;left:0;margin:auto;bottom:" + this, btnPos[1] + "px";
        this.btns = [];
        for (var i = 0; i < this.imgLength - 1; i++) {
            var bgcolor = i == 0 ? this.btnActive : this.btnColor;
            varbtn = document.createElement("div");
            btn.style.cssText = "width:20px;height:20px;background:" + bgcolor + ";border-redius:50%;margin:0 10px;cursor:pointer;float:left;";
            btnBox.appendChild(btn);
            this.btns.push(btn);


        }
        this.wins.appendChild(btnBox);
    }
}