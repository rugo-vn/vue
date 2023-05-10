import{_ as t,p as o}from"./index.ebfcf431.js";const c={},r=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>string</code></td><td><p>Define button type.</p><ul><li><code>primary</code></li><li><code>secondary</code></li><li><code>success</code></li><li><code>info</code></li><li><code>warn</code></li><li><code>danger</code></li></ul></td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>If <code>true</code>, it will disable button.</td></tr></tbody></table>',2);function n(d,e){return r}const i=t(c,[["render",n]]),h={};function a(d,e){return null}const s=t(h,[["render",a]]),l={},b=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>string</code></td><td>Can be <code>checkbox</code>, <code>radio</code></td></tr><tr><td><code>group</code></td><td><code>string</code></td><td>(For <code>radio</code> type) group list of checkbox with same name.</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>(For <code>radio</code> type) Value when checkbox is selected.</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td>Label of checkbox</td></tr><tr><td><code>variant</code></td><td><code>string</code></td><td>Checkbox type. See more at the RButton.</td></tr><tr><td><code>modelValue</code></td><td><code>any</code></td><td>For <code>checkbox</code> type, it is boolean type. For <code>radio</code> type, it is checkbox value.</td></tr><tr><td><code>indeterminate</code></td><td><code>boolean</code></td><td>Indeterminate state.</td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>update:modelValue</code></td><td>Update modelValue.</td></tr></tbody></table>',4);function p(d,e){return b}const _=t(l,[["render",p]]),u={},y=o('<h2 id="slots">Slots</h2><table><thead><tr><th>Name</th><th>Props</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>click</code> (type: <code>function</code>) will trigger click to show the dialog.</td><td>Splot for open button.</td></tr></tbody></table><h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label for open button.</td></tr><tr><td><code>variant</code></td><td><code>string</code></td><td>Variant for open button. See more at RButton.</td></tr><tr><td><code>disableHotKey</code></td><td><code>boolean</code></td><td>Disable ESC keyboard for trigger close event.</td></tr><tr><td><code>disableDefaultClose</code></td><td><code>boolean</code></td><td>Disable close dialog but still send close event.</td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>close</code></td><td>Emit close event to parent when click cancel, click outside of dialog, press ESC button (when not <code>disableHotKey</code>).</td></tr></tbody></table><h2 id="methods">Methods</h2><table><thead><tr><th>Name</th><th>Args</th><th>Description</th></tr></thead><tbody><tr><td><code>show</code></td><td><code>[]</code></td><td>Show the dialog.</td></tr><tr><td><code>hide</code></td><td><code>[]</code></td><td>Hide the dialog.</td></tr><tr><td><code>toggle</code></td><td><code>[]</code></td><td>Toggle to other state.</td></tr></tbody></table>',8);function f(d,e){return y}const m=t(u,[["render",f]]),g={},$=o('<h2 id="slots">Slots</h2><table><thead><tr><th>Name</th><th>Props</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>click</code> (type: <code>function</code>) will trigger click to show the dialog. <code>isOpened</code> (type <code>boolean</code>) determine dropdown is show or not.</td><td>Slot for open button.</td></tr><tr><td><code>main</code></td><td><code>click</code> (type: <code>function</code>) will trigger click to show the dialog. <code>isOpened</code> (type <code>boolean</code>) determine dropdown is show or not.</td><td>Main slot.</td></tr></tbody></table><h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label for open button.</td></tr><tr><td><code>variant</code></td><td><code>string</code></td><td>Variant for open button. See more at RButton.</td></tr><tr><td><code>disableAutoHide</code></td><td><code>boolean</code></td><td>Disable auto hide dropdown.</td></tr><tr><td><code>margin</code></td><td><code>number</code></td><td>Margin between button and float part.</td></tr><tr><td><code>boxAlign</code></td><td><code>string</code></td><td>Can be <code>left</code>, <code>right</code>, <code>auto</code>. Align float part.</td></tr></tbody></table>',4);function D(d,e){return $}const w=t(g,[["render",D]]),v={},x=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>string</code></td><td>Heading style, from <code>h1</code> to <code>h6</code>, but <code>h3</code>, <code>h4</code>, <code>h5</code> have same size.</td></tr></tbody></table>',2);function N(d,e){return x}const k=t(v,[["render",N]]),R={},P=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label of input</td></tr><tr><td><code>type</code></td><td><code>string</code></td><td><ul><li><code>text</code></li><li><code>password</code></li><li><code>number</code></li><li><code>date</code></li><li><code>email</code></li></ul></td></tr><tr><td><code>modelValue</code></td><td><code>string</code></td><td>Bind value to the component.</td></tr><tr><td><code>focus</code></td><td><code>boolean</code></td><td></td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Disable the input.</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td>Readonly the input.</td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>update:modelValue</code></td><td>Fire when user enter the input.</td></tr><tr><td><code>focus</code></td><td></td></tr><tr><td><code>blur</code></td><td>Fire when it is blured.</td></tr></tbody></table>',4);function S(d,e){return P}const T=t(R,[["render",S]]),V={};function E(d,e){return null}const C=t(V,[["render",E]]),B={},F=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>notices</code></td><td><code>object[]</code></td><td><p>List of notice, with each item have following properties:</p><ul><li><code>id</code> (type: <code>any</code>)</li><li><code>type</code> (type: <code>string</code>): primary, secondary, success, error, info, warn.</li><li><code>title</code> (type: <code>string</code>)</li><li><code>detail</code> (type: <code>string</code>)</li></ul></td></tr></tbody></table>',2);function H(d,e){return F}const L=t(B,[["render",H]]),I={},A=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>items</code></td><td>``</td><td></td></tr><tr><td><code>modelValue</code></td><td>``</td><td></td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>update:modelValue</code></td><td></td></tr></tbody></table>',4);function M(d,e){return A}const K=t(I,[["render",M]]),O={},j=o('<h2 id="slots">Slots</h2><table><thead><tr><th>Name</th><th>Props</th><th>Description</th></tr></thead><tbody><tr><td><code>logo</code></td><td></td><td></td></tr></tbody></table><h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>leftIcon</code></td><td>``</td><td></td></tr><tr><td><code>rightIcon</code></td><td>``</td><td></td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>action</code></td><td></td></tr></tbody></table>',6);function z(d,e){return j}const U=t(O,[["render",z]]),q={},G=o('<h2 id="props">Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>node</code></td><td>``</td><td></td></tr><tr><td><code>load</code></td><td>``</td><td></td></tr></tbody></table><h2 id="events">Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>clickNode</code></td><td></td></tr></tbody></table>',4);function J(d,e){return G}const Q=t(q,[["render",J]]),X={RButton:i,RCentralLayout:s,RCheckbox:_,RDialog:m,RDropdown:w,RHeading:k,RInput:T,RPanel:C,RNotification:L,RSideNav:K,RTopBar:U,RTree:Q};export{X as D};