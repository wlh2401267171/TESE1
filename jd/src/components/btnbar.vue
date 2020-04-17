<template>
    <div class="btnbar flex">
        <!-- 客服 -->
        <div class="btn_icon">
            <i class="icon1"></i>
            <span class="txt">客服</span>
        </div>
        <!-- 店铺 -->
        <div class="btn_icon">
            <i class="icon2"></i>
            <span class="txt2">店铺</span>
        </div>
        <!-- 购物车 -->
        <div class="btn_icon">
            <i class="icon3"></i>
            <span class="txt3">购物车</span>
        </div>
        <div class="jiaru  flex-item" @click="show=true">加入购物车</div>
        <div class="goumai flex-item" @click="show=true">立即购买</div>

        <!-- sku交互 -->
        <transition name='slide'>
        <div class="sku" v-show="show">
            <div class="header ">
                <img src="https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/115552/11/435/43188/5e8c4769E63fd2a4c/621d7fe1d69cebb9.jpg!q70.dpg.webp"/>>
                <p class="price">￥{{product[sizeindex].price}}</p>
                <span class="wenzi"  >已经选择:{{product[sizeindex].title}}</span>
                <p class="close" v-show="show" @click="show=false"> </p>
            </div>
            <!-- 商品种类选择 -->
            <div class="product-list"> 
                <div class='color'>颜色</div>
                <div class="choose">
                    <ul>
                        <li v-for='(item,index) in  product' :key='index' :class="{active:sizeindex==index}" @click="sizeindex=index">
                            <span v-text="item.title"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content flex">
                <div class="content-left flex-item">加入购物车</div>
                <div class="content-right flex-item">立即购买</div>
            </div>

        </div>
         </transition>
        <div class="masku" v-show="show" @click="show=false"></div>
       


    </div>
</template>


<script>
export default {
    data(){
        return{
            sizeindex:0,
            show:false,
            product:[
            {price:2222.00,title:'白金4G+32G'},
            {price:3333.00,title:'北极光4G+32G'},
            {price:4444.00,title:'玫瑰紫4G+32G'},
            {price:5555.00,title:'玫瑰红8G+64G'},
            {price:6666.00,title:'粉红16G+32G'},
            {price:7777.00,title:'炫彩金16G+64G'},
            {price:7778.00,title:'黑曜石16G+256G'},
            {price:7778.00,title:'白色16G+256G'},
            {price:7778.00,title:'金色16G+256G'},
            {price:7977.00,title:'定制16G+254G'},

            ]
        }
    }
}
</script>

