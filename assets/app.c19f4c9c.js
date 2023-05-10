import{q as o}from"./index.ebfcf431.js";const i=2e3,a=[{type:"label",name:"Overview"},{type:"link",name:"Introduction",href:"/dashboard",icon:"home"},{type:"label",name:"Components"},{type:"link",name:"RButton",href:"/dashboard/button",icon:"play-circle"},{type:"link",name:"RCheckbox",href:"/dashboard/checkbox",icon:"checkbox"},{type:"link",name:"RDialog",href:"/dashboard/dialog",icon:"layers"},{type:"link",name:"RDropdown",href:"/dashboard/dropdown",icon:"chevron-down-circle"},{type:"link",name:"RHeading",href:"/dashboard/heading",icon:"pricetag"},{type:"link",name:"RInput",href:"/dashboard/input",icon:"terminal"},{type:"link",name:"RNotification",href:"/dashboard/notification",icon:"notifications"},{type:"link",name:"RTree",href:"/dashboard/tree",icon:"chevron-forward-circle"},{type:"link",name:"RRichEditor",href:"/dashboard/rich-editor",icon:"document-text"},{type:"link",name:"RGridMap",href:"/dashboard/grid-map",icon:"grid"},{type:"link",name:"Others",href:"/dashboard/others",icon:"ellipsis-horizontal"},{type:"label",name:"References"},{type:"link",name:"Icon",href:"/dashboard/icon",icon:"flower"},{type:"label",name:"Features"},{type:"link",name:"Sign out",href:"/auth/signout",icon:"log-out"}],r=o("app",{state:()=>({loading:!1,user:null,view:null,notices:[]}),actions:{isAdmin(){if(!this.user)return!1;for(let e of this.user.perms||[])if(e.model==="*"&&e.action==="*"&&e.id==="*")return!0;return!1},pushNotice(e,n){this.notices.push({type:e,message:n,at:Date.now()})},autoCleanNotice(){setInterval(()=>{const e=Date.now();do{let n=this.notices[0];if(!n)break;if(e-n.at>i)this.notices.shift();else break}while(this.notices.length>0)},100)}}});export{a as N,r as u};