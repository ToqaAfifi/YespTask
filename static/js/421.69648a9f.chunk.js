"use strict";(self.webpackChunktask=self.webpackChunktask||[]).push([[421],{4941:function(t,e,r){r.r(e),r.d(e,{default:function(){return Q}});var n=r(7689),a=r(1413),i=r(5671),s=r(3144),c=r(136),o=r(7277),u=r(2791),l=r(7151),d=r(1968),p=r.n(d),y=r(4841),x="ImageSlider_paper__PTGp+",h="ImageSlider_image__o4A2z",f=r(184),m={autoPlay:!0,animation:"slide",indicators:!0,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!0,height:300},v=function(t){var e=t.images;return(0,f.jsx)(p(),(0,a.Z)((0,a.Z)({},m),{},{children:e.map((function(t,e){return(0,f.jsx)(y.Z,{className:x,children:(0,f.jsx)("img",{src:t,alt:"product",className:h})},e)}))}))},j=r(6694),_=r(5771),g=r(8820),k=r(4721),Z=r(977),P=r(6600),b=r(6513),q="ProductDetails_row__Mn-5k",N="ProductDetails_content__48f0D",D="ProductDetails_category__PTgKR",C="ProductDetails_rating__s-ZOO",w="ProductDetails_priceBefore__N0YWu",O="ProductDetails_price__Dcejw",S="ProductDetails_quantity__PBdKg",B="ProductDetails_quantityInput__OltQB",H=function(t){(0,c.Z)(r,t);var e=(0,o.Z)(r);function r(t){var n;return(0,i.Z)(this,r),(n=e.call(this,t)).calculatePriceBeforeDisc=function(t,e){return t+t*(e/100)},n.addQuantityHandler=function(t){var e=n.state.product.stock;+n.state.quantity+1>e||n.setState((function(t){var e=(0,a.Z)({},t.product);return e.quantity=+t.quantity+1,{product:e,quantity:+t.quantity+1}}))},n.removeQuantityHandler=function(t){+n.state.quantity-1<1||n.setState((function(t){var e=(0,a.Z)({},t.product);return e.quantity=+t.quantity-1,{product:e,quantity:+t.quantity-1}}))},n.state={product:{},quantity:"1"},n}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){var t=this;this.setState((function(e){var r=(0,a.Z)({},t.props.product);return r.quantity=1,{product:r}}))}},{key:"render",value:function(){var t=this,e=this.state.product;return 0===Object.keys(e).length?(0,f.jsx)("p",{children:"No Data"}):(0,f.jsx)(l.Z.Consumer,{children:function(r){var n=r.addProduct;return(0,f.jsxs)("div",{className:q,children:[(0,f.jsx)("div",{className:N,children:(0,f.jsx)(v,{images:e.images})}),(0,f.jsxs)("div",{className:N,children:[(0,f.jsx)("h1",{children:e.title}),(0,f.jsx)("p",{children:e.description}),(0,f.jsx)("p",{className:D,children:e.category}),(0,f.jsxs)("p",{className:C,children:[(0,f.jsx)(j.Z,{value:e.rating,readOnly:!0}),e.rating," Of 5"]}),(0,f.jsxs)("div",{className:O,children:[e.price," LE",(0,f.jsx)("span",{className:w,children:t.calculatePriceBeforeDisc(e.price,e.discountPercentage)}),(0,f.jsx)(_.Z,{label:"".concat(e.discountPercentage,"% Off"),color:"warning"})]}),(0,f.jsx)(k.Z,{style:{margin:"12px 0"}}),(0,f.jsx)("h3",{children:"Quantity"}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)(Z.Z,{style:{backgroundColor:"var(--secondary-color)",color:"black",position:"absolute",margin:"3px 170px"},onClick:function(e){return t.addQuantityHandler(e)},children:(0,f.jsx)(g.Lfi,{size:20})}),(0,f.jsx)("input",{name:"quantity",value:t.state.quantity,readOnly:!0,className:B}),(0,f.jsx)(Z.Z,{style:{backgroundColor:"var(--secondary-color)",color:"black",position:"absolute",margin:"3px 0px"},onClick:function(e){return t.removeQuantityHandler(e)},children:(0,f.jsx)(g.ywL,{size:20})})]}),(0,f.jsxs)("div",{className:N,children:[(0,f.jsx)(P.Z,{styles:{borderRadius:"35px",backgroundColor:"var(--primary-color)",color:"white",fontSize:"15px",margin:"0 8%"},onClick:function(){return n(e)},children:"Add to Cart"}),(0,f.jsx)(b.Z,{styles:{borderRadius:"35px",backgroundColor:"var(--secondary-color)",color:"black",fontSize:"15px",margin:"0 8%"},children:"Pick up from Store"})]})]})]})}})}}]),r}(u.Component),Q=function(){var t=(0,n.f_)();return(0,f.jsx)(H,{product:t})}}}]);
//# sourceMappingURL=421.69648a9f.chunk.js.map