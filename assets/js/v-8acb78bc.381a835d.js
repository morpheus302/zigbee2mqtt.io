"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81150],{216981:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-8acb78bc","path":"/devices/E1E-G7F.html","title":"Sengled E1E-G7F control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sengled E1E-G7F control via MQTT","description":"Integrate your Sengled E1E-G7F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-05-29T19:41:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Long press action","slug":"long-press-action","link":"#long-press-action","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1700163008000},"filePathRelative":"devices/E1E-G7F.md"}')},110389:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var n=i(166252);const o=(0,n._)("h1",{id:"sengled-e1e-g7f",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#sengled-e1e-g7f","aria-hidden":"true"},"#"),(0,n.Uk)(" Sengled E1E-G7F")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"E1E-G7F")],-1),d=(0,n._)("td",null,"Vendor",-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Smart switch")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"action, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1E-G7F.jpg",alt:"Sengled E1E-G7F"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the switch by pressing and holding the on and off buttons at the same time for at least 3 seconds. The indicator will start flashing, indicating a successful reset. The device will enter pairing mode for one minute. If the device is not connected in one minute, you must restart the pairing process.</p><p>If device won&#39;t go in to pairing mode, try installing a fresh battery.</p><h3 id="long-press-action" tabindex="-1"><a class="header-anchor" href="#long-press-action" aria-hidden="true">#</a> Long press action</h3>',5),h=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),p=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>up</code>, <code>down</code>, <code>off</code>, <code>on_double</code>, <code>on_long</code>, <code>off_double</code>, <code>off_long</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),g={},f=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[l,(0,n._)("tr",null,[d,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Sengled"},{default:(0,n.w5)((()=>[(0,n.Uk)("Sengled")])),_:1})])]),s,r,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n._)("p",null,[(0,n.Uk)("The device will sometimes output a single push in addition to a long press. You can mitigate this by using the Debounce device configuration. Refer to "),(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})]),(0,n.Uk)(".")]),(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),p])}]])}}]);