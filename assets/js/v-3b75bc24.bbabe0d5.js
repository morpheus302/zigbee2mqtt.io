"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[786],{192150:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-3b75bc24","path":"/devices/ZB003-X.html","title":"Fantem ZB003-X control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Fantem ZB003-X control via MQTT","description":"Integrate your Fantem ZB003-X via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-01-31T22:24:43.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Setting device options","slug":"setting-device-options","link":"#setting-device-options","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Battery2 (numeric)","slug":"battery2-numeric","link":"#battery2-numeric","children":[]},{"level":3,"title":"Illuminance calibration (numeric)","slug":"illuminance-calibration-numeric","link":"#illuminance-calibration-numeric","children":[]},{"level":3,"title":"Temperature calibration (numeric)","slug":"temperature-calibration-numeric","link":"#temperature-calibration-numeric","children":[]},{"level":3,"title":"Humidity calibration (numeric)","slug":"humidity-calibration-numeric","link":"#humidity-calibration-numeric","children":[]},{"level":3,"title":"Reporting enable (binary)","slug":"reporting-enable-binary","link":"#reporting-enable-binary","children":[]},{"level":3,"title":"Reporting time (numeric)","slug":"reporting-time-numeric","link":"#reporting-time-numeric","children":[]},{"level":3,"title":"Led enable (binary)","slug":"led-enable-binary","link":"#led-enable-binary","children":[]},{"level":3,"title":"Pir enable (binary)","slug":"pir-enable-binary","link":"#pir-enable-binary","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Keep time (enum)","slug":"keep-time-enum","link":"#keep-time-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1700163008000},"filePathRelative":"devices/ZB003-X.md"}')},944033:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var a=t(166252);const n=(0,a._)("h1",{id:"fantem-zb003-x",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#fantem-zb003-x","aria-hidden":"true"},"#"),(0,a.Uk)(" Fantem ZB003-X")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"ZB003-X")],-1),r=(0,a._)("td",null,"Vendor",-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"4 in 1 multi sensor")],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"occupancy, tamper, illuminance_lux, illuminance, temperature, humidity, battery, voltage, battery2, illuminance_calibration, temperature_calibration, humidity_calibration, reporting_enable, reporting_time, led_enable, pir_enable, sensitivity, keep_time, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB003-X.jpg",alt:"Fantem ZB003-X"})])],-1),s=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"setting-device-options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#setting-device-options","aria-hidden":"true"},"#"),(0,a.Uk)(" Setting device options")],-1),m=(0,a._)("p",null,[(0,a.Uk)("Setting options (e.g. "),(0,a._)("code",null,"illuminance_calibration"),(0,a.Uk)(") is only possible when the device is powered via an USB cable.")],-1),p=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),b=(0,a.uE)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery2-numeric" tabindex="-1"><a class="header-anchor" href="#battery2-numeric" aria-hidden="true">#</a> Battery2 (numeric)</h3><p>Remaining battery 2 in %. Value can be found in the published state on the <code>battery2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="illuminance-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-calibration-numeric" aria-hidden="true">#</a> Illuminance calibration (numeric)</h3><p>Illuminance calibration in lux. Value can be found in the published state on the <code>illuminance_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>20</code>.</p><h3 id="temperature-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-calibration-numeric" aria-hidden="true">#</a> Temperature calibration (numeric)</h3><p>Temperature calibration (-2.0...2.0). Value can be found in the published state on the <code>temperature_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-2</code> and the maximum value is <code>2</code>.</p><h3 id="humidity-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-calibration-numeric" aria-hidden="true">#</a> Humidity calibration (numeric)</h3><p>Humidity calibration. Value can be found in the published state on the <code>humidity_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-15</code> and the maximum value is <code>15</code>.</p><h3 id="reporting-enable-binary" tabindex="-1"><a class="header-anchor" href="#reporting-enable-binary" aria-hidden="true">#</a> Reporting enable (binary)</h3><p>Enable reporting. Value can be found in the published state on the <code>reporting_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reporting_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> reporting enable is ON, if <code>false</code> OFF.</p><h3 id="reporting-time-numeric" tabindex="-1"><a class="header-anchor" href="#reporting-time-numeric" aria-hidden="true">#</a> Reporting time (numeric)</h3><p>Reporting interval in minutes. Value can be found in the published state on the <code>reporting_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reporting_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>.</p><h3 id="led-enable-binary" tabindex="-1"><a class="header-anchor" href="#led-enable-binary" aria-hidden="true">#</a> Led enable (binary)</h3><p>Enable LED. Value can be found in the published state on the <code>led_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led enable is ON, if <code>false</code> OFF.</p><h3 id="pir-enable-binary" tabindex="-1"><a class="header-anchor" href="#pir-enable-binary" aria-hidden="true">#</a> Pir enable (binary)</h3><p>Enable PIR sensor. Value can be found in the published state on the <code>pir_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pir_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> pir enable is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>PIR sensor sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="keep-time-enum" tabindex="-1"><a class="header-anchor" href="#keep-time-enum" aria-hidden="true">#</a> Keep time (enum)</h3><p>PIR keep time in seconds. Value can be found in the published state on the <code>keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>30</code>, <code>60</code>, <code>120</code>, <code>240</code>, <code>480</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',40),v={},y=(0,t(983744).Z)(v,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[l,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(t,{to:"/supported-devices/#v=Fantem"},{default:(0,a.w5)((()=>[(0,a.Uk)("Fantem")])),_:1})])]),c,d,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,h,m,(0,a.kq)(" Notes END: Do not edit below this line "),p,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);