import{m as f,r as V,o as d,c as m,a as e,w as i,b as l,F as k,d as a,t as _,k as v,f as g}from"./index.15fff4fb.js";import{_ as t}from"./MCheckbox.97890196.js";import{M as u}from"./MPanel.c1494050.js";import"./plugin-vue_export-helper.21dcd24c.js";const C=a("h1",{class:"mt-4 text-3xl font-semibold"},"Checkbox",-1),x={class:"mb-2"},w=g(" Value: "),y={class:"mb-2"},B=g(" Value: "),S={__name:"CheckboxView",setup(L){const s=f(!0),h=["This","is","a","check","list"],n=V(new Set),p=(r,o)=>{o?n.add(r):n.delete(r)};return(r,o)=>(d(),m(k,null,[C,e(l(u),null,{default:i(()=>[e(l(t),{variant:"primary",label:"Click to toggle check"}),e(l(t),{modelValue:!0,label:"Click to toggle check"}),e(l(t),{variant:"success",label:"Click to toggle check"}),e(l(t),{modelValue:!0,variant:"danger",label:"Click to toggle check"}),e(l(t),{variant:"info",indeterminate:!0,label:"Click to toggle check"}),e(l(t),{modelValue:!0,variant:"warn",label:"Click to toggle check"})]),_:1}),e(l(u),null,{default:i(()=>[a("p",x,[w,a("code",null,_(s.value),1)]),e(l(t),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=c=>s.value=c),variant:"primary",label:"Click to toggle check"},null,8,["modelValue"])]),_:1}),e(l(u),null,{default:i(()=>[a("p",y,[B,a("code",null,_(n),1)]),a("ul",null,[(d(),m(k,null,v(h,c=>a("li",null,[e(l(t),{"onUpdate:modelValue":b=>p(c,b),label:c},null,8,["onUpdate:modelValue","label"])])),64))])]),_:1})],64))}};export{S as default};