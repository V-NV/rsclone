export const ExampleText = [
    { html: "html", css: "css", js: "js" },
    {
      html: `<div class="text-box">
 <p>Make your best page right Now !</p>
 <button class="btn">Click me</button>
</div>
<div class="img off"></div>
`,
      css: `.text-box{
  display:flex;
  flex-direction:column;
  align-items:center;
  border:solid 2px red;
}
p{
  color:#4ecb37;
  text-align:center;
}
.img{
  margin: 20px auto;
  width:60vw;
  height:550px;
  background-position:contain;
  background:url("https://www.bobross.com/content/bob_ross_img.png");
}
button{
  width:100px;
  height:40px;
}
.off{
  display:none;
}`,
      js: `let btn = document.querySelector('.btn');
const img = document.querySelector('.img');
btn.addEventListener('click',() => {
if(img.classList.contains('off')){
  img.classList.remove('off');
}
else{
  img.classList.add('off');
}
});`,
    },
    { html: `<div class="bike">
    <div class="bike__cloud-1"></div>
    <div class="bike__cloud-2"></div>
    <div class="bike__cloud-3"></div>
    <div class="bike__bike">
      <div class="bike__wheel">
        <div class="bike__needle"></div>
        <div class="bike__needle"></div>
        <div class="bike__needle"></div>
      </div>
      <div class="bike__wheel">
        <div class="bike__needle"></div>
        <div class="bike__needle"></div>
        <div class="bike__needle"></div>    
      </div>
      <div class="bike__down-tube"></div>
      <div class="bike__tubes">
        <div class="bike__chain"></div>
        <div class="bike__seat-stays"></div>
        <div class="bike__chain-stays"></div>
        <div class="bike__seat-tube"></div>
        <div class="bike__star">
          <div class="bike__pedal"></div>    
        </div>
        <div class="bike__seat"></div>    
      </div>
      <div class="bike__top-tube"></div>
      <div class="bike__fo"></div>
      <div class="bike__head-tube"></div>
      <div class="bike__helm"></div>
      <div class="bike__lock"></div>    
    </div>
    <div class="bike__man">
      <div class="bike__arm">
        <div class="bike__forearm">
          <div class="bike__hand"></div>    
        </div>
        <div class="bike__sleeve"></div>    
      </div>
      <div class="bike__back-leg">
        <div class="bike__shin">
          <div class="bike__skin"></div>
          <div class="bike__ked"></div>    
        </div>    
      </div>
      <div class="bike__butt"></div>
      <div class="bike__front-leg">
        <div class="bike__shin">
          <div class="bike__skin"></div>
          <div class="bike__ked"></div>    
        </div>    
      </div>
      <div class="bike__shirt">
        <div class="bike__collar"></div>    
      </div>
      <div class="bike__arm">
        <div class="bike__forearm">
          <div class="bike__hand"></div>    
        </div>
        <div class="bike__sleeve"></div>    
      </div>
      <div class="bike__head">
        <div class="bike__eye"></div>
        <div class="bike__eye"></div>
        <div class="bike__whisker"></div>
        <div class="bike__nose"></div>
        <div class="bike__month"></div>
        <div class="bike__whisker"></div>
        <div class="bike__cap">
          <div class="bike__peak">
            <div class="bike__peak-parts"></div>   
          </div>    
        </div>
      </div>
    </div>    
  </div>`, 
    css: `.bike {
      width: 800px; height: 500px;
      margin: auto;
      position: relative;
      background: #42B0CE;
      overflow: hidden;
    }
      .bike *, .bike *::before, .bike *::after {
        position: absolute;
        content: '';
      }
      .bike__bike {
        top: 250px; left: 200px;
        width: 370px; height: 210px;
        z-index: 2;
      }
        .bike__bike:before {
          top: 200px; left: -10px;
          width: 400px; height: 20px;
          border-radius: 100%;
          background: #398CA5;
        }
      .bike__wheel {
        top: 68px; left: 9px;
        width: 140px; height: 140px;
        box-sizing: border-box;
        border-radius: 100%;
        border: 5px solid #27292B;
        box-shadow: inset 0 1px 0 5px white;
      }
        .bike__wheel:after {
          width: 9px; height: 9px;
          border-radius: 100%;
          background: white;
          z-index: 30;
        }
        .bike__wheel:nth-child(1):after {
          top: 60px; left: 60px;
        }
        .bike__wheel:nth-child(2):after {
          top: 63px; left: 59px;
        }
        .bike__wheel:nth-child(1) {
          animation: .8s bike-wheel-1 linear infinite;
        }
        .bike__wheel:nth-child(2) {
          left: 217px;
          transform: rotate(220deg);
          animation: .8s bike-wheel-2 linear infinite;
        }
        .bike__wheel .bike__needle:nth-child(1) {
          top: 18px; left: 16px;
          height: 42px; width: 42px;
          border-top: 4px solid white;
          border-left: 2px solid white;
          border-radius: 100% 0;
        }
          .bike__wheel .bike__needle:nth-child(1):before {
            top: -10px; left: 27px;
            height: 20px; width: 20px;
            background: #42B0CE;
            transform: rotate(-20deg);
          }
          .bike__wheel .bike__needle:nth-child(1):after {
            top: 25px; left: -7px;
            height: 24px; width: 24px;
            background: #42B0CE;
            transform: rotate(20deg);
          }
        .bike__wheel .bike__needle:nth-child(2) {
          top: 31px; left: 72px;
          height: 42px; width: 42px;
          border-top: 4px solid white;
          border-left: 2px solid white;
          border-radius: 100% 0;
          transform: rotate(112deg);
        }
          .bike__wheel .bike__needle:nth-child(2):before {
            top: -10px; left: 27px;
            height: 20px; width: 20px;
            background: #42B0CE;
            transform: rotate(-20deg);
          }
          .bike__wheel .bike__needle:nth-child(2):after {
            top: 25px; left: -7px;
            height: 24px; width: 24px;
            background: #42B0CE;
            transform: rotate(20deg);
          }
        .bike__wheel .bike__needle:nth-child(3) {
          top: 73px; left: 52px;
          height: 32px; width: 32px;
          border-top: 4px solid white;
          border-left: 2px solid white;
          border-radius: 100% 0;
          transform: rotate(-148deg);
        }
          .bike__wheel .bike__needle:nth-child(3):before {
            top: -10px; left: 37px;
            height: 20px; width: 20px;
            background: #42B0CE;
            transform: rotate(-20deg);
          }
          .bike__wheel .bike__needle:nth-child(3):after {
            top: 31px; left: -7px;
            height: 24px; width: 24px;
            background: #42B0CE;
            transform: rotate(20deg);
          }
      .bike__top-tube {
        top: 34px; left: 124px;
        width: 130px; height: 25px;
        box-sizing: border-box;
        border-radius: 0 100%;
        border-bottom: 7px solid #EF425A;
        border-left: 3px solid #EF425A;
        transform: rotate(4deg);
        animation: .8s bike-top-tube linear infinite;
      }
      .bike__down-tube {
        top: 62px; left: 182px;
        width: 64px; height: 100px;
        box-sizing: border-box;
        border-radius: 0 100%;
        border-left: 7px solid #EF425A;
        border-bottom: 7px solid #EF425A;
        transform: rotate(67deg);
        animation: .8s bike-down-tube linear infinite;
      }
        .bike__down-tube:after {
          top: 50px; left: 9px;
          width: 2px; height: 15px;
          box-sizing: border-box;
          border-radius: 2px;
          background: white;
          transform: rotate(-26deg);
        }
      .bike__seat-tube {
        top: 32px; left: 77px;
        width: 6px; height: 115px;
        background: #EF425A;
        transform: rotate(-21deg);
        box-shadow: inset 2px 0 0 0 #C73149;
      }
      .bike__seat-stays {
        top: 32px; left: 31px;
        width: 4px; height: 115px;
        background: #EF425A;
        transform: rotate(28deg);
      }
      .bike__chain-stays {
        top: 99px; left: 51px;
        width: 4px; height: 90px;
        background: #EF425A;
        transform: rotate(98deg);
      }
      .bike__star {
        top: 137px; left: 89px;
        width: 28px; height: 28px;
        background: #C73149;
        transform: rotate(45deg);
        border-radius: 2px;
        animation: .8s bike-star linear infinite;
        z-index: 3;
      }
        .bike__star:before {
          width: 28px; height: 28px;
          background: #C73149;
          transform: rotate(45deg);
          border-radius: 2px;
        }
        .bike__star:after {
          width: 28px; height: 28px;
          background: #C73149;
          transform: rotate(45deg);
          border-radius: 2px;
        }
      .bike__pedal {
        top: 11px; left: 12px;
        width: 42px; height: 2px;
        background: #27292B;
        transform-origin: left center;
        transform: rotate(59deg);
        z-index: 10;
      }
        .bike__pedal:before {
          top: -2px; left: 30px;
          width: 24px; height: 5px;
          background: #27292B;
          transform-origin: center center;
          transform: rotate(-94deg);
          animation: .8s bike-pedal linear infinite;
        }
      .bike__chain {
        top: 130px; left: 2px;
        width: 100px; height: 28px;
        box-sizing: border-box;
        transform: rotate(9deg);
        border-radius: 100% 0 0 100%;
        border: 3px solid #F9D276;
      }
      .bike__fo {
        top: 90px; left: 235px;
        width: 70px; height: 30px;
        box-sizing: border-box;
        border-radius: 100% 0;
        border-left: 4px solid #27292B;
        border-top: 4px solid #27292B;
        transform: rotate(-95deg);
        animation: .8s bike-fo linear infinite;
      }
      .bike__head-tube {
        top: 44px; left: 246px;
        width: 6px;
        border-style: solid;
        border-color: #EF425A transparent;
        border-width: 27px 3px 0;
        transform: rotate(-10deg);
        box-shadow: 0 3px 0 0 #EF425A;
        animation: .8s bike-head-tube linear infinite;
      }
        .bike__head-tube:before {
          top: -31px; left: -5px;
          width: 15px; height: 4px;
          background: #EF425A;
        }
        .bike__head-tube:after {
          top: -23px; left: 0px;
          width: 9px; height: 16px;
          box-sizing: border-box;
          border-top: 2px solid #F9D276;
          border-left: 2px solid #F9D276;
          border-bottom: 2px solid #F9D276;
          background: #27292B;
        }
      .bike__helm {
        top: 22px; left: 242px;
        width: 7px; height: 20px;
        background: #27292B;
        transform: rotate(-15deg);
        animation: .8s bike-helm linear infinite;
      }
        .bike__helm:before {
          top: -10px; left: 1px;
          width: 20px; height: 20px;
          border-radius: 100% 0 0 0;
          border-top: 5px solid #27292B;
          border-left: 5px solid #27292B;
          transform: rotate(54deg);
        }
        .bike__helm:after {
          top: -6.5px; left: 33px;
          width: 30px; height: 30px;
          border-radius: 0 0 100% 0;
          border-bottom: 5px solid #27292B;
          border-right: 5px solid #27292B;
          transform: rotate(54deg);
        }
      .bike__seat {
        top: 18px; left: 54px;
        width: 5px; height: 20px;
        background: #27292B;
        transform: rotate(-21deg);
      }
        .bike__seat:before {
          top: -16px; left: -13px;
          width: 40px; height: 24px;
          box-sizing: border-box;
          border-bottom: 4px solid #27292B;
          border-left: 4px solid #27292B;
          border-radius: 0 100%;
          transform: rotate(0deg);
        }
        .bike__seat:after {
          top: -13px; left: -7px;
          width: 36px; height: 16px;
          background: #27292B;
          border-radius: 0 100% 0 100%;
          transform: rotate(10deg);
        }
      .bike__lock {
        top: 46px; left: 201px;
        width: 20px; height: 30px;
        box-sizing: border-box;
        border: 3px solid #27292B;
        border-radius: 100% 100% 0 0;
        transform: rotate(20deg);
        animation: .8s bike-lock linear infinite;
      }
        .bike__lock:before {
          top: 22px; left: -3px;
          width: 20px; height: 8px;
          box-sizing: border-box;
          border-right: 6px solid #27292B;
          background: #F9D276;
          transform: rotate(0deg);
        }
        .bike__lock:after {
          top: 22px; left: 6px;
          border-bottom: 7px solid #EC4564;
          border-left: 5px solid transparent;
        }
      .bike__tubes {
        top: 0px; left: 70px;
        width: 124px; height: 170px;
        transform: rotate(0deg);
        animation: .8s bike-tubes linear infinite;
      }
      .bike__man {
        top: 60px; left: 280px;
        width: 300px; height: 400px;
        animation: .8s bike-man linear infinite;
      }
      .bike__butt {
        top: 138px; left: 23px;
        width: 40px; height: 40px;
        background: #4A0A23;
        border-radius: 2px 0 0 20px;
        transform: rotate(28deg);
        transform-origin: bottom right;
        animation: .8s bike-butt linear infinite;
        z-index: 5;
      }
      .bike__front-leg {
        top: 155px; left: 54px;
        width: 38px; height: 96px;
        background: #4A0A23;
        border-radius: 20px 20px 90% 0;
        transform-origin: left 22px;
        transform: rotate(-14deg);
        animation: .8s bike-front-leg linear infinite;
        z-index: 5;
      }
        .bike__front-leg:before {
          top: 85px; left: 0px;
          width: 22px; height: 20px;
          background: #4A0A23;
          border-radius: 100%;
          transform-origin: left top;
        }
        .bike__front-leg .bike__shin {
          top: 97px; left: 10px;
          width: 7px; height: 70px;
          background: #4A0A23;
          transform-origin: -3px top;
          transform: rotate(19deg);
          animation: .8s bike-front-leg-shin linear infinite;
        }
          .bike__front-leg .bike__shin:before {
            top: -12px; left: -15px;
            width: 22px; height: 28px;
            background: #4A0A23;
            border-radius: 100% 100% 0;
          }
          .bike__front-leg .bike__shin:after {
            top: 22px; left: -20px;
            border-left: 34px solid transparent;
            border-right: 6px solid transparent;
            border-top: 10px solid #4A0A23;
            transform: rotate(-112deg);
          }
        .bike__front-leg .bike__skin {
          top: 65px; left: 2px;
          width: 4px; height: 37px;
          background: linear-gradient(to bottom, #efa47b 0%, #efa47b 40%, #27292b 41%, #27292b 100%);
          border-radius: 0 0 2px 2px;
          transform: rotate(1deg);
        }
          .bike__front-leg .bike__skin:before {
            top: -1px; left: -5px;
            height: 0; width: 9px;
            border-top: 5px solid #75012C;
            border-left: 2px solid transparent;
            border-right: 3px solid transparent;
            transform: rotate(-10deg);
          }
          .bike__front-leg .bike__skin:after {
            top: 14px; left: -4px;
            width: 12px; height: 2px;
            border-radius: 2px;
            background: #27292B;
          }
        .bike__front-leg .bike__ked {
          top: 93px; left: 3px;
          width: 35px; height: 10px;
          background: #27292B;
          border-bottom: 3px solid white;
          border-radius: 10px 100% 2px 0;
          transform-origin: 5px top;
          transform: rotate(73deg);
          animation: .8s bike-front-leg-ked linear infinite;
        }
          .bike__front-leg .bike__ked:before {
            top: 5px; left: 32px;
            width: 20px; height: 5px;
            background: #27292B;
            border-bottom: 3px solid white;
            border-radius: 2px 6px 2px 2px;
            transform-origin: left 5px;
            transform: rotate(-70deg);
            animation: .8s bike-front-leg-ked-nose linear infinite;
          }
          .bike__front-leg .bike__ked:after {
            top: -3px; left: 2px;
            width: 12px; height: 5px;
            border-radius: 2px;
            background: #27292B;
            transform: rotate(-90deg);
          }
      .bike__back-leg {
        top: 157px; left: 70px;
        width: 38px; height: 96px;
        background: #4A0A23;
        border-radius: 20px 20px 90% 0;
        transform-origin: left 22px;
        transform: rotate(-58deg);
        animation: .8s bike-back-leg linear infinite;
        z-index: 1;
      }
        .bike__back-leg:before {
          top: 85px; left: 0px;
          width: 22px; height: 20px;
          background: #4A0A23;
          border-radius: 100%;
          -webkit-transform-origin: left top;
          transform-origin: left top;
        }
        .bike__back-leg .bike__shin {
          top: 97px; left: 10px;
          width: 7px; height: 70px;
          background: #4A0A23;
          transform-origin: -3px top;
          transform: rotate(101deg);
          animation: .8s bike-back-leg-shin linear infinite;
        }
          .bike__back-leg .bike__shin:before {
            top: -12px; left: -15px;
            width: 22px; height: 28px;
            background: #4A0A23;
            border-radius: 100% 100% 0;
          }
          .bike__back-leg .bike__shin:after {
            top: 22px; left: -20px;
            border-left: 34px solid transparent;
            border-right: 6px solid transparent;
            border-top: 10px solid #4A0A23;
            transform: rotate(-112deg);
          }
        .bike__back-leg .bike__skin {
          top: 65px; left: 2px;
          width: 4px; height: 37px;
          background: linear-gradient(to bottom, #efa47b 0%, #efa47b 40%, #27292b 41%, #27292b 100%);
          border-radius: 0 0 2px 2px;
          transform: rotate(1deg);
        }
          .bike__back-leg .bike__skin:before {
            top: -1px; left: -5px;
            height: 0; width: 9px;
            border-top: 5px solid #75012C;
            border-left: 2px solid transparent;
            border-right: 3px solid transparent;
            transform: rotate(-10deg);
          }
          .bike__back-leg .bike__skin:after {
            top: 14px; left: -4px;
            width: 12px; height: 2px;
            border-radius: 2px;
            background: #27292B;
          }
        .bike__back-leg .bike__ked {
          top: 94px; left: -2px;
          width: 35px; height: 10px;
          background: #27292B;
          border-bottom: 3px solid white;
          border-radius: 10px 100% 2px 0;
          transform-origin: 5px top;
          transform: rotate(-30deg);
          animation: .8s bike-back-leg-ked linear infinite;
        }
          .bike__back-leg .bike__ked:before {
            top: 5px; left: 32px;
            width: 20px; height: 5px;
            background: #27292B;
            border-bottom: 3px solid white;
            border-radius: 2px 6px 2px 2px;
            transform-origin: left 5px;
            transform: rotate(-10deg);
            animation: .8s bike-front-leg-ked-nose linear infinite;
          }
          .bike__back-leg .bike__ked:after {
            top: -3px; left: 2px;
            width: 12px; height: 5px;
            border-radius: 2px;
            background: #27292B;
            transform: rotate(-90deg);
          }
      .bike__shirt {
        top: 45px; left: 88px;
        width: 50px; height: 133px;
        border-radius: 100% 0;
        background: #D63942;
        transform: rotate(54deg);
        animation: .8s bike-shirt linear infinite;
        z-index: 5;
      }
        .bike__shirt:before {
          top: 53px; left: 0px;
          height: 0; width: 28px;
          border-bottom: 80px solid #D63942;
          border-left: 10px solid transparent;
          border-right: 25px solid transparent;
          border-radius: 0 0 100% 0 / 0 0 40% 0;
        }
        .bike__shirt:after {
          top: 3px; left: -5px;
          height: 131px; width: 50px;
          box-sizing: border-box;
          border-radius: 100% 0 100% 0;
          transform: rotate(-180deg);
          border-bottom: 8px solid #D63942;
          border-right: 8px solid #D63942;
        }
      .bike__collar {
        top: -14px; left: 45px;
        width: 6px; height: 20px;
        background: #EFA47B;
        border-radius: 0 0 4px 0;
        transform: rotate(0deg);
      }
        .bike__collar:before {
          top: 13px; left: -2px;
          width: 10px; height: 30px;
          background: #D63942;
        }
        .bike__collar:after {
          top: 7px; left: 3px;
          width: 6px; height: 6px;
          border-radius: 100%;
          background: #EFA47B;
        }
      .bike__arm {
        top: 117px; left: 135px;
        width: 15px; height: 45px;
        transform-origin: 30px -12px;
        animation: .8s bike-arm linear infinite;
        z-index: 5;
      }
        .bike__arm:after {
          top: 40px; left: -11px;
          width: 12px; height: 8px;
          border-radius: 40% 0 0 1px;
          background: #EFA47B;
          transform: rotate(10deg);
        }
        .bike__arm:before {
          top: 0px; left: 0px;
          width: 15px; height: 45px;
          background: #EFA47B;
          border-radius: 5px 0 0 80%;
          transform: rotate(30deg);
          box-shadow: inset 0 4px 0 0 #EF8A70, inset 2px 0 0 0 #EF8A70;
        }
      .bike__sleeve {
        top: -26px; left: 22px;
        width: 25px; height: 28px;
        background: #d53942;
        box-shadow: -1px -1px 0 0 rgba(0, 0, 0, 0.1);
        border-radius: 20px 20px 0 0;
        transform-origin: 5px top;
        transform: rotate(24deg);
      }
        .bike__sleeve:after {
          top: 28px; left: -2px;
          width: 29px; height: 5px;
          border-radius: 2px;
          background: #c5343d;
          transform-origin: left bottom;
        }
      .bike__forearm {
        top: -10px; left: -5px;
        height: 0; width: 4px;
        border-bottom: 52px solid #EFA47B;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        transform: rotate(139deg);
        transform-origin: bottom center;
        animation: .8s bike-forearm linear infinite;
      }
        .bike__forearm:before {
          top: 27px; left: -3px;
          width: 8px; height: 5px;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          transform: rotate(14deg);
        }
        .bike__forearm:after {
          top: 19px; left: -1px;
          width: 5px; height: 3px;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          transform: rotate(14deg);
        }
      .bike__hand {
        top: 4px; left: -1px;
        height: 15px; width: 5px;
        background: #EFA47B;
        border-radius: 3px 3px 0 0;
        transform: rotate(181deg);
        transform-origin: center top;
        animation: .8s bike-hand linear infinite;
      }
        .bike__hand:before {
          top: 5px; left: -2px;
          height: 24px; width: 12px;
          border-radius: 0 100% 2px 4px;
          transform: rotate(30deg);
          background: #EFA47B;
        }
        .bike__hand:after {
          top: 11px; left: -9px;
          height: 12px; width: 15px;
          border-radius: 4px 0 4px 4px;
          transform: rotate(-30deg);
          background: #EFA47B;
        }
      .bike__arm:nth-child(1) {
        top: 115px; left: 144px;
        width: 15px; height: 45px;
        transform-origin: 30px -12px;
        transform: rotate(2deg);
        animation: .8s bike-back-arm linear infinite;
        z-index: 1;
      }
        .bike__arm:nth-child(1):before {
          top: 40px; left: -11px;
          width: 12px; height: 8px;
          border-radius: 40% 0 0 1px;
          background: #DC7465;
          transform: rotate(10deg);
        }
        .bike__arm:nth-child(1):after {
          width: 15px; height: 45px;
          background: #DC7465;
          border-radius: 5px 0 0 80%;
          transform: rotate(30deg);
          box-shadow: inset 0 4px 0 0 #DC7465, inset 2px 0 0 0 #DC7465;
        }
      .bike__arm:nth-child(1) .bike__sleeve {
        top: -27px; left: 17px;
        width: 25px; height: 28px;
        background: #75012C;
        border-radius: 20px 20px 0 0;
        transform-origin: 5px top;
        transform: rotate(24deg);
      }
        .bike__arm:nth-child(1) .bike__sleeve:after {
          top: 28px; left: -3px;
          width: 30px; height: 5px;
          background: #75012C;
        }
      .bike__arm:nth-child(1) .bike__forearm {
        top: -10px; left: -5px;
        height: 0; width: 4px;
        border-bottom: 52px solid #DC7465;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        transform: rotate(135deg);
        transform-origin: bottom center;
        animation: .8s bike-back-forearm linear infinite;
      }
        .bike__arm:nth-child(1) .bike__forearm:before {
          top: 27px; left: -3px;
          width: 8px; height: 5px;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          transform: rotate(14deg);
        }
        .bike__arm:nth-child(1) .bike__forearm:after {
          top: 19px; left: -1px;
          width: 5px; height: 3px;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          transform: rotate(14deg);
        }
      .bike__arm:nth-child(1) .bike__hand {
        top: 4px; left: -1px;
        height: 15px; width: 5px;
        background: #DC7465;
        border-radius: 3px 3px 0 0;
        transform: rotate(181deg);
        transform-origin: center top;
        animation: .8s bike-back-hand linear infinite;
      }
        .bike__arm:nth-child(1) .bike__hand:before {
          top: 5px; left: -2px;
          height: 24px; width: 12px;
          border-radius: 0 100% 2px 4px;
          transform: rotate(30deg);
          background: #DC7465;
        }
        .bike__arm:nth-child(1) .bike__hand:after {
          top: 11px; left: -9px;
          height: 12px; width: 15px;
          border-radius: 4px 0 4px 4px;
          transform: rotate(-30deg);
          background: #DC7465;
        }
      .bike__head {
        top: 44px; left: 175px;
        width: 50px; height: 58px;
        background: #EFA47B;
        border-radius: 0 100%;
        transform: rotate(20deg);
        animation: .8s bike-head linear infinite;
      }
        .bike__head:before {
          top: -2px; left: 28px;
          width: 50px; height: 50px;
          border-radius: 100% 0;
          background: #EFA47B;
          transform: rotate(-40deg);
        }
        .bike__head:after {
          top: -10px; left: 20px;
          width: 40px; height: 40px;
          background: #EFA47B;
          transform: rotate(-20deg);
        }
      .bike__eye {
        top: 2px; left: 41px;
        width: 8px; height: 17px;
        border-radius: 100%;
        background: white;
        transform: rotate(-20deg);
        z-index: 1;
      }
        .bike__eye:nth-child(1) {
          box-shadow: 0 0 0 3px #EF8A70;
        }
        .bike__eye:nth-child(2) {
          top: -4px; left: 56px;
        }
        .bike__eye:before {
          top: 6px; left: 4px;
          width: 5px; height: 7px;
          box-sizing: border-box;
          box-shadow: inset 1px 0 0 2px black;
          background: white;
          border-radius: 100%;
        }
        .bike__eye:after {
          top: -3px; left: -3px;
          width: 13px; height: 3px;
          border-radius: 1px;
          background: #75012C;
        }
      .bike__nose {
        top: -10px; left: 50px;
        width: 5px; height: 30px;
        border-radius: 0 0 0 100%;
        background: #EF425A;
        transform: rotate(-20deg);
        z-index: 18;
      }
        .bike__nose:before {
          top: 22px; left: 4px;
          width: 14px; height: 10px;
          box-sizing: border-box;
          background: #EF425A;
          border-radius: 100%;
          transform: rotate(-25deg);
        }
        .bike__nose:after {
          top: 3px; left: 3px;
          width: 4px; height: 25px;
          border-radius: 1px;
          background: #EF425A;
          transform: rotate(-10deg);
        }
      .bike__month {
        top: 36px; left: 33px;
        width: 23px; height: 15px;
        border-radius: 100% 0 100% 100%;
        background: white;
      }
      .bike__whisker:nth-child(3) {
        top: 6px; left: 60px;
        width: 17px; height: 23px;
        border-radius: 100%;
        background: #75012C;
        transform: rotate(-30deg);
        z-index: 17;
      }
        .bike__whisker:nth-child(3):before {
          top: 12px; left: 0px;
          width: 19px; height: 14px;
          background: #75012C;
          border-radius: 0 0 0 100%;
        }
        .bike__whisker:nth-child(3):after {
          top: 11px; left: 19px;
          width: 19px; height: 13px;
          background: #75012C;
          border-radius: 0 0 100% 0;
          transform: rotate(-6deg);
        }
      .bike__whisker:nth-child(6) {
        top: 12px; left: 39px;
        width: 25px; height: 25px;
        border-radius: 100%;
        background: #75012C;
        z-index: 19;
      }
        .bike__whisker:nth-child(6):before {
          top: 12px; left: -5px;
          width: 30px; height: 17px;
          background: #75012C;
          border-radius: 2px 0 100% 0;
        }
        .bike__whisker:nth-child(6):after {
          top: 10.5px; left: -24px;
          width: 19px; height: 17px;
          background: #75012C;
          border-radius: 0 0 0 100%;
          transform: rotate(10deg);
        }
      .bike__cap {
        top: -28px; left: -5px;
        width: 60px; height: 20px;
        border-radius: 100%;
        background: #D63942;
        transform: rotate(-3deg);
        z-index: 20;
      }
        .bike__cap:before {
          top: 7px; left: -2px;
          width: 15px; height: 31px;
          background: #D63942;
          border-radius: 100% 100% 100% 0;
          transform: rotate(-9deg);
        }
        .bike__cap:after {
          top: 13.5px; left: -2px;
          width: 58px; height: 17px;
          background: #D63942;
          border-radius: 20px;
          transform: rotate(-20deg);
        }
      .bike__peak {
        top: -23px; left: 50px;
        width: 39px; height: 39px;
        border-radius: 100% 0;
        background: #A92731;
        transform: rotate(-14deg);
        z-index: 21;
      }
        .bike__peak:before {
          top: -3px; left: -1px;
          width: 39px; height: 18px;
          border-radius: 0 100%;
          background: #A92731;
          transform: rotate(-42deg);
        }
        .bike__peak:after {
          top: 14px; left: -12px;
          width: 17px; height: 17px;
          border-right: 4px solid #A92731;
          border-top: 4px solid #A92731;
          border-radius: 0 100% 0 0;
          transform: rotate(53deg);
        }
      .bike__peak-parts {
        top: 14px; left: 2px;
        width: 10px; height: 10px;
        background: #A92731;
      }
        .bike__peak-parts:before {
          top: 15.5px; left: -13px;
          border-bottom: 10px solid #A92731;
          border-left: 14px solid transparent;
          transform: rotate(-7deg);
        }
      .bike__cloud-1 {
        top: 70px; left: 300px;
        width: 60px; height: 60px;
        border-radius: 100% 100% 0 100%;
        background: white;
        animation: .8s bike-cloud linear infinite;
        animation-delay: -.2s;
        opacity: .6;
      }
        .bike__cloud-1:before {
          bottom: 0; left: 54px;
          width: 40px; height: 40px;
          border-radius: 100% 100% 0 0;
          background: white;
        }
        .bike__cloud-1:after {
          bottom: 0; left: 90px;
          width: 30px; height: 30px;
          border-radius: 100% 100% 100% 0;
          background: white;
        }
      .bike__cloud-2 {
        top: 172px; left: 110px;
        width: 34px; height: 34px;
        border-radius: 100% 100% 100% 0;
        background: white;
        animation: .8s bike-cloud linear infinite;
        animation-delay: -.5s;
        opacity: .6;
      }
        .bike__cloud-2:before {
          bottom: 0; left: -15px;
          width: 24px; height: 24px;
          border-radius: 100% 100% 0 0;
          background: white;
        }
        .bike__cloud-2:after {
          bottom: 0; left: -30px;
          width: 20px; height: 20px;
          border-radius: 100% 100% 0 100%;
          background: white;
        }
      .bike__cloud-3 {
        top: 172px; left: 630px;
        width: 34px; height: 34px;
        border-radius: 100% 100% 100% 0;
        background: white;
        animation: .8s bike-cloud linear infinite;
        animation-delay: -.8s;
        opacity: .6;
      }
        .bike__cloud-3:before {
          bottom: 0; left: -15px;
          width: 24px; height: 24px;
          border-radius: 100% 100% 0 0;
          background: white;
        }
        .bike__cloud-3:after {
          bottom: 0; left: -30px;
          width: 20px; height: 20px;
          border-radius: 100% 100% 0 100%;
          background: white;
        }
    
    @keyframes bike-wheel-1 {
      0% { left: 9px; }
      5% { left: 9px; }
      10% { left: 8px; }
      15% { left: 6px; }
      20% { left: 3px; }
      25% { left: 0px; }
      30% { left: -4px; }
      35% { left: -8px; }
      40% { left: -10px; }
      45% { left: -12px; }
      50% { left: -12px; }
      55% { left: -12px; }
      60% { left: -12px; }
      65% { left: -10px; }
      70% { left: -7px; }
      75% { left: -3px; }
      80% { left: 2px; }
      85% { left: 5px; }
      90% { left: 8px; }
      95% { left: 9px; }
      100% { left: 9px; }
      0% { transform: rotate(0deg); }
      100% { transform: rotate(720deg); }
    }
    @keyframes bike-wheel-2 {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(720deg); }
    
      0% { left: 217px; }
      5% { left: 217px; }
      10% { left: 218px; }
      15% { left: 221px; }
      20% { left: 224px; }
      25% { left: 228px; }
      30% { left: 233px; }
      35% { left: 236px; }
      40% { left: 239px; }
      45% { left: 241px; }
      50% { left: 241px; }
      55% { left: 241px; }
      60% { left: 241px; }
      65% { left: 239px; }
      70% { left: 236px; }
      75% { left: 232px; }
      80% { left: 227px; }
      85% { left: 222px; }
      90% { left: 219px; }
      95% { left: 217px; }
      100% { left: 217px; }
    }
    @keyframes bike-star {
      0% {
        top: 135px; left: 89px;
        transform: rotate(43deg);
      }
      5% {
        top: 135px; left: 89px;
        transform: rotate(53deg);
      }
      10% {
        top: 135px; left: 89px;
        transform: rotate(77deg);
      }
      15% {
        top: 135px; left: 89px;
        transform: rotate(94deg);
      }
      20% {
        top: 135px; left: 93px;
        transform: rotate(114deg);
      }
      25% {
        top: 135px; left: 93px;
        transform: rotate(130deg);
      }
      30% {
        top: 135px; left: 99px;
        transform: rotate(152deg);
      }
      35% {
        top: 132px; left: 99px;
        transform: rotate(172deg);
      }
      40% {
        top: 131px; left: 102px;
        transform: rotate(192deg);
      }
      45% {
        top: 126px; left: 102px;
        transform: rotate(212deg);
      }
      50% {
        top: 126px; left: 102px;
        transform: rotate(232deg);
      }
      55% {
        top: 130px; left: 102px;
        transform: rotate(242deg);
      }
      60% {
        top: 130px; left: 102px;
        transform: rotate(252deg);
      }
      65% {
        top: 130px; left: 102px;
        transform: rotate(271deg);
      }
      70% {
        top: 130px; left: 102px;
        transform: rotate(288deg);
      }
      75% {
        top: 132px; left: 100px;
        transform: rotate(303deg);
      }
      80% {
        top: 132px; left: 100px;
        transform: rotate(325deg);
      }
      85% {
        top: 130px; left: 100px;
        transform: rotate(355deg);
      }
      90% {
        top: 135px; left: 93px;
        transform: rotate(370deg);
      }
      95% {
        top: 136px; left: 87px;
        transform: rotate(385deg);
      }
      100% {
        top: 135px; left: 89px;
        transform: rotate(43deg);
      }
    }
    @keyframes bike-pedal {
      0% { transform: rotate(-94deg); }
      5% { transform: rotate(-106deg); }
      10% { transform: rotate(-130deg); }
      15% { transform: rotate(-146deg); }
      20% { transform: rotate(-170deg); }
      25% { transform: rotate(-187deg); }
      30% { transform: rotate(-213deg); }
      35% { transform: rotate(-233deg); }
      40% { transform: rotate(-253deg); }
      45% { transform: rotate(-273deg); }
      50% { transform: rotate(-293deg); }
      55% { transform: rotate(-303deg); }
      60% { transform: rotate(-314deg); }
      65% { transform: rotate(-334deg); }
      70% { transform: rotate(-349deg); }
      75% { transform: rotate(-362deg); }
      80% { transform: rotate(-382deg); }
      85% { transform: rotate(-407deg); }
      90% { transform: rotate(-421deg); }
      95% { transform: rotate(-435deg); }
      100% { transform: rotate(-94deg); }
    }
    @keyframes bike-top-tube {
      0% {
        top: 34px; left: 124px;
        transform: rotate(4deg);
      }
      5% {
        top: 34px; left: 124px;
        transform: rotate(5deg);
      }
      10% {
        top: 35px; left: 124px;
        transform: rotate(5.5deg);
      }
      15% {
        top: 35px; left: 124px;
        transform: rotate(6deg);
      }
      20% {
        top: 37px; left: 124px;
        transform: rotate(7deg);
      }
      25% {
        top: 39px; left: 124px;
        transform: rotate(8deg);
      }
      30% {
        top: 43px; left: 124px;
        transform: rotate(9deg);
      }
      35% {
        top: 47px; left: 124px;
        transform: rotate(9deg);
      }
      40% {
        top: 50px; left: 124px;
        transform: rotate(9deg);
      }
      45% {
        top: 51px; left: 124px;
        transform: rotate(10deg);
      }
      50% {
        top: 52px; left: 124px;
        transform: rotate(9deg);
      }
      55% {
        top: 52px; left: 124px;
        transform: rotate(9deg);
      }
      60% {
        top: 52px; left: 124px;
        transform: rotate(8deg);
      }
      65% {
        top: 52px; left: 124px;
        transform: rotate(7deg);
      }
      70% {
        top: 50px; left: 124px;
        transform: rotate(6deg);
      }
      75% {
        top: 45px; left: 124px;
        transform: rotate(5deg);
      }
      80% {
        top: 40px; left: 124px;
        transform: rotate(4deg);
      }
      85% {
        top: 36px; left: 124px;
        transform: rotate(4deg);
      }
      90% {
        top: 35px; left: 124px;
        transform: rotate(4deg);
      }
      95% {
        top: 35px; left: 124px;
        transform: rotate(4deg);
      }
      100% {
        top: 34px; left: 124px;
        transform: rotate(4deg);
      }
    }
    @keyframes bike-down-tube {
      0% {
        top: 62px; left: 182px;
        transform: rotate(67deg);
      }
      5% {
        top: 62px; left: 182px;
        transform: rotate(67deg);
      }
      10% {
        top: 63px; left: 182px;
        transform: rotate(67deg);
      }
      15% {
        top: 63px; left: 182px;
        transform: rotate(69deg);
      }
      20% {
        top: 63px; left: 182px;
        transform: rotate(72deg);
      }
      25% {
        top: 67px; left: 182px;
        transform: rotate(72deg);
      }
      30% {
        top: 71px; left: 182px;
        transform: rotate(75deg);
      }
      35% {
        top: 71px; left: 184px;
        transform: rotate(77deg);
      }
      40% {
        top: 73px; left: 179px;
        transform: rotate(80deg);
      }
      45% {
        top: 75px; left: 179px;
        transform: rotate(80deg);
      }
      50% {
        top: 75px; left: 179px;
        transform: rotate(80deg);
      }
      55% {
        top: 75px; left: 179px;
        transform: rotate(80deg);
      }
      60% {
        top: 77px; left: 181px;
        transform: rotate(76deg);
      }
      65% {
        top: 77px; left: 181px;
        transform: rotate(73deg);
      }
      70% {
        top: 77px; left: 177px;
        transform: rotate(70deg);
      }
      75% {
        top: 72px; left: 179px;
        transform: rotate(67deg);
      }
      80% {
        top: 66px; left: 182px;
        transform: rotate(67deg);
      }
      85% {
        top: 63px; left: 182px;
        transform: rotate(67deg);
      }
      90% {
        top: 61px; left: 182px;
        transform: rotate(67deg);
      }
      95% {
        top: 61px; left: 182px;
        transform: rotate(67deg);
      }
      100% {
        top: 62px; left: 182px;
        transform: rotate(67deg);
      }
    }
    @keyframes bike-fo {
      0% {
        top: 90px; left: 233px;
        transform: rotate(-90deg);
      }
      5% {
        top: 90px; left: 233px;
        transform: rotate(-90deg);
      }
      10% {
        top: 90px; left: 232px;
        transform: rotate(-90deg);
      }
      15% {
        top: 93px; left: 238px;
        transform: rotate(-100deg);
      }
      20% {
        top: 93px; left: 239px;
        transform: rotate(-102deg);
      }
      25% {
        top: 95px; left: 241px;
        transform: rotate(-105deg);
      }
      30% {
        top: 97px; left: 245px;
        transform: rotate(-115deg);
      }
      35% {
        top: 97px; left: 245px;
        transform: rotate(-115deg);
      }
      40% {
        top: 97px; left: 245px;
        transform: rotate(-115deg);
      }
      45% {
        top: 100px; left: 247px;
        transform: rotate(-121deg);
      }
      50% {
        top: 102px; left: 247px;
        transform: rotate(-121deg);
      }
      55% {
        top: 102px; left: 246px;
        transform: rotate(-121deg);
      }
      60% {
        top: 102px; left: 246px;
        transform: rotate(-121deg);
      }
      65% {
        top: 102px; left: 246px;
        transform: rotate(-121deg);
      }
      70% {
        top: 100px; left: 246px;
        transform: rotate(-119deg);
      }
      75% {
        top: 97px; left: 242px;
        transform: rotate(-110deg);
      }
      80% {
        top: 94px; left: 239px;
        transform: rotate(-103deg);
      }
      85% {
        top: 91px; left: 239px;
        transform: rotate(-103deg);
      }
      90% {
        top: 90px; left: 237px;
        transform: rotate(-98deg);
      }
      95% {
        top: 90px; left: 237px;
        transform: rotate(-98deg);
      }
      100% {
        top: 90px; left: 233px;
        transform: rotate(-90deg);
      }
    }
    @keyframes bike-head-tube {
      0% {
        top: 44px; left: 246px;
        transform: rotate(-10deg);
      }
      5% {
        top: 44px; left: 246px;
        transform: rotate(-10deg);
      }
      10% {
        top: 44px; left: 246px;
        transform: rotate(-10deg);
      }
      15% {
        top: 48px; left: 246px;
        transform: rotate(-8deg);
      }
      20% {
        top: 51px; left: 246px;
        transform: rotate(-11deg);
      }
      25% {
        top: 55px; left: 246px;
        transform: rotate(-8deg);
      }
      30% {
        top: 59px; left: 246px;
        transform: rotate(-8deg);
      }
      35% {
        top: 59px; left: 247px;
        transform: rotate(-10deg);
      }
      40% {
        top: 63px; left: 246px;
        transform: rotate(-6deg);
      }
      45% {
        top: 66px; left: 246px;
        transform: rotate(-6deg);
      }
      50% {
        top: 68px; left: 246px;
        transform: rotate(-6deg);
      }
      55% {
        top: 68px; left: 245px;
        transform: rotate(-8deg);
      }
      60% {
        top: 67px; left: 245px;
        transform: rotate(-8deg);
      }
      65% {
        top: 65px; left: 245px;
        transform: rotate(-8deg);
      }
      70% {
        top: 62px; left: 245px;
        transform: rotate(-8deg);
      }
      75% {
        top: 56px; left: 245px;
        transform: rotate(-9deg);
      }
      80% {
        top: 50px; left: 245px;
        transform: rotate(-11deg);
      }
      85% {
        top: 47px; left: 245px;
        transform: rotate(-11deg);
      }
      90% {
        top: 45px; left: 245px;
        transform: rotate(-11deg);
      }
      95% {
        top: 44px; left: 245px;
        transform: rotate(-11deg);
      }
      100% {
        top: 44px; left: 246px;
        transform: rotate(-10deg);
      }
    }
    @keyframes bike-helm {
      0% {
        top: 22px; left: 242px;
        transform: rotate(-15deg);
      }
      5% {
        top: 22px; left: 242px;
        transform: rotate(-15deg);
      }
      10% {
        top: 22px; left: 242px;
        transform: rotate(-10deg);
      }
      15% {
        top: 26px; left: 244px;
        transform: rotate(-12deg);
      }
      20% {
        top: 28px; left: 244px;
        transform: rotate(-12deg);
      }
      25% {
        top: 32px; left: 244px;
        transform: rotate(-12deg);
      }
      30% {
        top: 36px; left: 244px;
        transform: rotate(-12deg);
      }
      35% {
        top: 40px; left: 245px;
        transform: rotate(-7deg);
      }
      40% {
        top: 43px; left: 245px;
        transform: rotate(-7deg);
      }
      45% {
        top: 45px; left: 245px;
        transform: rotate(-7deg);
      }
      50% {
        top: 46px; left: 244px;
        transform: rotate(-8deg);
      }
      55% {
        top: 46px; left: 244px;
        transform: rotate(-6deg);
      }
      60% {
        top: 44px; left: 243px;
        transform: rotate(-10deg);
      }
      65% {
        top: 42px; left: 242px;
        transform: rotate(-10deg);
      }
      70% {
        top: 39px; left: 242px;
        transform: rotate(-10deg);
      }
      75% {
        top: 34px; left: 242px;
        transform: rotate(-10deg);
      }
      80% {
        top: 30px; left: 242px;
        transform: rotate(-15deg);
      }
      85% {
        top: 25px; left: 242px;
        transform: rotate(-15deg);
      }
      90% {
        top: 22px; left: 242px;
        transform: rotate(-15deg);
      }
      95% {
        top: 22px; left: 242px;
        transform: rotate(-15deg);
      }
      100% {
        top: 22px; left: 242px;
        transform: rotate(-15deg);
      }
    }
    @keyframes bike-lock {
      0% {
        top: 46px; left: 201px;
        transform: rotate(20deg);
      }
      5% {
        top: 46px; left: 201px;
        transform: rotate(11deg);
      }
      10% {
        top: 47px; left: 203px;
        transform: rotate(5deg);
      }
      15% {
        top: 49px; left: 204px;
        transform: rotate(-1deg);
      }
      20% {
        top: 51px; left: 205px;
        transform: rotate(-2deg);
      }
      25% {
        top: 54px; left: 205px;
        transform: rotate(-2deg);
      }
      30% {
        top: 58px; left: 205px;
        transform: rotate(-2deg);
      }
      35% {
        top: 62px; left: 205px;
        transform: rotate(-2deg);
      }
      40% {
        top: 65px; left: 204px;
        transform: rotate(0deg);
      }
      45% {
        top: 67px; left: 203px;
        transform: rotate(5deg);
      }
      50% {
        top: 67px; left: 202px;
        transform: rotate(15deg);
      }
      55% {
        top: 67px; left: 201px;
        transform: rotate(25deg);
      }
      60% {
        top: 66px; left: 199px;
        transform: rotate(27deg);
      }
      65% {
        top: 65px; left: 199px;
        transform: rotate(37deg);
      }
      70% {
        top: 63px; left: 198px;
        transform: rotate(37deg);
      }
      75% {
        top: 58px; left: 199px;
        transform: rotate(38deg);
      }
      80% {
        top: 51px; left: 199px;
        transform: rotate(34deg);
      }
      85% {
        top: 48px; left: 199px;
        transform: rotate(34deg);
      }
      90% {
        top: 47px; left: 200px;
        transform: rotate(30deg);
      }
      95% {
        top: 46px; left: 202px;
        transform: rotate(23deg);
      }
      100% {
        top: 46px; left: 201px;
        transform: rotate(20deg);
      }
    }
    @keyframes bike-tubes {
      0% {
        top: 0px; left: 70px;
        transform: rotate(0deg);
      }
      5% {
        top: 0px; left: 70px;
        transform: rotate(1deg);
      }
      10% {
        top: 0px; left: 70px;
        transform: rotate(2deg);
      }
      15% {
        top: 0px; left: 70px;
        transform: rotate(3deg);
      }
      20% {
        top: 0px; left: 70px;
        transform: rotate(3.5deg);
      }
      25% {
        top: 2px; left: 68px;
        transform: rotate(5deg);
      }
      30% {
        top: 6px; left: 66px;
        transform: rotate(8deg);
      }
      35% {
        top: 10px; left: 64px;
        transform: rotate(10deg);
      }
      40% {
        top: 12px; left: 62px;
        transform: rotate(12deg);
      }
      45% {
        top: 13px; left: 62px;
        transform: rotate(13deg);
      }
      50% {
        top: 13px; left: 62px;
        transform: rotate(11deg);
      }
      55% {
        top: 13px; left: 62px;
        transform: rotate(13deg);
      }
      60% {
        top: 13px; left: 62px;
        transform: rotate(13deg);
      }
      65% {
        top: 12px; left: 62px;
        transform: rotate(11deg);
      }
      70% {
        top: 11px; left: 64px;
        transform: rotate(10deg);
      }
      75% {
        top: 9px; left: 66px;
        transform: rotate(8deg);
      }
      80% {
        top: 6px; left: 66px;
        transform: rotate(5deg);
      }
      85% {
        top: 4px; left: 67px;
        transform: rotate(3deg);
      }
      90% {
        top: 2px; left: 68px;
        transform: rotate(1deg);
      }
      95% {
        top: 1px; left: 70px;
        transform: rotate(0deg);
      }
      100% {
        top: 0px; left: 70px;
        transform: rotate(0deg);
      }
    }
    @keyframes bike-man {
      0% { top: 60px; left: 280px; }
      5% { top: 63px; left: 276px; }
      10% { top: 71px; left: 267px; }
      15% { top: 78px; left: 259px; }
      20% { top: 86px; left: 255px; }
      25% { top: 96px; left: 256px; }
      30% { top: 100px; left: 259px; }
      35% { top: 98px; left: 268px; }
      40% { top: 93px; left: 278px; }
      45% { top: 88px; left: 285px; }
      50% { top: 86px; left: 287px; }
      55% { top: 86px; left: 283px; }
      60% { top: 89px; left: 273px; }
      65% { top: 92px; left: 261px; }
      70% { top: 93px; left: 252px; }
      75% { top: 90px; left: 252px; }
      80% { top: 83px; left: 257px; }
      85% { top: 74px; left: 266px; }
      90% { top: 70px; left: 274px; }
      95% { top: 67px; left: 279px; }
      100% { top: 60px; left: 280px; }
    }
    @keyframes bike-shirt {
      0% {
        top: 45px; left: 88px;
        transform: rotate(54deg);
      }
      5% {
        top: 45px; left: 86px;
        transform: rotate(57deg);
      }
      10% {
        top: 38px; left: 89px;
        transform: rotate(60deg);
      }
      15% {
        top: 40px; left: 90px;
        transform: rotate(56deg);
      }
      20% {
        top: 40px; left: 91px;
        transform: rotate(56deg);
      }
      25% {
        top: 35px; left: 91px;
        transform: rotate(56deg);
      }
      30% {
        top: 33px; left: 91px;
        transform: rotate(56deg);
      }
      35% {
        top: 33px; left: 91px;
        transform: rotate(56deg);
      }
      40% {
        top: 38px; left: 91px;
        transform: rotate(56deg);
      }
      45% {
        top: 36px; left: 91px;
        transform: rotate(56deg);
      }
      50% {
        top: 37px; left: 92px;
        transform: rotate(59deg);
      }
      55% {
        top: 36px; left: 92px;
        transform: rotate(59deg);
      }
      60% {
        top: 32px; left: 92px;
        transform: rotate(59deg);
      }
      65% {
        top: 28px; left: 92px;
        transform: rotate(59deg);
      }
      70% {
        top: 28px; left: 92px;
        transform: rotate(59deg);
      }
      75% {
        top: 35px; left: 93px;
        transform: rotate(55deg);
      }
      80% {
        top: 41px; left: 90px;
        transform: rotate(55deg);
      }
      85% {
        top: 46px; left: 90px;
        transform: rotate(51deg);
      }
      90% {
        top: 46px; left: 90px;
        transform: rotate(51deg);
      }
      95% {
        top: 46px; left: 90px;
        transform: rotate(51deg);
      }
      100% {
        top: 45px; left: 88px;
        transform: rotate(54deg);
      }
    }
    @keyframes bike-head {
      0% {
        top: 44px; left: 175px;
        transform: rotate(20deg);
      }
      5% {
        top: 44px; left: 177px;
        transform: rotate(20deg);
      }
      10% {
        top: 44px; left: 180px;
        transform: rotate(18deg);
      }
      15% {
        top: 44px; left: 181px;
        transform: rotate(18deg);
      }
      20% {
        top: 44px; left: 182px;
        transform: rotate(18deg);
      }
      25% {
        top: 44px; left: 183px;
        transform: rotate(17deg);
      }
      30% {
        top: 44px; left: 184px;
        transform: rotate(17deg);
      }
      35% {
        top: 45px; left: 182px;
        transform: rotate(17deg);
      }
      40% {
        top: 45px; left: 182px;
        transform: rotate(17deg);
      }
      45% {
        top: 45px; left: 183px;
        transform: rotate(17deg);
      }
      50% {
        top: 45px; left: 183px;
        transform: rotate(17deg);
      }
      55% {
        top: 45px; left: 184px;
        transform: rotate(17deg);
      }
      60% {
        top: 46px; left: 186px;
        transform: rotate(17deg);
      }
      65% {
        top: 46px; left: 187px;
        transform: rotate(17deg);
      }
      70% {
        top: 46px; left: 187px;
        transform: rotate(17deg);
      }
      75% {
        top: 47px; left: 185px;
        transform: rotate(17deg);
      }
      80% {
        top: 47px; left: 180px;
        transform: rotate(17deg);
      }
      85% {
        top: 47px; left: 176px;
        transform: rotate(14deg);
      }
      90% {
        top: 47px; left: 176px;
        transform: rotate(17deg);
      }
      95% {
        top: 44px; left: 175px;
        transform: rotate(20deg);
      }
      100% {
        top: 44px; left: 175px;
        transform: rotate(20deg);
      }
    }
    @keyframes bike-back-arm {
      0% { transform: rotate(2deg); }
      5% { transform: rotate(0deg); }
      10% { transform: rotate(-4deg); }
      15% { transform: rotate(-9deg); }
      20% { transform: rotate(-12deg); }
      25% { transform: rotate(-10deg); }
      30% { transform: rotate(-7deg); }
      35% { transform: rotate(-1deg); }
      40% { transform: rotate(2deg); }
      45% { transform: rotate(2deg); }
      50% { transform: rotate(2deg); }
      55% { transform: rotate(0deg); }
      60% { transform: rotate(-4deg); }
      65% { transform: rotate(-10deg); }
      70% { transform: rotate(-14deg); }
      75% { transform: rotate(-13deg); }
      80% { transform: rotate(-8deg); }
      85% { transform: rotate(-1deg); }
      90% { transform: rotate(1deg); }
      95% { transform: rotate(1deg); }
      100% { transform: rotate(2deg); }
    }
    @keyframes bike-back-forearm {
      0% { transform: rotate(135deg); }
      5% { transform: rotate(133deg); }
      10% { transform: rotate(125deg); }
      15% { transform: rotate(120deg); }
      20% { transform: rotate(116deg); }
      25% { transform: rotate(108deg); }
      30% { transform: rotate(108deg); }
      35% { transform: rotate(110deg); }
      40% { transform: rotate(121deg); }
      45% { transform: rotate(132deg); }
      50% { transform: rotate(137deg); }
      55% { transform: rotate(136deg); }
      60% { transform: rotate(131deg); }
      65% { transform: rotate(127deg); }
      70% { transform: rotate(124deg); }
      75% { transform: rotate(120deg); }
      80% { transform: rotate(118deg); }
      85% { transform: rotate(119deg); }
      90% { transform: rotate(128deg); }
      95% { transform: rotate(138deg); }
      100% { transform: rotate(135deg); }
    }
    @keyframes bike-back-hand {
      0% { transform: rotate(181deg); }
      5% { transform: rotate(181deg); }
      10% { transform: rotate(181deg); }
      15% { transform: rotate(201deg); }
      20% { transform: rotate(210deg); }
      25% { transform: rotate(210deg); }
      30% { transform: rotate(210deg); }
      35% { transform: rotate(213deg); }
      40% { transform: rotate(212deg); }
      45% { transform: rotate(212deg); }
      50% { transform: rotate(180deg); }
      55% { transform: rotate(180deg); }
      60% { transform: rotate(193deg); }
      65% { transform: rotate(201deg); }
      70% { transform: rotate(201deg); }
      75% { transform: rotate(210deg); }
      80% { transform: rotate(200deg); }
      85% { transform: rotate(200deg); }
      90% { transform: rotate(200deg); }
      95% { transform: rotate(200deg); }
      100% { transform: rotate(181deg); }
    }
    @keyframes bike-back-leg {
      0% { transform: rotate(-58deg); }
      5% { transform: rotate(-64deg); }
      10% { transform: rotate(-74deg); }
      15% { transform: rotate(-76deg); }
      20% { transform: rotate(-76deg); }
      25% { transform: rotate(-76deg); }
      30% { transform: rotate(-64deg); }
      35% { transform: rotate(-53deg); }
      40% { transform: rotate(-43deg); }
      45% { transform: rotate(-28deg); }
      50% { transform: rotate(-23deg); }
      55% { transform: rotate(-25deg); }
      60% { transform: rotate(-33deg); }
      65% { transform: rotate(-40deg); }
      70% { transform: rotate(-54deg); }
      75% { transform: rotate(-62deg); }
      80% { transform: rotate(-62deg); }
      85% { transform: rotate(-65deg); }
      90% { transform: rotate(-63deg); }
      95% { transform: rotate(-57deg); }
      100% { transform: rotate(-58deg); }
    }
    @keyframes bike-back-leg-shin {
      0% { transform: rotate(101deg); }
      5% { transform: rotate(99deg); }
      10% { transform: rotate(99deg); }
      15% { transform: rotate(92deg); }
      20% { transform: rotate(88deg); }
      25% { transform: rotate(90deg); }
      30% { transform: rotate(82deg); }
      35% { transform: rotate(72deg); }
      40% { transform: rotate(68deg); }
      45% { transform: rotate(53deg); }
      50% { transform: rotate(52deg); }
      55% { transform: rotate(61deg); }
      60% { transform: rotate(74deg); }
      65% { transform: rotate(84deg); }
      70% { transform: rotate(100deg); }
      75% { transform: rotate(111deg); }
      80% { transform: rotate(113deg); }
      85% { transform: rotate(115deg); }
      90% { transform: rotate(112deg); }
      95% { transform: rotate(105deg); }
      100% { transform: rotate(101deg); }
    }
    @keyframes bike-back-leg-ked {
      0% { transform: rotate(-30deg); }
      5% { transform: rotate(-20deg); }
      10% { transform: rotate(2deg); }
      15% { transform: rotate(16deg); }
      20% { transform: rotate(28deg); }
      25% { transform: rotate(34deg); }
      30% { transform: rotate(27deg); }
      35% { transform: rotate(37deg); }
      40% { transform: rotate(45deg); }
      45% { transform: rotate(44deg); }
      50% { transform: rotate(36deg); }
      55% { transform: rotate(35deg); }
      60% { transform: rotate(23deg); }
      65% { transform: rotate(3deg); }
      70% { transform: rotate(2deg); }
      75% { transform: rotate(1deg); }
      80% { transform: rotate(-10deg); }
      85% { transform: rotate(-6deg); }
      90% { transform: rotate(-9deg); }
      95% { transform: rotate(-27deg); }
      100% { transform: rotate(-30deg); }
    }
    @keyframes bike-back-leg-ked-nose {
      0% { transform: rotate(-10deg); }
      5% { transform: rotate(-12deg); }
      10% { transform: rotate(-21deg); }
      15% { transform: rotate(-24deg); }
      20% { transform: rotate(-27deg); }
      25% { transform: rotate(-27deg); }
      30% { transform: rotate(-39deg); }
      35% { transform: rotate(-50deg); }
      40% { transform: rotate(-48deg); }
      45% { transform: rotate(-63deg); }
      50% { transform: rotate(-60deg); }
      55% { transform: rotate(-67deg); }
      60% { transform: rotate(-60deg); }
      65% { transform: rotate(-46deg); }
      70% { transform: rotate(-40deg); }
      75% { transform: rotate(-41deg); }
      80% { transform: rotate(-36deg); }
      85% { transform: rotate(-43deg); }
      90% { transform: rotate(-38deg); }
      95% { transform: rotate(-16deg); }
      100% { transform: rotate(-10deg); }
    }
    @keyframes bike-front-leg {
      0% { transform: rotate(-14deg); }
      5% { transform: rotate(-19deg); }
      10% { transform: rotate(-36deg); }
      15% { transform: rotate(-47deg); }
      20% { transform: rotate(-60deg); }
      25% { transform: rotate(-72deg); }
      30% { transform: rotate(-75deg); }
      35% { transform: rotate(-77deg); }
      40% { transform: rotate(-77deg); }
      45% { transform: rotate(-79deg); }
      50% { transform: rotate(-77deg); }
      55% { transform: rotate(-73deg); }
      60% { transform: rotate(-81deg); }
      65% { transform: rotate(-78deg); }
      70% { transform: rotate(-70deg); }
      75% { transform: rotate(-63deg); }
      80% { transform: rotate(-50deg); }
      85% { transform: rotate(-37deg); }
      90% { transform: rotate(-28deg); }
      95% { transform: rotate(-23deg); }
      100% { transform: rotate(-14deg); }
    }
    @keyframes bike-front-leg-shin {
      0% { transform: rotate(19deg); }
      5% { transform: rotate(33deg); }
      10% { transform: rotate(65deg); }
      15% { transform: rotate(84deg); }
      20% { transform: rotate(103deg); }
      25% { transform: rotate(119deg); }
      30% { transform: rotate(126deg); }
      35% { transform: rotate(129deg); }
      40% { transform: rotate(127deg); }
      45% { transform: rotate(124deg); }
      50% { transform: rotate(117deg); }
      55% { transform: rotate(107deg); }
      60% { transform: rotate(100deg); }
      65% { transform: rotate(84deg); }
      70% { transform: rotate(66deg); }
      75% { transform: rotate(56deg); }
      80% { transform: rotate(42deg); }
      85% { transform: rotate(32deg); }
      90% { transform: rotate(26deg); }
      95% { transform: rotate(27deg); }
      100% { transform: rotate(19deg); }
    }
    @keyframes bike-front-leg-ked {
      0% { transform: rotate(73deg); }
      5% { transform: rotate(58deg); }
      10% { transform: rotate(39deg); }
      15% { transform: rotate(25deg); }
      20% { transform: rotate(16deg); }
      25% { transform: rotate(9deg); }
      30% { transform: rotate(-14deg); }
      35% { transform: rotate(-17deg); }
      40% { transform: rotate(-14deg); }
      45% { transform: rotate(-8deg); }
      50% { transform: rotate(-12deg); }
      55% { transform: rotate(-7deg); }
      60% { transform: rotate(30deg); }
      65% { transform: rotate(42deg); }
      70% { transform: rotate(51deg); }
      75% { transform: rotate(64deg); }
      80% { transform: rotate(60deg); }
      85% { transform: rotate(70deg); }
      90% { transform: rotate(74deg); }
      95% { transform: rotate(74deg); }
      100% { transform: rotate(73deg); }
    }
    @keyframes bike-front-leg-ked-nose {
      0% { transform: rotate(-70deg); }
      5% { transform: rotate(-65deg); }
      10% { transform: rotate(-60deg); }
      15% { transform: rotate(-51deg); }
      20% { transform: rotate(-54deg); }
      25% { transform: rotate(-48deg); }
      30% { transform: rotate(-30deg); }
      35% { transform: rotate(-28deg); }
      40% { transform: rotate(-26deg); }
      45% { transform: rotate(-30deg); }
      50% { transform: rotate(-20deg); }
      55% { transform: rotate(-15deg); }
      60% { transform: rotate(-39deg); }
      65% { transform: rotate(-40deg); }
      70% { transform: rotate(-40deg); }
      75% { transform: rotate(-50deg); }
      80% { transform: rotate(-47deg); }
      85% { transform: rotate(-56deg); }
      90% { transform: rotate(-57deg); }
      95% { transform: rotate(-64deg); }
      100% { transform: rotate(-70deg); }
    }
    @keyframes bike-arm {
      0% { transform: rotate(0deg); }
      5% { transform: rotate(-2deg); }
      10% { transform: rotate(-5deg); }
      15% { transform: rotate(-11deg); }
      20% { transform: rotate(-14deg); }
      25% { transform: rotate(-11deg); }
      30% { transform: rotate(-9deg); }
      35% { transform: rotate(-3deg); }
      40% { transform: rotate(0deg); }
      45% { transform: rotate(1deg); }
      50% { transform: rotate(0deg); }
      55% { transform: rotate(-2deg); }
      60% { transform: rotate(-6deg); }
      65% { transform: rotate(-12deg); }
      70% { transform: rotate(-16deg); }
      75% { transform: rotate(-14deg); }
      80% { transform: rotate(-9deg); }
      85% { transform: rotate(-3deg); }
      90% { transform: rotate(0deg); }
      95% { transform: rotate(0deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes bike-forearm {
      0% { transform: rotate(139deg); }
      5% { transform: rotate(136deg); }
      10% { transform: rotate(126deg); }
      15% { transform: rotate(124deg); }
      20% { transform: rotate(119deg); }
      25% { transform: rotate(109deg); }
      30% { transform: rotate(109deg); }
      35% { transform: rotate(113deg); }
      40% { transform: rotate(124deg); }
      45% { transform: rotate(133deg); }
      50% { transform: rotate(139deg); }
      55% { transform: rotate(139deg); }
      60% { transform: rotate(133deg); }
      65% { transform: rotate(130deg); }
      70% { transform: rotate(126deg); }
      75% { transform: rotate(121deg); }
      80% { transform: rotate(120deg); }
      85% { transform: rotate(123deg); }
      90% { transform: rotate(131deg); }
      95% { transform: rotate(140deg); }
      100% { transform: rotate(139deg); }
    }
    @keyframes bike-hand {
      0% { transform: rotate(181deg); }
      5% { transform: rotate(181deg); }
      10% { transform: rotate(201deg); }
      15% { transform: rotate(206deg); }
      20% { transform: rotate(216deg); }
      25% { transform: rotate(216deg); }
      30% { transform: rotate(216deg); }
      35% { transform: rotate(208deg); }
      40% { transform: rotate(200deg); }
      45% { transform: rotate(193deg); }
      50% { transform: rotate(185deg); }
      55% { transform: rotate(189deg); }
      60% { transform: rotate(197deg); }
      65% { transform: rotate(204deg); }
      70% { transform: rotate(208deg); }
      75% { transform: rotate(207deg); }
      80% { transform: rotate(203deg); }
      85% { transform: rotate(196deg); }
      90% { transform: rotate(186deg); }
      95% { transform: rotate(181deg); }
      100% { transform: rotate(181deg); }
    }
    @keyframes bike-cloud {
      0% { left: 800px; }
      100% { left: -100px; }
    }`, 
    js:`        
    
    
          /*   JS is EMPTY   */`
    },
    {
      html:`
      
      
          <!-- HTML EMPTY  -->`,
      css:`
      
             AND CSS EPMTY

            ONLY VANILLA JS

           TAP the RUN button

         IT S will be a "MAGIC"`,
      js:`document.write ('<table style="border:solid 1px violet;" width="100%" border="1">');
for (i=1; i<6; i++) {
 document.writeln("<tr>");
for (j=1; j<6; j++) document.write("<td style='color:yellow;'>" + i + j + "</td>");
 document.writeln("</tr>");
}
 document.write ("</table> ");
console.log('HOMO CODERUS, inc 2023 !!!');
      `
    },
  ];