import{a as r,j as e}from"./index-4Yt6pLjZ.js";/* empty css            */import{P as o}from"./ProductsDisplay-C5IpGZ1U.js";import"./FooterNav-BPqVhVtG.js";import"./useTheme-XHsCJqzA.js";import"./ButtonBase-BMyPlSzo.js";import"./IconButton-D2COuTn_.js";const a="/Parakh_client/assets/wishlist.png",n="/Parakh_client/assets/pinkHeart.png",d=()=>{const{products:i}=r(s=>s.products),t=i.filter(s=>s.wishlist===!0);return e.jsx(e.Fragment,{children:e.jsx(o,{categoryType:`${t.length===0?"It seems notthing in here.":"Your"}`,category:`${t.length===0?"Make a Wish!":"Wishlist"}`,emoteImg:n,products:t,image:a})})};export{d as default};
