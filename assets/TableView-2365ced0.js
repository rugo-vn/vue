import{l as D,m as h,o as a,c as s,a as o,F as C,n as v,p as y,q as E,g,d as f,t as A,f as $,w as l,b,u as x,_ as F}from"./index-aa95f5be.js";import{_ as B,a as T}from"./ComponentViewTemplate-176b17d2.js";import"./RPanel-4cefac65.js";const k={class:"r-table table table-auto w-full"},N={class:"bg-gray-100"},w={key:0,class:"hover:bg-gray-50"},V={key:1,class:"hover:bg-gray-50"},H={__name:"RHyperTable",props:["data"],setup(d){const _=D(),u=e=>{const i=/^(.*?)\((.*?)\)$/gm.exec(e);return i?{key:i[1],value:i[2]}:null},c=h(()=>{const e=[];for(const i in _)e.push(u(i));return e}),m=h(()=>c.value.filter(({key:e})=>e==="head").map(({value:e})=>e)),r=h(()=>c.value.some(({key:e})=>e==="top")),p=h(()=>c.value.some(({key:e})=>e==="bot"));return(e,i)=>(a(),s("table",k,[o("thead",N,[o("tr",null,[(a(!0),s(C,null,v(m.value,t=>(a(),s("th",{class:y(`h-9 leading-5 px-3 py-1.5 border text-left head(${t})`),key:`head(${t})`},[E(e.$slots,`head(${t})`)],2))),128))])]),o("tbody",null,[r.value?(a(),s("tr",w,[(a(!0),s(C,null,v(m.value,t=>(a(),s("td",{class:y(`h-9 leading-5 px-3 py-1.5 border top(${t})`),key:`top(${t})`},[E(e.$slots,`top(${t})`,{values:d.data.map(n=>n[t]),rows:d.data})],2))),128))])):g("",!0),(a(!0),s(C,null,v(d.data,t=>(a(),s("tr",{class:"hover:bg-gray-50",key:`row(${t.id})`},[(a(!0),s(C,null,v(m.value,n=>(a(),s("td",{class:y(`h-9 leading-5 px-3 py-1.5 border cell(${n})`),key:`cell(${n})`},[E(e.$slots,`cell(${n})`,{value:t[n],row:t},()=>[f(A(t[n]),1)])],2))),128))]))),128)),p.value?(a(),s("tr",V,[(a(!0),s(C,null,v(m.value,t=>(a(),s("td",{class:y(`h-9 leading-5 px-3 py-1.5 border bot(${t})`),key:`bot(${t})`},[E(e.$slots,`bot(${t})`,{values:d.data.map(n=>n[t]),rows:d.data})],2))),128))])):g("",!0)])]))}};const S=o("div",{class:"text-center"},"Age",-1),R=o("div",{class:"text-right"},"Salary",-1),q={class:"text-center"},z={class:"text-right font-mono text-xs"},I=o("div",{class:"font-semibold"},"Total",-1),L={class:"text-right font-semibold font-mono text-xs"},j=o("div",{class:"font-semibold"},"Total",-1),G={class:"text-right font-semibold font-mono text-xs"},O={__name:"TableView",setup(d){const _=[{id:1,name:"Alpha",age:12,salary:1e3},{id:2,name:"Beta",age:6,salary:7800}];function u(c){return new Intl.NumberFormat("vi-VN",{}).format(c)}return(c,m)=>(a(),$(B,{title:"Table",components:["RHyperTable"]},{"row-1":l(()=>[b(x(F),{level:"4",class:"mb-4"},{default:l(()=>[f("Hyper Table")]),_:1}),b(T,{data:"%3CRHyperTable%20class%3D%22sample-hyper-table%22%20%3Adata%3D%22data%22%3E%0A%20%20%3C!--%20head%20--%3E%0A%20%20%3Ctemplate%20%23head(name)%3E%20Name%20%3C%2Ftemplate%3E%0A%0A%20%20%3Ctemplate%20%23head(age)%3E%0A%20%20%20%20%3Cdiv%20class%3D%22text-center%22%3EAge%3C%2Fdiv%3E%0A%20%20%3C%2Ftemplate%3E%0A%0A%20%20%3Ctemplate%20%23head(salary)%3E%0A%20%20%20%20%3Cdiv%20class%3D%22text-right%22%3ESalary%3C%2Fdiv%3E%0A%20%20%3C%2Ftemplate%3E%0A%20%20%3C!--%20end%20head%20--%3E%0A%0A%20%20%3C!--%20cell%20--%3E%0A%20%20%3Ctemplate%20%23cell(age)%3D%22%7B%20value%20%7D%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22text-center%22%3E%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%0A%20%20%3C%2Ftemplate%3E%0A%0A%20%20%3Ctemplate%20%23cell(salary)%3D%22%7B%20value%20%7D%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22text-right%20font-mono%20text-xs%22%3E%7B%7B%20formatCurrency(value)%20%7D%7D%20%C4%91%3C%2Fdiv%3E%0A%20%20%3C%2Ftemplate%3E%0A%20%20%3C!--%20end%20cell%20--%3E%0A%0A%20%20%3C!--%20top%2Fbot%20--%3E%0A%20%20%3Ctemplate%20%23top(name)%3E%0A%20%20%20%20%3Cdiv%20class%3D%22font-semibold%22%3ETotal%3C%2Fdiv%3E%0A%20%20%3C%2Ftemplate%3E%0A%0A%20%20%3Ctemplate%20%23top(salary)%3D%22%7B%20values%20%7D%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22text-right%20font-semibold%20font-mono%20text-xs%22%3E%0A%20%20%20%20%20%20%7B%7B%20formatCurrency(values.reduce((t%2C%20c)%20%3D%3E%20t%20%2B%20c%2C%200))%20%7D%7D%20%C4%91%0A%20%20%20%20%3C%2Fdiv%3E%3C%2Ftemplate%0A%20%20%3E%0A%0A%20%20%3Ctemplate%20%23bot(name)%3E%0A%20%20%20%20%3Cdiv%20class%3D%22font-semibold%22%3ETotal%3C%2Fdiv%3E%0A%20%20%3C%2Ftemplate%3E%0A%0A%20%20%3Ctemplate%20%23bot(salary)%3D%22%7B%20values%20%7D%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22text-right%20font-semibold%20font-mono%20text-xs%22%3E%0A%20%20%20%20%20%20%7B%7B%20formatCurrency(values.reduce((t%2C%20c)%20%3D%3E%20t%20%2B%20c%2C%200))%20%7D%7D%20%C4%91%0A%20%20%20%20%3C%2Fdiv%3E%3C%2Ftemplate%0A%20%20%3E%0A%20%20%3C!--%20end%20top%2Fbot%20--%3E%0A%3C%2FRHyperTable%3E"},{default:l(()=>[b(x(H),{class:"sample-hyper-table",data:_},{"head(name)":l(()=>[f(" Name ")]),"head(age)":l(()=>[S]),"head(salary)":l(()=>[R]),"cell(age)":l(({value:r})=>[o("div",q,A(r),1)]),"cell(salary)":l(({value:r})=>[o("div",z,A(u(r))+" đ",1)]),"top(name)":l(()=>[I]),"top(salary)":l(({values:r})=>[o("div",L,A(u(r.reduce((p,e)=>p+e,0)))+" đ ",1)]),"bot(name)":l(()=>[j]),"bot(salary)":l(({values:r})=>[o("div",G,A(u(r.reduce((p,e)=>p+e,0)))+" đ ",1)]),_:1})]),_:1})]),_:1}))}};export{O as default};
