import{r as c,b as S,C as A,u as w,j as e,a as L,g as M,d as O,D as E,e as I}from"./index-DnMerhvH.js";import{N as R,F as B}from"./FooterNav-CzDToSQU.js";/* empty css            */import{F as U}from"./Footer-BRyN97oM.js";import{a as V}from"./account-CCVeCAZM.js";import{A as H}from"./AddressFormModal-Dem1j8Mb.js";import{B as y,u as Y,a as q}from"./Button-CocOHTZS.js";import{I as b}from"./IconButton-D8ca8zM3.js";import"./ButtonBase-rergcOXT.js";const G=()=>{const[d,x]=c.useState(null),P=S();c.useEffect(()=>{P(A())},[]);const{allOrders:m}=w(s=>s.order),p=[...m].sort((s,i)=>new Date(i.order_created.created_at)-new Date(s.order_created.created_at)),k=s=>{x(d===s?null:s)};return e.jsx(e.Fragment,{children:p.map((s,i)=>{var f,h,n,j,u,g,o,N,v,t,l,F;const r=new Date(s.order_created.created_at),a=(z,$)=>{var C,D;const _=(C=s==null?void 0:s.order_tracking)==null?void 0:C[z],T=(D=s==null?void 0:s.order_tracking)==null?void 0:D[$];return _&&T?"bg-[#F2707F]":_?"bg-gradient-to-r from-[#F2707F] to-[#F2707F]/10":"bg-[#F2707F]/10"};return e.jsxs("div",{className:"border-2 rounded-xl mt-5 drop-shadow-xl bg-white",children:[e.jsx("div",{className:"bg-gray-200",children:e.jsxs("div",{className:"p-3 flex justify-between",children:[e.jsxs("div",{className:"flex gap-5 md:gap-10 text-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-Poppins font-semibold",children:"Order Placed"}),e.jsx("h1",{className:"text-[12px] font-Poppins font-medium",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-Poppins font-semibold",children:"Total"}),e.jsxs("h1",{className:"text-[12px] font-Poppins font-medium",children:["₹",s.order_details.amount]})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-Poppins font-semibold",children:"Ship To"}),e.jsx("h1",{className:"text-[12px] font-Poppins font-medium",children:"customer"})]})]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("h1",{className:"text-[12px] font-Poppins font-medium",children:["Order Id :"," ",e.jsxs("span",{className:"uppercase",children:["#",s.order_created.order_id]})]})})]})}),e.jsxs("div",{className:"p-3 pb-5",children:[e.jsx("h1",{className:"text-base font-Poppins font-semibold",children:(f=s.order_tracking)!=null&&f.confirmedOrder?"Order Confirmed":(h=s.order_tracking)!=null&&h.productDelivered?"Product Delivered":"Confirmation Pending"}),e.jsxs("div",{className:"mt-5 flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("img",{src:s.order_details.cart[0].product.images,alt:"",className:"w-16 h-16 object-cover rounded-xl"}),e.jsx("h1",{className:"text-base font-Poppins font-medium",children:s.order_details.cart[0].product.name})]}),e.jsxs("div",{className:"flex flex-col gap-2 text-center",children:[!((n=s.order_tracking)!=null&&n.productDelivered)&&e.jsx(y,{variant:"contained",type:"submit",onClick:()=>k(s._id),sx:{borderRadius:"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:"12px",":hover":{backgroundColor:"#F7475C"}},children:"Track Order"}),((j=s.order_tracking)==null?void 0:j.productDelivered)&&e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"contained",type:"submit",sx:{borderRadius:"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:"12px",":hover":{backgroundColor:"#F7475C"}},children:"Leave Feedback"}),e.jsx(y,{variant:"contained",type:"submit",sx:{borderRadius:"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:"12px",":hover":{backgroundColor:"#F7475C"}},children:"Write a Product review"})]})]})]}),e.jsx("div",{className:"px-24",children:d===s._id&&e.jsx("div",{className:"mt-10",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full  ${(u=s.order_tracking)!=null&&u.confirmedOrder?"bg-[#F2707F]":"bg-gray-200"}`,children:e.jsx("i",{className:`fi fi-rr-shopping-cart-check pt-1 px-1.5 rounded-full ${(g=s.order_tracking)!=null&&g.confirmedOrder?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-700",children:"Confirmed Order"}),e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsx("div",{className:`absolute top-5 left-24 h-0.5 w-52 ${a("confirmedOrder","processingOrder")}`})]}),e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full  ${(o=s.order_tracking)!=null&&o.processingOrder?"bg-[#F2707F]":"bg-gray-200"}`,children:e.jsx("i",{className:`fi fi-rr-truck-loading pt-1 px-1.5 rounded-full  ${(N=s.order_tracking)!=null&&N.processingOrder?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-700",children:"Processing Order"}),e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsx("div",{className:`absolute top-5 left-24 h-0.5 w-52 ${a("processingOrder","productDispatched")}`})]}),e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full  ${(v=s.order_tracking)!=null&&v.productDispatched?"bg-[#F2707F]":"bg-gray-200"}`,children:e.jsx("i",{className:`fi fi-rr-truck-check pt-1 px-1.5 rounded-full  ${(t=s.order_tracking)!=null&&t.productDispatched?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-700",children:"Product Dispatched"}),e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsx("div",{className:`absolute top-5 left-24 h-0.5 w-52 ${a("productDispatched","productDelivered")}`})]}),e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full  ${(l=s.order_tracking)!=null&&l.productDelivered?"bg-[#F2707F]":"bg-gray-200"}`,children:e.jsx("i",{className:`fi fi-rr-location-alt pt-1 px-1.5 rounded-full  ${(F=s.order_tracking)!=null&&F.productDelivered?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-700",children:"Product Delivered"}),e.jsx("h1",{className:"text-[12px] font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]})]})]})})})]})]},i)})})},ie=()=>{const[d,x]=c.useState(!1),[P,m]=c.useState(!1),[p,k]=c.useState(0),{addresses:s}=w(t=>t.address),{user:i}=w(t=>t.user),{allOrders:r}=w(t=>t.order),a=S(),f=L(),h=Y(),n=q(h.breakpoints.down("sm"));c.useEffect(()=>{window.scrollTo(0,0),i||a(M()),(!s||s.length===0)&&a(O()),a(A())},[a,s]);const j=()=>{a(E()).then(()=>f("/Parakh_client/")).catch(t=>console.log(t))},u=t=>{a(I(t)).then(()=>{a(O())}).catch(l=>console.log(l))},g=t=>{k(t)},o=()=>{x(!d)},N=()=>{m(!0)},v=()=>{m(!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"home bg-[#f4f4f4]",children:[e.jsx("div",{className:"fixed top-0 right-0 left-0 z-10",children:e.jsx(R,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center relative px-5 mt-16 py-10 lg:px-20 lg:pt-20 overflow-hidden z-0",children:e.jsxs("div",{className:"w-full flex justify-center items-center text-center",children:[e.jsxs("div",{className:"z-10 relative py-10 lg:pt-20 px-10 lg:px-20",children:[e.jsx("h1",{className:"text-xl md:text-2xl font-Pacifico text-[#f2707f]",children:"My"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-Lemon font-semibold",children:"Account"})]}),e.jsx("div",{className:"absolute -top-20 -right-20 lg:-top-44 lg:-right-44 z-0",children:e.jsx("div",{className:"p-10 lg:p-20 rounded-full bg-white/40",children:e.jsx("div",{className:"p-10 lg:p-20 rounded-full bg-white",children:e.jsx("img",{src:V,alt:"Emote",className:"w-24 lg:w-56 opacity-50"})})})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"px-5",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsx("div",{className:"pb-3 border-b-2 w-full",children:e.jsx("h1",{className:"text-xl md:text-3xl font-Poppins font-semibold",children:"Account Details"})})}),e.jsx("div",{children:e.jsxs("div",{className:"py-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Name"}),e.jsx("h1",{className:"text-sm md:text-md font-Poppins font-semibold",children:i==null?void 0:i.user.name})]}),e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Email"}),e.jsx("h1",{className:"text-sm md:text-md font-Poppins font-semibold",children:i==null?void 0:i.user.email})]}),e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Contact"}),e.jsx("h1",{className:"text-sm md:text-md font-Poppins font-semibold",children:i==null?void 0:i.user.contact})]})]})})]})}),e.jsx("div",{className:"px-5 my-10",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsx("div",{className:"pb-3 border-b-2 w-full",children:e.jsx("h1",{className:"text-xl md:text-3xl font-Poppins font-semibold",children:"Address Details"})})}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsxs("div",{className:"pb-3 w-full flex items-center justify-between",children:[e.jsx("h1",{className:"md:text-xl font-Poppins font-semibold",children:"View Your Address"}),s.length>1&&e.jsx(b,{onClick:o,children:e.jsx("i",{className:`fi fi-rr-caret-${d?"up":"down"} text-base md:text-2xl px-2 pt-1 text-[#f2707f]`})})]})}),e.jsx("div",{className:"pb-5 border-b-[1px] md:border-b-2 border-dashed",children:e.jsxs("div",{children:[s.map((t,l)=>e.jsxs("div",{className:`flex justify-between items-center ${l!==p&&!d?"hidden":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[e.jsx("input",{type:"radio",name:"address",className:"custom-radio flex-shrink-0",checked:l===p,onChange:()=>g(l),onClick:o}),e.jsxs("h1",{className:"text-[12px] md:text-base font-Poppins overflow-hidden text-ellipsis whitespace-nowrap",children:[t.name,", ",t.address,","," ",t.pincode,", ",t.city,","," ",t.state]})]}),e.jsxs("div",{className:"flex",children:[e.jsx(b,{children:e.jsx("i",{className:"fi fi-rr-edit text-base px-2 pt-1 hover:text-[#f2707f]"})}),e.jsx(b,{onClick:()=>{u(t._id)},children:e.jsx("i",{className:"fi fi-rs-trash text-base px-2 pt-1 hover:text-[#f2707f]"})})]})]},t._id)),e.jsxs("div",{className:"flex items-center cursor-pointer w-fit",children:[e.jsx(b,{onClick:N,children:e.jsx("i",{className:"fi fi-rr-square-plus text-base px-2 pt-1 text-[#f2707f]"})}),e.jsx("h1",{className:"text-sm md:text-base text-[#f2707f] font-Poppins font-medium underline underline-offset-4 decoration-dashed",children:"Add new address"})]})]})})]})})]})}),e.jsx("div",{className:"px-5 my-10",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsx("div",{className:"pb-3 border-b-2 w-full",children:e.jsx("h1",{className:"text-xl md:text-3xl font-Poppins font-semibold",children:"Order Details"})})}),e.jsx("div",{children:r.length===0?e.jsx("div",{className:"py-3",children:e.jsxs("h1",{className:"text-sm md:text-base font-Poppins font-medium text-[#f2707f]",children:[e.jsx("span",{className:"underline",children:"Make your first order."})," ","You haven't placed any orders yet."]})}):e.jsx(G,{})})]})}),e.jsx("div",{className:"flex justify-center mb-40",children:e.jsx(y,{variant:"contained",size:"large",type:"submit",onClick:j,className:"button-shiny-effect",sx:{borderRadius:n?"5px":"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:n?"12px":"16px",padding:n?"8px 16px":"12px 24px",":hover":{backgroundColor:"#F7475C"}},children:"LOGOUT"})}),e.jsx(H,{isVisible:P,onClose:v})]})]}),e.jsx(U,{}),e.jsx("div",{className:"fixed bottom-0 right-0 left-0 xl:hidden",children:e.jsx(B,{})})]})})};export{ie as default};