import{u,r as _,o as p,c as f,a,b as s,_ as r,d as i,w as l,e as g,F as w,f as o}from"./index.15fff4fb.js";import{_ as d}from"./MLink.2e170995.js";const h=i("h1",{class:"text-xl text-center font-medium tracking-wide"},"Sign In",-1),V={class:"flex justify-between items-center"},x=o("Sign In"),y=o("Forget your password?"),b={class:"mt-4 text-gray-500"},v=o(" Don't have an account? "),S=o("Signup?"),B={__name:"SignInView",setup(k){const c=u(),e=_({email:"sample@anhhao.me",password:"defaultpassword"}),m=()=>{console.log(`You are signing in with account: ${JSON.stringify(e)}`),c.push("/dashboard")};return(I,t)=>(p(),f(w,null,[h,a(s(r),{label:"Email",type:"email",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=n=>e.email=n)},null,8,["modelValue"]),a(s(r),{label:"Password",type:"password",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=n=>e.password=n)},null,8,["modelValue"]),i("div",V,[a(s(g),{variant:"primary",onClick:m},{default:l(()=>[x]),_:1}),a(s(d),{to:"/"},{default:l(()=>[y]),_:1})]),i("div",b,[v,a(s(d),{to:"/"},{default:l(()=>[S]),_:1})])],64))}};export{B as default};