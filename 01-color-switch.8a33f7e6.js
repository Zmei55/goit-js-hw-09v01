var t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];const e={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')};e.startBtn.addEventListener("click",(()=>{n.start()})),e.stopBtn.addEventListener("click",(()=>{n.stop()}));const n={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{const e=s(0,5);var n,a;n=t,a=e,document.body.style.backgroundColor=n[a]}),1e3))},stop(){clearInterval(this.intervalId),this.isActive=!1}},s=(t,e)=>Math.floor(Math.random()*(e-t+1)+t);
//# sourceMappingURL=01-color-switch.8a33f7e6.js.map