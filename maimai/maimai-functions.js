const maimai_chart_list={lev_bas:"BASIC",dx_lev_bas:"BASIC",lev_adv:"ADVANCED",dx_lev_adv:"ADVANCED",lev_exp:"EXPERT",dx_lev_exp:"EXPERT",lev_mas:"MASTER",dx_lev_mas:"MASTER",lev_remas:"Re:MASTER",dx_lev_remas:"Re:MASTER",lev_utage:"U·TA·GE"};var columns_params=[{displayTitle:"ID (system)",name:"id",data:"sort",defaultContent:"",className:"id detail-hidden",visible:!1},{displayTitle:"#",name:"index",data:"id",defaultContent:"",className:"id detail-hidden",data:function(a){return a.id},render:renderInWrapper(),width:"20px",searchable:!1,visible:!1},{displayTitle:"アルバムアート",name:"jacket",data:"image_url",defaultContent:"",className:"jacket detail-hidden",render:function(a){return'<span class="img-wrap"><img src="jacket/'+a+'"/></span>'},width:"50px",orderable:!1,searchable:!1},{displayTitle:"曲名",name:"title",data:"title",defaultContent:"",className:"title-artist detail-hidden",render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+("○"==s.buddy?'<span class="buddy-badge">バディ</span>':"")+'<span class="title">'+a+'</span><span class="dash hidden"> - </span><span class="artist-display hidden">'+s.artist+"</span></div>":"filter"===e?a:s.reading},width:"80vw"},{displayTitle:"曲名 (読み)",name:"reading",data:"reading",defaultContent:"",className:"reading",visible:!1,searchable:!1},{displayTitle:"アーティスト",name:"title_merged",data:"title",defaultContent:"",className:"artist detail-hidden",render:function(a,e,s){return"display"===e?'<div class="inner-wrap"><span class="artist-display hidden">'+s.artist+"</span></div>":s.reading},searchable:!1},{displayTitle:"アーティスト",name:"artist",data:"artist",defaultContent:"",className:"artist detail-hidden",visible:!1},{displayTitle:"BPM",name:"bpm",data:"bpm",defaultContent:"",className:"details bpm",searchable:!1,visible:!1},{displayTitle:"バージョン",name:"version",data:maimaiRenderVersionName(),defaultContent:"",className:"details version",filterable:!0,customDropdownSortSource:"version",width:"12em"},{displayTitle:"ジャンル",name:"category",data:"catcode",defaultContent:"",className:"details category",render:renderInWrapper(),width:"12em",filterable:!0},{displayTitle:"DX/Std",name:"chart_type",data:maimaiGetChartTypes(),defaultContent:"",className:"chart-type detail-hidden",render:maimaiRenderChartTypeBadges(),width:"3rem",filterable:!flat_view},{displayTitle:"BASIC",name:"lev_bas",data:maimaiProcessLvData("lev_bas","lev_bas_i"),defaultContent:"",className:"lv lv-bsc",render:maimaiRenderLvNum("lev_bas"),customDropdownSortSource:sortByLeadingZeros("lev_bas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"ADVANCED",name:"lev_adv",data:maimaiProcessLvData("lev_adv","lev_adv_i"),defaultContent:"",className:"lv lv-adv",render:maimaiRenderLvNum("lev_adv"),customDropdownSortSource:sortByLeadingZeros("lev_adv"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"EXPERT",name:"lev_exp",data:maimaiProcessLvData("lev_exp","lev_exp_i"),defaultContent:"",className:"lv lv-exp",render:maimaiRenderLvNum("lev_exp"),customDropdownSortSource:sortByLeadingZeros("lev_exp"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"MASTER",name:"lev_mas",data:maimaiProcessLvData("lev_mas","lev_mas_i"),defaultContent:"",className:"lv lv-mas",render:maimaiRenderLvNum("lev_mas"),customDropdownSortSource:sortByLeadingZeros("lev_mas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"Re:MASTER",name:"lev_remas",data:maimaiProcessLvData("lev_remas","lev_remas_i"),defaultContent:"",className:"lv lv-remas",render:maimaiRenderLvNum("lev_remas"),customDropdownSortSource:sortByLeadingZeros("lev_remas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"UTAGE",name:"lev_utage",data:"lev_utage",defaultContent:"",className:"lv lv-utage",render:maimaiRenderLvNum("lev_utage"),customDropdownSortSource:sortByLeadingZeros("lev_utage"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"UTAGE(漢字)",name:"lev_utage_kanji",data:"kanji",defaultContent:"",className:"lv lv-utage kanji",render:renderUtage("kanji","lev_utage"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"譜面",name:"chart_diff",data:function(a,e,s,n){return 1==flat_view?"sort"===e||"meta"===e?a.chart_diff:convertDifficultyNames(a.chart_diff,!1,maimai_chart_list):null},defaultContent:"",className:"lv-name detail-hidden",width:"3rem",createdCell:flat_view?function(a,e,s,n,t){$(a).addClass(s.chart_diff)}:null,render:flat_view?renderChartDifficultyName("chart_diff",!1,maimai_chart_list):null,customDropdownSortSource:flat_view?sortByDifficultyCategory("chart_diff",maimai_chart_list):null,filterable:flat_view,visible:!1},{displayTitle:"難易度グループ",name:"chart_lev",data:flat_view?"chart_lev":null,defaultContent:"",className:"lv detail-hidden",width:"4rem",customDropdownSortSource:function(a){a&&sortByLeadingZeros("chart_lev")},reverseSortOrder:!0,visible:!1},{displayTitle:"譜面レベル",name:"chart_lev_i",data:flat_view?"chart_lev_i":null,defaultContent:"",className:"lv lv-name detail-hidden",render:flat_view?renderChartDifficultyNameAndLv("chart_diff","chart_lev","chart_lev_i","chart_lev_i_display",maimai_chart_list):null,width:"4rem",createdCell:flat_view?function(a,e,s,n,t){$(a).addClass(s.chart_diff)}:null,searchable:!1,visible:flat_view},{displayTitle:"ノート数",name:"chart_notes",data:flat_view?"chart_notes":null,defaultContent:"",className:"details notecount detail-hidden nowrap",width:"8em",searchable:!1},{displayTitle:"TAP",name:"chart_notes_tap",data:flat_view?"chart_notes_tap":null,defaultContent:"",className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"HOLD",name:"chart_notes_hold",data:flat_view?"chart_notes_hold":null,defaultContent:"",className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"SLIDE",name:"chart_notes_slide",data:flat_view?"chart_notes_slide":null,defaultContent:"",className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"TOUCH",name:"chart_notes_touch",data:flat_view?"chart_notes_touch":null,defaultContent:"",className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"BREAK",name:"chart_notes_break",data:flat_view?"chart_notes_break":null,defaultContent:"",className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"譜面作者",name:"chart_designer",data:flat_view?"chart_designer":null,defaultContent:"",width:"15em",className:"details detail-hidden designer",filterable:flat_view,searchable:flat_view},{displayTitle:"解禁",name:"key",data:"key",defaultContent:"",className:"key detail-hidden",render:function(a,e,s){return"display"===e&&a?'<span class="key-icon" title="解禁必要"></span>':a},searchable:!1},{displayTitle:"追加日（Int'l Ver.）",name:"intl",data:function(a,e,s,n){if(a.release_intl&&"000000"!==a.release_intl)return formatDate(a.release_intl)},defaultContent:"",className:"intl detail-hidden nowrap",render:function(a,e,s){return"display"===e&&a?'<div class="inner-wrap">'+a+"</div>":a},searchable:!1,visible:!1},{displayTitle:"追加日",name:"date",defaultContent:"",data:function(a,e,s,n){return formatDate(a.date)},className:"date detail-hidden",render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},reverseSortOrder:!0,width:"4em",filterable:!0},{displayTitle:"NEW",name:"new",data:"newflag",defaultContent:"",className:"detail-hidden",searchable:!1}],default_order=flat_view?[[getColumnIndexByName("chart_lev_i"),"desc"],[getColumnIndexByName("chart_diff"),"desc"],[getColumnIndexByName("date"),"desc"]]:[[getColumnIndexByName("date"),"desc"],[getColumnIndexByName("id"),"asc"]];function maimaiGetChartTypes(){return function(a,e){let s="lev_bas",n="dx_lev_bas";return a[n]&&!a[s]?"DX":a[s]&&!a[n]?"Std":a[n]&&a[s]?"DX & Std":a.kanji?"UTAGE":void 0}}function maimaiRenderChartTypeBadges(){return function(a,e,s){if("display"===e){if(flat_view)if(s.chart_diff.startsWith("dx_"))var n=s.chart_diff;else var t=s.chart_diff;else t="lev_bas",n="dx_lev_bas";var l="",i="";if(s[n])l='<span class="chart-type-badge dx"></span>';if(s[t])i='<span class="chart-type-badge std"></span>';return`<div class="inner-wrap">${l}${i}</div>`}return a}}function maimaiProcessLvData(a,e){return function(e,s){let n="dx_"+a;return e[n]&&!e[a]?e[n]:e[a]&&!e[n]?e[a]:e[n]&&e[a]?e[n]:void 0}}function maimaiRenderLvNum(a){return function(e,s,n){if("display"===s){var t=a+"_i",l="dx_"+a,i="dx_"+t,r="",d="";if(n[l]&&!n[a]){d="DX",r=n[l];var o=n[i]}if(n[a]&&!n[l])d="Std",r=n[a],o=n[t];if(n[l]&&n[a]){d="DX",r=n[l],o=n[i];var c="Std",p=n[a],_=n[t]}return n[l]&&n[a]?`\n          <div class="inner-wrap">\n            <div class="primary">${maimaiLvNumHtmlTemplate(d,r,o)}</div>\n            <div class="secondary">${maimaiLvNumHtmlTemplate(c,p,_)}</div>\n          </div>`:n[a]&&"lev_remas"===a&&n.dx_lev_mas||n[l]&&"dx_lev_remas"===l&&n.lev_mas?`\n          <div class="inner-wrap ${"dx_lev_remas"===a?"reverse":""}">\n            <div class="primary empty">${maimaiLvNumHtmlTemplate("--","--","")}</div>\n            <div class="secondary">${maimaiLvNumHtmlTemplate(d,r,o)}</div>\n          </div>`:`\n          <div class="inner-wrap">\n            <div class="primary ${""===r?"empty":""}">${maimaiLvNumHtmlTemplate(d,r,o)}</div>\n          </div>`}return e}}function maimaiLvNumHtmlTemplate(a,e,s){var n=s?`<span class="lv-num-precise">${s}</span>`:"",t=e.match(/^([0-9]{1,2})(\+?)(\?)?$/);return`${a?`<span class="chart-type-label">${a}</span>`:""}\n      <span class="lv-num-simple">${t?`<span class="num">${t[1]}</span>`:`<span class="num">${e}</span>`}${t&&"+"===t[2]?'<span class="plus">+</span>':""}${t&&"?"===t[3]?'<span class="question">?</span>':""}</span>\n      ${n}`}function renderUtage(a,e){return function(s,n,t){if("display"===n){var l=`\n        <div class="inner-wrap">\n          <div class="primary">\n            <span class="lv-num-simple">${t[a]}</span>\n            <span class="lv-num-precise">${lvNumHtmlTemplate(t,e)}</span>\n          </div>\n        </div>`;return t[a]?l:""}return s}}function maimaiProcessChartData(a,e){return a[e]?"kanji"===e?{...a,chart_diff:e,chart_lev:a[e],chart_lev_i:a.lev_utage,chart_lev_i_display:`<span class="approx">${parseFloat(a[e].replace("+",".5")).toFixed(1)}</span>`,chart_notes:a.lev_utage_notes,chart_notes_tap:a.lev_utage_notes_tap,chart_notes_hold:a.lev_utage_notes_hold,chart_notes_slide:a.lev_utage_notes_slide,chart_notes_touch:a.lev_utage_notes_touch,chart_notes_break:a.lev_utage_notes_break,chart_designer:a.lev_utage_designer}:{...a,chart_diff:e,chart_lev:a[e],chart_lev_i:parseFloat(a[e+"_i"]||a[e].replace("+",".5")),chart_lev_i_display:a[e+"_i"]||`<span class="approx">${parseFloat(a[e].replace("+",".5")).toFixed(1)}</span>`,chart_notes:a[e+"_notes"],chart_notes_tap:a[e+"_notes_tap"],chart_notes_hold:a[e+"_notes_hold"],chart_notes_slide:a[e+"_notes_slide"],chart_notes_touch:a[e+"_notes_touch"],chart_notes_break:a[e+"_notes_break"],chart_designer:a[e+"_designer"]}:null}function maimaiRenderVersionName(){return function(a,e,s,n){if("sort"===e||"meta"===e)return a.version;{const e={1e4:"maimai",11e3:"maimai PLUS",12e3:"GreeN",13e3:"GreeN PLUS",14e3:"ORANGE",15e3:"ORANGE PLUS",16e3:"PiNK",17e3:"PiNK PLUS",18e3:"MURASAKi",18500:"MURASAKi PLUS",19e3:"MiLK",19500:"MiLK PLUS",19900:"FiNALE",2e4:"でらっくす",20500:"でらっくす PLUS",21e3:"Splash",21500:"Splash PLUS",22e3:"UNiVERSE",22500:"UNiVERSE PLUS",23e3:"FESTiVAL",23500:"FESTiVAL PLUS",24e3:"BUDDiES"};let s=null;for(const n in e)a.version>=n&&(null===s||n>s)&&(s=n);return e[s]}}}$(document).ready((function(){$.getJSON("data/music-ex.json",(a=>{$("#table").DataTable({data:flattenMusicData(a,flat_view,maimai_chart_list,maimaiProcessChartData),buttons:[{extend:"colvis",className:"config-btn",columns:".toggle",text:"カラムON/OFF",collectionTitle:"表示するカラムを選択",collectionLayout:"fixed",fade:150}],columns:columns_params,createdRow:function(a,e,s){"1"==e.intl&&$(a).addClass("international")},deferRender:!0,dom:'<"toolbar-group"<"toolbar filters"><"toolbar search"f>><"toolbar secondary"<"info"ilB>><"table-inner"rt><"paging"p>',language:localize_strings,lengthMenu:[[25,50,100,-1],[25,50,100,"All"]],order:default_order,responsive:{details:{type:"column",target:"tr",display:$.fn.dataTable.Responsive.display.modal({header:renderModalHeader("maimai","image_url","wiki_url","https://gamerch.com/maimai/search?q=","譜面確認用 外部出力"),footer:renderModalFooter("maimai")}),renderer:function(a,e,s){function n(a,e,s=""){columns_params[a.columnIndex];var n=columns_params[a.columnIndex];if(!a.className.includes("detail-hidden")&&!a.className.includes("lv "))return`<div class="row ${a.className}" data-dt-row="${a.rowIndex}" data-dt-column="${a.columnIndex}">\n                      <span class="row-label">${n.displayTitle}</span>\n                      <span>${a.data}</span>\n                    </div>`}function t(a,e,s){let n=a[`${e}${s}`],t=a[`${e}${s}_i`]??"";return`\n                <span class="main-info-wrap">\n                  ${r?`<span class="lv-num-simple">${a.kanji}</span>${maimaiLvNumHtmlTemplate("",""+n,"")}`:maimaiLvNumHtmlTemplate("",""+n,""+t)}\n                </span>\n                <span class="sub-info-wrap">\n                  ${function(a,e,s){return r&&a.buddy?`\n                  ${hasPropertyAndValue(a,`${e}${s}_left_notes`)?`<span class="notes-detail-wrap buddy">\n                    <span class="side">L</span>\n                    <span class="notes"><span class="label">Notes</span><span>${a[`${e}${s}_left_notes`]}</span></span><span class="notes-sub-detail-wrap">\n                    ${hasPropertyAndValue(a,`${e}${s}_left_notes_tap`)?`<span class="notes_tap"><span class="label">tap</span><span>${a[`${e}${s}_left_notes_tap`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_left_notes_hold`)?`<span class="notes_hold"><span class="label">hold</span><span>${a[`${e}${s}_left_notes_hold`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_left_notes_slide`)?`<span class="notes_slide"><span class="label">slide</span><span>${a[`${e}${s}_left_notes_slide`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_left_notes_touch`)?`<span class="notes_touch"><span class="label">touch</span><span>${a[`${e}${s}_left_notes_touch`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_left_notes_break`)?`<span class="notes_break"><span class="label">break</span><span>${a[`${e}${s}_left_notes_break`]}</span></span>`:""}\n                  </span></span>`:""}\n                  ${hasPropertyAndValue(a,`${e}${s}_right_notes`)?`<span class="notes-detail-wrap buddy">\n                    <span class="side">R</span>\n                    <span class="notes"><span class="label">Notes</span><span>${a[`${e}${s}_right_notes`]}</span></span><span class="notes-sub-detail-wrap">\n                    ${hasPropertyAndValue(a,`${e}${s}_right_notes_tap`)?`<span class="notes_tap"><span class="label">tap</span><span>${a[`${e}${s}_right_notes_tap`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_right_notes_hold`)?`<span class="notes_hold"><span class="label">hold</span><span>${a[`${e}${s}_right_notes_hold`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_right_notes_slide`)?`<span class="notes_slide"><span class="label">slide</span><span>${a[`${e}${s}_right_notes_slide`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_right_notes_touch`)?`<span class="notes_touch"><span class="label">touch</span><span>${a[`${e}${s}_right_notes_touch`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_right_notes_break`)?`<span class="notes_break"><span class="label">break</span><span>${a[`${e}${s}_right_notes_break`]}</span></span>`:""}\n                  </span></span>`:""}\n                `:`\n                  ${hasPropertyAndValue(a,`${e}${s}_notes`)?`<span class="notes-detail-wrap">\n                    <span class="notes"><span class="label">Notes</span><span>${a[`${e}${s}_notes`]}</span></span><span class="notes-sub-detail-wrap">\n                    ${hasPropertyAndValue(a,`${e}${s}_notes_tap`)?`<span class="notes_tap"><span class="label">tap</span><span>${a[`${e}${s}_notes_tap`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_notes_hold`)?`<span class="notes_hold"><span class="label">hold</span><span>${a[`${e}${s}_notes_hold`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_notes_slide`)?`<span class="notes_slide"><span class="label">slide</span><span>${a[`${e}${s}_notes_slide`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_notes_touch`)?`<span class="notes_touch"><span class="label">touch</span><span>${a[`${e}${s}_notes_touch`]}</span></span>`:""}\n                    ${hasPropertyAndValue(a,`${e}${s}_notes_break`)?`<span class="notes_break"><span class="label">break</span><span>${a[`${e}${s}_notes_break`]}</span></span>`:""}\n                  </span></span>`:""}\n                `}(a,e,s)}\n                  ${hasPropertyAndValue(a,`${e}${s}_designer`)?`<span class="designer"><span class="label">Designer</span><span>${a[`${e}${s}_designer`]}</span></span>`:""}\n                </span>`}function l(a,e,s){if(a.className.includes("lv ")){var n=columns_params[a.columnIndex].name;if("std"===s)var l="";else if("dx"===s)l="dx_";else if("utage"===s)l="";return"utage"===s&&"lev_utage"===n&&hasPropertyAndValue(e,"kanji")?`<div class="row ${a.className}" data-dt-row="${a.rowIndex}" data-dt-column="${a.columnIndex}">\n                        <span class="row-label"><span class="diff-name lv-utage">U･TA･GE${e.buddy?" (バディ)":""}</span></span>\n                        <span class="content-col">\n                          <span class="diff-name ${a.className}"><span>U･TA･GE${e.buddy?" (バディ)":""}</span></span>\n                          ${t(e,l,n)}\n                        </span>\n                      </div>`:"utage"!==s&&!a.className.includes("detail-hidden")&&a.className.includes("lv ")?"lev_remas"===n&&!hasPropertyAndValue(e,`${l}${n}`)||"lev_utage_kanji"===n||"lev_utage"===n?void 0:`<div class="row ${a.className}" data-dt-row="${a.rowIndex}" data-dt-column="${a.columnIndex}">\n                        <span class="row-label"><span class="diff-name ${a.className}">${columns_params[a.columnIndex].displayTitle}</span></span>\n                        <span class="content-col">\n                          <span class="diff-name ${a.className}"><span>${columns_params[a.columnIndex].displayTitle}</span></span>\n                          ${t(e,l,n)}\n                        </span>\n                      </div>`:void 0}}var i=a.row(e).data(),r=i.kanji?"utage":"";return function(a,e,s,t){let i="lev_bas",r="dx_lev_bas";var d=s.map((a=>n(a))).join(""),o=function(a,e,s=""){if(e.release_intl)if("000000"===e.release_intl)var n="収録";else n=formatDate(e.release_intl)+" 追加";var t='\n                <span class="lock-status">\n                  <span class="key-icon"></span>\n                  <span class="lock-status-text">解禁必要</span>\n                <span>\n              ';return`\n              <div class="region-availability-chart">\n                <div class="region jp available">\n                  <span class="region-label">日本版</span>\n                  <span class="date"><span class="green-check-icon"></span>${formatDate(e.date)} 追加</span>\n                  ${e.key&&"○"===e.key?t:""}\n                </div>\n                <div class="region intl ${e.intl?"available":"unavailable"}">\n                  <span class="region-label">International Ver.</span>\n                  <span class="date">${e.intl?'<span class="green-check-icon"></span>'+n:"未収録"}</span>\n                  ${e.key_intl&&"○"===e.key_intl?t:""}\n                </div>\n              </div>\n              `}(0,a),c=s.map((e=>l(e,a,"std"))).join(""),p=s.map((e=>l(e,a,"dx"))).join(""),_=s.map((e=>l(e,a,"utage"))).join(""),m=`<div class="table-wrapper">\n                  <div class="details-table-wrap ${a[r]&&a[i]?"dual":""}">\n                    ${a[r]?`<div class="details-table chart-details dx">\n                      <div class="table-header"><span class="chart-type-badge dx"></span><span class="th-label">DX CHART</span></div>\n                      ${p}\n                    </div>`:""}\n                    ${a[i]?`<div class="details-table chart-details std">\n                      <div class="table-header"><span class="chart-type-badge std"></span><span class="th-label">STD CHART</span></div>\n                      ${c}\n                    </div>`:""}\n                    ${e?`<div class="details-table chart-details utage">\n                      <div class="table-header"><span class="th-label">U･TA･GE CHART</span></div>\n                      ${_}\n                    </div>`:""}\n                  </div>\n                  <div class="details-table misc-details">\n                    <div class="table-header"><span class="th-label">SONG METADATA</span></div>\n                    ${d}\n                  </div>\n                  <div class="details-table playable-info">\n                    ${o}\n                  </div>\n                </div>`;return m||!1}(i,r,s)}}},rowGroup:{dataSrc:"date",startRender:flat_view||""!=searchParams?null:function(a,e){return date_display=""===e?"NEW":formatDate(e,"JP")+" 追加",`<div>${date_display}</div>`}},scrollX:!0,initComplete:function(){tableInitCompleteFunctions(this)}})}))}));
