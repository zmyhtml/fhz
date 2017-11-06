/*
* @Author: Administrator
* @Date:   2017-11-06 14:17:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-06 14:18:19
*/

'use strict';

/**
 * m.guoki.com - 鏋滃
 * @version v1.0
 * @link http://www.guoki.com
 * @author zhangsiyuan(121838148@qq.com) 
 */
$(function(){TouchSlide({slideCell:"#slideBox",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPage:!0,autoPlay:!0,delayTime:800}),TouchSlide({slideCell:"#gameDetail",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPlay:!1,autoPage:!0}),TouchSlide({slideCell:"#slideBoxMid",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPage:!0,autoPlay:!0,delayTime:800});new Swiper("#giftBoxMid",{pagination:".swiper-pagination",slidesPerView:1.7,paginationClickable:!0,spaceBetween:10,freeMode:!0});TouchSlide({slideCell:"#tabBox1",endFun:function(e){var l=document.getElementById("tabBox1-bd");l.parentNode.style.height=l.children[e].children[0].offsetHeight+"px",e>0&&(l.parentNode.style.transition="200ms")}})});