<style lang='less'>
.btnbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    border-top: 1px solid #ddd;
    .btn_icon{
        width:14%;
        .icon1{
            display: block;
            width: 0.4rem;
            height: 0.5rem;
            margin: 5px auto 0;
            position: relative;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTCcnJygoKCYmJiYmJiYmJjU1NS0tLSYmJiYmJicnJyYmJiYmJiYmJikpKScnJyYmJiYmJiYmJiYmJo/aPS4AAAATdFJOUwBnLMf61QkRufFZ43iKHU9AnalhwN5+AAABwUlEQVQ4y9VV2baDIAyUPaxC+f9/vWGrWPCevpY34zhJJhM8jt8/6vTArNaWgT/Vf0hJGM/T4YzIJ1Kv83K039KbCuWYnQapaDRONLhZaV/lhSA3ntDwrw9yVaLiXPMRW16oBZvkvpNPNMNiyZNGBhVi16ND7Pms6IncbjxQ/BR5jU0rMFkUAyvhtAdQCDiOyLNewTrzeByAkvQWkJjWAKzgFqVI3XokDdU4ytBxHs7Epk3PB7XQVgUZ1ZVu+9B166l1QkYdrFbxPmLYQkxBOtTDGanbjEFoLcDNQZmz7Q1nrA9Y2KscGFQwH3lDKUZs0UGUAsJgxk5xfIplS1cstZmpOsRWM87Hl7Igc//hJel5Bnlhaqe6BGTCXLOhVfFn9aLEvuJbrKYpLe4DEqnCTSFQ3EaH0+wwOEJ6cwamjeXQNyroMcA2lre9lUlN52RGSIp5QhS/ZI+XhILJoSU7Jt0J14Weihiro91uCYme9+RCZ2vkpoSsl5UrsmE83S+4gt2aZhjZQvKehNGLe7oXxXTJmUbsn7c+umsqaBR734sNP40nqZecRRtl+c2lDp1fffUP6A3QL38ZZ0KThB//7/0BZ1AeT5gMIUIAAAAASUVORK5CYII=);
            background-size: auto 0.4rem;
            background-repeat: no-repeat;
        }
        .txt{
            font-size: 0.18rem;
            color: #262626;
            display: block;
            line-height: 0.18rem;
            margin-top: 0.12rem;  
            text-align: center; 
        }
        .icon2{
            display: block;
            width: 0.4rem;
            height: 0.5rem;
            margin: 5px auto 0;
            position: relative;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTCYmJiYmJigoKC0tLScnJyYmJiYmJiYmJicnJygoKCgoKCYmJgxMKE0AAAAMdFJOUwDxfRoSV+DK+r1lSKRYoZoAAAD6SURBVCjPY2CgLeAqPIMExBdARJnnnEEBJw3Awpxn0MAEsPCaE8rIRhr1nALTNYdQrdI5DqZkDqMK2xwEU2cOoArznBm2wkxCIKaiAkIYHCYeJxwYGFh6WhBhMucokIg5E8DAwHoGzISEoM4xBwaWnDMpDAxuZ8BMSEA7nkl1Djtz5liwac6ZM6kmYWdEwMKsPaCY0gARh8DMAIiLAoFMaVaZM2cOBmwECUMdyqIuWOTA4FQorgJi1pzBmmp4yBMGexlTuKcBlOSAjj5mgCwMCSuQ0xQwhDFVoyYraACiJ0JoEkRLsrAEi5HAJzBgyw7QzICWeWBZhwoAAIOGsvXzbOIqAAAAAElFTkSuQmCC);
            background-size: auto 0.4rem;
            background-repeat: no-repeat;
        }
        .txt2{
            text-align: center; 
            font-size: 0.18rem;
            color: #262626;
            display: block;
            line-height: 0.18rem;
            margin-top: 0.12rem;   
        }
        .icon3{
            display: block;
            width: 0.4rem;
            height: 0.5rem;
            margin: 5px auto 0;
            position: relative;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTCYmJiwsLCYmJiYmJiYmJj09PSYmJikpKSYmJiYmJiYmJicnJycnJyYmJikpKSYmJk5o+D8AAAAQdFJOUwDUDrR3agX2GceE6lVDkiaLaM1VAAABOElEQVQ4y81V2RKDIAyUmwhq/v9ri3IYsAIzfWmeOuk2x+6GLsu/xGrWebBBo6fBDvGYBgPiNg0WiGp+QUR57YkvYZi0GawQ92vPTjifwBui6Fa+IqEPRNad8/CBMBcn4WGqwVqWIa6FaDtAq9J9gujQ3RWi/RicRt0j0b0IjEFFdC/2AvGR6F6wvJYeEn1KkW1MiK5lLFehSO+A4OVThf5iTFbs/72yNuQ+RkRvdKl9YP+dcisHRDPqhwHRhLhKzDfLkVq2eGriok9quFZgHCjy3pwZA4qb+mEJjpYQuWWWnsd1rI0bJFGCpdqa3bnKwdadeklrpSnzqTvjeKtR/DntUTLweErj0VoKzhnzCxjupuKRacfw9zr+sWDrMg25N+g2Ix5/DDx9B/w9Q2p7EcT1T7n18mfxAZ6oHL1x+TvFAAAAAElFTkSuQmCC);
            background-size: auto 0.4rem;
            background-repeat: no-repeat;
        }
        .txt3{
            text-align: center; 
            font-size: 0.18rem;
            color: #262626;
            display: block;
            line-height: 0.18rem;
            margin-top: 0.12rem;   
        }
    }
    .jiaru{
    position: relative;
    z-index: 10;
    line-height: 38px;
    height: 38px;
    text-align: center;
    background-image: -webkit-linear-gradient(315deg,#f2140c,#f2270c 70%,#f24d0c);
    background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
    color: #fff;
    font-size: 13px;
    border-radius: 21px;
    margin: 2px 5px 0 0;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: pointer;

    }
    .goumai{
        position: relative;
    z-index: 10;
    line-height: 38px;
    height: 38px;
    text-align: center;
    background-image: -webkit-linear-gradient(315deg,#f2140c,#f2270c 70%,#f24d0c);
    background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
    color: #fff;
    font-size: 13px;
    border-radius: 21px;
    margin: 2px 5px 0 0;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: pointer;
    }
    .sku{
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 100%;
        min-height: 9.5rem;
        max-height: 12.5rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color:#fff;
        z-index: 240126717;
        .header{
                display: flex;
                -webkit-box-align: end;
                -webkit-align-items: flex-end;
                align-items: flex-end;
                text-align: left;
                margin-bottom: 18px;
                position: relative;
                height: 46px;
                line-height: 46px;
                padding-left: 10px;
                font-size: 16px;
                color: #333;
            img{
                position: absolute;
                left: 18px;
                top: 18px;
                border-radius: 0.12rem;
                width: 2rem;
                height: 2rem;
                
                }
                .price{
                    font-family: JDZH-Regular;
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    color: #f2270c;
                    font-size: 12px;
                    font-size: 0.48rem;
                    position: absolute;
                    left:2.34rem;
                    top:0.4rem;

                }
                .wenzi{
                    position: absolute;
                    left:2.34rem;
                    top:1.5rem;
                    word-break: break-all;
                    font-size: 0.25rem;
                    color: #333;
                    line-height: 1rem;
                    padding-right: 0.2rem;

                }
                .close{
                    position: absolute;
                    right: 0.36rem;
                    top:0;
                    width: 0.6rem;
                    height: 0.6rem;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTPLy8vPz8/f39/Ly8vLy8vLy8vn5+fLy8vPz8/Ly8vPz8/Ly8oyMjLa2tpaWlsXFxWJZmN4AAAAMdFJOUwDociPz1lIPf6i/gtWaRhUAAADZSURBVDjLlZXbDoQgDEQBi9yK+P9fu7hZFbHK7DzZeOIE2o5KXTSZEC2RjcFM6lEuWW5kk5MxT9yJvIDOmgXpuec8P8hfbQM/KrT2L1wlAd/OfeaBfidyegRqhxgf5o7GIG2fTGe9luUslrKeRapg09+S80EuOZem73VeGof6ciebx68mZVgie45N15QdKB1X2xNZIi/H2hSVZZHsZdXtFmWSZPBOkmgtkFY8jOAe5eu5kwG/cLiF8FDgYwYPLrwK+HLB64oHAB4peEjBsfdHkOLRjIf94PfxAYczOyeXERCMAAAAAElFTkSuQmCC);
                    background-size: cover;

                }

        }
        .product-list{
           position: fixed;
           top:6rem;
            .color{
                font-size: 0.36rem;
                color: #262626;
                margin: 0 0.36rem ;
                font-weight: 700;
                height: 0.8rem;
                line-height: 0.8rem;
            }
            .choose{
                li{
                    padding: 0 18px;
                    min-width: 20px;
                    max-width: 270px;
                    overflow: hidden;
                    height: 30px;
                    line-height: 30px;
                    float: left;
                    text-align: center;
                    margin-left: 12px;
                    margin-bottom: 10px;
                    font-size: 11px;
                    color: #262626;
                    background: #f2f2f2;
                    border-radius: 15px;
                }
                &.active{
							color: #fff;
							background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
						}
            }
        }
        .content{
            position: absolute;
            bottom: 0;
            width: 100%;
            .content-left{
                     width: 50%;
                    height: 38px;
                    line-height: 38px;
                    border-radius: 21px;
                    box-shadow: 0 3px 6px 0 rgba(255,65,66,.2);
                    color: #fff;
                    font-size: 13px;
                    text-align: center;
                    margin-right: 12px;
                    background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);

            }
            .content-right{
                width: 50%;
                height: 38px;
                line-height: 38px;
                border-radius: 21px;
                box-shadow: 0 3px 6px 0 rgba(255,65,66,.2);
                color: #fff;
                font-size: 13px;
                text-align: center;
                margin-right: 12px;
                background-image: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
                
            }
        }

    }
    .masku{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background-color: rgba(0,0,0,0.7);
    }
		.slide-enter {
			transform: translateY(100%);
		}
		.slide-enter-active {
			transition: all 0.3s linear;
		}
		.slide-enter-to {
			transform: translateY(0%);
		}
		.slide-leave {
			transform: translateY(100%);
		}
		.slide-leave-active {}
		.slide-leave-to {
			transform: translateY(100%);
		}

}
</style>