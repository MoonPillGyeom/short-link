(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{6377:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/qrcodes/[id]",function(){return e(4339)}])},4759:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(5893),o=e(6610),a=e.n(o);let c={primary:a().primary,secondary:a().secondary,minimal:a().minimal,outline:a().outline};function i(t){var n;let{className:e="",variant:o,as:i,...u}=t,s="".concat(a().button," ").concat(null!==(n=c[o])&&void 0!==n?n:a().primary," ").concat(e);return i?(0,r.jsx)(i,{className:s,...u}):(0,r.jsx)("button",{className:s,...u})}},9143:function(t,n,e){"use strict";var r=e(5893),o=e(3548),a=e.n(o);function c(t){let{className:n,...e}=t;return(0,r.jsx)("div",{className:"".concat(n," ").concat(a().card),...e})}c.Footer=function(t){let{className:n,...e}=t;return(0,r.jsx)("div",{className:"".concat(n," ").concat(a().cardFooter),...e})},n.Z=c},3599:function(t,n,e){"use strict";var r=e(5893),o=e(7294),a=e(3141),c=e.n(a);n.Z=(0,o.forwardRef)(function(t,n){let{className:e="",variant:o,...a}=t,i="".concat(c().input," ").concat(e);return(0,r.jsx)("input",{className:i,...a,ref:n})})},6876:function(t,n,e){"use strict";e.d(n,{H:function(){return d},Z:function(){return _}});var r=e(5893),o=e(7294),a=e(1163),c=e(6760),i=e.n(c),u=e(9143),s=e(3599),l=e(4759);let d={Create:"create",Edit:"edit"};function _(t){let{type:n=d.Create,initialValues:e={title:"",url:""},onSubmit:c}=t,{title:_,url:m}=e,[f,p]=(0,o.useState)({title:_,url:m}),x=(0,a.useRouter)();async function h(t){t.preventDefault(),await c(f),p({title:"",url:""})}function b(t){let{name:n,value:e}=t.target;p(t=>({...t,[n]:e}))}return(0,r.jsx)(u.Z,{children:(0,r.jsxs)("form",{className:i().qrcodeForm,onSubmit:h,children:[(0,r.jsxs)("label",{className:i().label,children:["제목",(0,r.jsx)(s.Z,{className:i().input,name:"title",value:f.title,onChange:b,placeholder:"제목을 입력해주세요."})]}),(0,r.jsxs)("label",{className:i().label,children:["주소",(0,r.jsx)(s.Z,{className:i().input,name:"url",value:f.url,onChange:b,placeholder:"https://example.com/long-url"})]}),(0,r.jsxs)("div",{className:i().buttons,children:[(0,r.jsx)(l.Z,{variant:"outline",type:"button",onClick:()=>x.back(),children:"취소"}),(0,r.jsx)(l.Z,{children:n===d.Create?"등록하기":n===d.Edit?"수정하기":null})]})]})})}},1979:function(t,n,e){"use strict";var r=e(6154);let o=r.Z.create({baseURL:"/api/"});n.Z=o},4339:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSP:function(){return d},default:function(){return _}});var r=e(5893),o=e(9008),a=e.n(o),c=e(6876),i=e(7230),u=e.n(i),s=e(1163),l=e(1979),d=!0;function _(t){let{qrcode:n}=t,e=(0,s.useRouter)(),{id:o}=e.query;async function i(t){await l.Z.patch("/qrcodes/".concat(o),t),e.push("/qrcodes")}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"QRCode 수정하기 - Shortit"})}),(0,r.jsxs)("div",{className:u().page,children:[(0,r.jsx)("h1",{className:u().title,children:"QRCode 수정하기"}),(0,r.jsx)(c.Z,{type:c.H.Edit,initialValues:n,onSubmit:i})]})]})}},6610:function(t){t.exports={button:"Button_button__AxfIB",primary:"Button_primary__1n7q8",secondary:"Button_secondary__pRvhC",outline:"Button_outline___JmXY",minimal:"Button_minimal__XDeHx"}},3548:function(t){t.exports={card:"Card_card__HHZwh",cardFooter:"Card_cardFooter__cOYhM"}},3141:function(t){t.exports={input:"Input_input__IL5XS"}},6760:function(t){t.exports={qrcodeForm:"QRCodeForm_qrcodeForm__fCrJv",label:"QRCodeForm_label___kvTs",input:"QRCodeForm_input__kqew6",buttons:"QRCodeForm_buttons__ZpESH"}},7230:function(t){t.exports={page:"QRCodeEditPage_page__YFQZe",title:"QRCodeEditPage_title__FJLcI"}},1163:function(t,n,e){t.exports=e(6885)}},function(t){t.O(0,[154,774,888,179],function(){return t(t.s=6377)}),_N_E=t.O()}]);