$(document).ready((function(){var e,a,s,l,n=new URLSearchParams(window.location.search),t=[{displayTitle:"ID (system)",name:"id",data:"id",className:"id detail-hidden",visible:!1},{displayTitle:"#",name:"index",data:"id",className:"id detail-hidden",data:function(e){return e.id},render:function(e,a,s){return"display"===a?'<div class="inner-wrap">'+e+"</div>":e},width:"20px",searchable:!1,visible:!1},{displayTitle:"アルバムアート",name:"jacket",data:"image",className:"jacket detail-hidden",render:function(e){return'<span class="img-wrap"><img src="jacket/'+e+'"/></span>'},width:"50px",orderable:!1,searchable:!1},{displayTitle:"曲名",name:"title",data:"title",className:"song-title detail-hidden",render:function(e,a,s){return"display"===a?'<div class="inner-wrap"><span class="title">'+e+'</span><span class="dash hidden"> - </span><span class="artist-display hidden">'+s.artist+"</span></div>":"filter"===a?e:s.reading},width:"80vw"},{displayTitle:"曲名 (読み)",name:"reading",data:"reading",className:"reading",visible:!1,searchable:!1},{displayTitle:"アーティスト",name:"title_merged",data:"title",className:"artist detail-hidden",render:function(e,a,s){return"display"===a?'<div class="inner-wrap"><span class="artist-display hidden">'+s.artist+"</span></div>":s.reading},searchable:!1},{displayTitle:"BPM",name:"bpm",data:"bpm",className:"details bpm",searchable:!1,visible:!1},{displayTitle:"バージョン",name:"version",data:"version",className:"details version",filterable:!0,render:function(e,a,s){return"display"===a?'<div class="inner-wrap">'+e+"</div>":e},customDropdownSortSource:"date",width:"12em"},{displayTitle:"ジャンル",name:"category",data:"catname",className:"category",render:function(e,a,s){return"display"===a?'<div class="inner-wrap">'+e+"</div>":e},width:"12em",filterable:!0},{displayTitle:"BASIC",name:"lev_bas",data:c("lev_bas","lev_bas_i"),className:"lv lv-bsc",render:p("lev_bas","lev_bas_i"),customDropdownSortSource:o("lev_bas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"ADVANCED",name:"lev_adv",data:c("lev_adv","lev_adv_i"),className:"lv lv-adv",render:p("lev_adv","lev_adv_i"),customDropdownSortSource:o("lev_adv"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"EXPERT",name:"lev_exp",data:c("lev_exp","lev_exp_i"),className:"lv lv-exp",render:p("lev_exp","lev_exp_i"),customDropdownSortSource:o("lev_exp"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"MASTER",name:"lev_mas",data:c("lev_mas","lev_mas_i"),className:"lv lv-mas",render:p("lev_mas","lev_mas_i"),customDropdownSortSource:o("lev_mas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"ULTIMA",name:"lev_ult",data:c("lev_ult","lev_ult_i"),className:"lv lv-ult",render:p("lev_ult","lev_ult_i"),customDropdownSortSource:o("lev_ult"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"WORLD'S END",name:"lev_we",data:"we_kanji",className:"lv lv-we",render:(s="we_kanji",l="we_star",function(e,a,n){return"display"===a?""!==n[s]?'<div class="inner-wrap"><span class="lv-num-simple">'+n[s]+'</span><span class="lv-num-precise">☆'+v(n[l])+"</span></div>":"":e}),customDropdownSortSource:o("we_star"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"WORLD'S END☆",name:"we_star",data:v("we_star"),className:"lv lv-we we-star",reverseSortOrder:!0,width:"3rem",filterable:!1},{displayTitle:"譜面",name:"chart_diff",data:function(e,a,s,l){return 1==flat_view?"sort"===a||"meta"===a?e.chart_diff:u(e.chart_diff):null},className:"lv-name detail-hidden",width:"3rem",createdCell:flat_view?function(e,a,s,l,n){$(e).addClass(s.chart_diff)}:null,render:flat_view?(a="chart_diff",function(e,s,l){return"display"===s?'<span class="diff-name">'+u(l[a])+"</span>":e}):null,customDropdownSortSource:flat_view?(e="chart_diff",function(a,s){return u(a[e],!0).localeCompare(u(s[e],!0))}):null,searchable:flat_view,filterable:flat_view,visible:!1},{displayTitle:"難易度グループ",name:"chart_lev",data:flat_view?"chart_lev":null,className:"lv detail-hidden",width:"4rem",customDropdownSortSource:o("chart_lev"),reverseSortOrder:!0,filterable:!1,visible:!1},{displayTitle:"譜面レベル",name:"chart_lev_i",data:flat_view?"chart_lev_i":null,className:"lv lv-name detail-hidden",render:flat_view?function(e,a,s,l){return function(s,n,t){if("display"===n){var r=u(t[e]);return"we_kanji"===t[e]?'<div class="inner-wrap"><span class="diff-name">'+r+'</span><span class="lv-num-wrap"><span class="lv-num-simple">'+t[a]+'</span><span class="lv-num-precise">☆'+t[l]+"</span></span></div>":'<div class="inner-wrap"><span class="diff-name">'+r+'</span><span class="lv-num-wrap"><span class="lv-num-simple">'+t[a]+'</span><span class="lv-num-precise">'+t[l]+"</span></span></div>"}return s}}("chart_diff","chart_lev",0,"chart_lev_i_display"):null,width:"4rem",createdCell:flat_view?function(e,a,s,l,n){$(e).addClass(s.chart_diff)}:null,filterable:!1,searchable:!1,visible:flat_view},{displayTitle:"ノート数",name:"chart_notes",data:flat_view?"chart_notes":null,className:"details notecount detail-hidden",width:"8em",searchable:!1},{displayTitle:"TAP",name:"chart_notes_tap",data:flat_view?"chart_notes_tap":null,className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"HOLD",name:"chart_notes_hold",data:flat_view?"chart_notes_hold":null,className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"SLIDE",name:"chart_notes_slide",data:flat_view?"chart_notes_slide":null,className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"AIR",name:"chart_notes_air",data:flat_view?"chart_notes_air":null,className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"FLICK",name:"chart_notes_flick",data:flat_view?"chart_notes_flick":null,className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"譜面作者",name:"chart_designer",data:flat_view?"chart_designer":null,width:"15em",className:"details detail-hidden designer",filterable:flat_view,searchable:flat_view},{displayTitle:"譜面作者",name:"chart_link",data:flat_view?"chart_link":null,render:flat_view?function(e,a,s){return"display"===a?_(s.chart_link):e}:null,width:"5em",className:"details detail-hidden chart-link",filterable:!1,searchable:!1},{displayTitle:"追加日",name:"date",data:function(e,a,s,l){return h(e.date)},className:"date",filterable:!0,render:function(e,a,s){return"display"===a?'<div class="inner-wrap">'+e+"</div>":e},reverseSortOrder:!0,width:"4em"},{displayTitle:"NEW",name:"new",data:"newflag",className:"detail-hidden",searchable:!1}],r=flat_view?[[18,"desc"],[17,"desc"],[27,"desc"]]:[[27,"desc"],[0,"asc"]];function i(e,a){return!!e.hasOwnProperty(a)&&""!==e[a]}function c(e,a){return function(s,l,n,t){return"sort"===l?""===s[a]?d(s[e]):d(s[a]):s[e]}}function d(e){return""!=e?(lev_processed=parseInt(e)<10?"0"+e:e,lev_processed):""}function o(e){return function(a,s){return d(a[e]).localeCompare(d(s[e]))}}function p(e,a){return function(s,l,n){if("display"===l){var t=n[e].match(/^([0-9]{1,2})(\+)?$/);if(t){var r=t[1];return"+"===t[2]?`<div class="inner-wrap"><span class="lv-num-simple"><span class="num">${r}</span><span class="plus">+</span></span><span class="lv-num-precise">${n[a]}</span></div>`:`<div class="inner-wrap"><span class="lv-num-simple"><span class="num">${r}</span></span><span class="lv-num-precise">${n[a]}</span></div>`}return`<div class="inner-wrap"><span class="lv-num-simple"><span class="num">${n[e]}</span></span><span class="lv-num-precise">${n[a]}</span></div>`}return s}}function v(e){const a={1:"1",3:"2",5:"3",7:"4",9:"5"};return a.hasOwnProperty(e)?a[e]:e}function _(e){return""!==e?`<a class="btn chartlink" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" href="https://sdvx.in/chunithm/${e}.htm">\n                        <span class="img"></span><span>譜面確認</span>\n                    </a><span class="chart-provider">sdvx.in 提供</span>`:""}function u(e,a){if(a)switch(e){case"lev_bas":s="1 BASIC";break;case"lev_adv":s="2 ADVANCED";break;case"lev_exp":s="3 EXPERT";break;case"lev_mas":s="4 MASTER";break;case"lev_ult":s="5 ULTIMA";break;case"we_kanji":s="6 WORLD'S END"}else switch(e){case"lev_bas":var s="BASIC";break;case"lev_adv":var s="ADVANCED";break;case"lev_exp":var s="EXPERT";break;case"lev_mas":var s="MASTER";break;case"lev_ult":var s="ULTIMA";break;case"we_kanji":var s="WORLD'S END"}return s}function m(e,a){return a?e.map((e=>["lev_bas","lev_adv","lev_exp","lev_mas","lev_ult","we_kanji"].map((a=>function(e,a){if(e[a])return"we_kanji"===a?{...e,chart_diff:a,chart_lev:e[a],chart_lev_i:v(e.we_star),chart_lev_i_display:v(e.we_star),chart_notes:e.lev_we_notes,chart_notes_tap:e.lev_we_notes_tap,chart_notes_hold:e.lev_we_notes_hold,chart_notes_slide:e.lev_we_notes_slide,chart_notes_air:e.lev_we_notes_air,chart_notes_flick:e.lev_we_notes_flick,chart_designer:e.lev_we_designer,chart_link:e.lev_we_chart_link}:{...e,chart_diff:a,chart_lev:e[a],chart_lev_i:parseFloat(e[a+"_i"]||e[a].replace("+",".5")),chart_lev_i_display:e[a+"_i"]||`<span class="approx">${parseFloat(e[a].replace("+",".5")).toFixed(1)}</span>`,chart_notes:e[a+"_notes"],chart_notes_tap:e[a+"_notes_tap"],chart_notes_hold:e[a+"_notes_hold"],chart_notes_slide:e[a+"_notes_slide"],chart_notes_air:e[a+"_notes_air"],chart_notes_flick:e[a+"_notes_flick"],chart_designer:e[a+"_designer"],chart_link:e[a+"_chart_link"]};return null}(e,a))))).flat().filter((e=>!!e)):e}function h(e,a){var s=e.slice(0,4),l=e.slice(4,6),n=e.slice(6,8),t=`${s}-${l}-${n}`;if("JP"==a)var r=((new Date).getFullYear()==s?"":s+"/")+`${l}/${n}(${["日","月","火","水","木","金","土"][new Date(t).getDay()]})`;else r=t;return r}if($.getJSON("data/music-ex.json",(e=>{$("#table").DataTable({data:m(e,flat_view),buttons:[{extend:"colvis",className:"config-btn",columns:".toggle",text:"カラムON/OFF",collectionTitle:"表示するカラムを選択",collectionLayout:"fixed",fade:150}],columns:t,deferRender:!0,dom:'<"toolbar-group"<"toolbar filters"><"toolbar search"f>><"toolbar secondary"<"info"ilB>><"table-inner"rt><"paging"p>',language:{sEmptyTable:"テーブルにデータがありません",sInfo:replaceUnitText(" _TOTAL_unit (_START_〜_END_ 表示中)"),sInfoEmpty:replaceUnitText(" 0 unit"),sInfoFiltered:replaceUnitText("（全 _MAX_ unit）"),sInfoPostFix:"",sInfoThousands:",",sLengthMenu:"1ページ表示 _MENU_",sLoadingRecords:"読み込み中...",sProcessing:"処理中...",sSearch:"キーワード検索",sZeroRecords:"一致するレコードがありません",oPaginate:{sFirst:"先頭",sLast:"最終",sNext:"NEXT",sPrevious:"PREV"},oAria:{sSortAscending:": 列を昇順に並べ替えるにはアクティブにする",sSortDescending:": 列を降順に並べ替えるにはアクティブにする"}},lengthMenu:[[25,50,100,-1],[25,50,100,"All"]],order:r,responsive:{details:{type:"column",target:"tr",display:$.fn.dataTable.Responsive.display.modal({header:function(e){var a=e.data(),s=encodeURIComponent(a.title.replaceAll("&","＆").replaceAll(":","：").replaceAll("[","［").replaceAll("]","］").replaceAll("#","＃").replaceAll('"',"”")),l="https://wikiwiki.jp/chunithmwiki/"+s,n=a.wikiwiki_url?a.wikiwiki_url:l;return'<div class="modal-header" style="--img:url(jacket/'+a.image+');"><span class="header-img"></span><span class="header-img-overlay"></span><div class="img-wrap"><img src="jacket/'+a.image+'"/></div><div class="content-wrap"><span class="title">'+a.title+'</span><span class="artist">'+a.artist+'</span><div class="quicklinks"><a class="wiki" href="'+n+'" target="_blank" rel="noopener noreferer nofollow">Wiki</a><a class="youtube" href="https://youtube.com/results?search_query=CHUNITHM+譜面確認+'+s+'" target="_blank" rel="noopener noreferer nofollow"></a></div></div></div>'},footer:function(e){var a=e.data();return'<div class="modal-footer"><div class="report"><a class="report-btn" href="https://twitter.com/intent/tweet?text=@zvuc_%0A%E3%80%90%23CHUNITHM_DB%20%E6%83%85%E5%A0%B1%E6%8F%90%E4%BE%9B%E3%80%91%0A%E6%9B%B2%E5%90%8D%EF%BC%9A'+encodeURIComponent(a.title)+'%0A%E8%AD%9C%E9%9D%A2%EF%BC%9A" target="_blank" rel="noopener noreferer nofollow">💬 足りない情報・間違いを報告する （Twitter）</a></div></div>'}}),renderer:function(e,a,s){var l=e.row(a).data(),n=""!==l.lev_ult?"ultima":"",r=""!==l.we_kanji?"worldsend":"",c=$.map(s,(function(e,a){e.columnIndex;if(!e.className.includes("detail-hidden")&&!e.className.includes("lv "))return'<div class="row '+e.className+'" data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><span class="row-label">'+e.title+"</span> <span>"+e.data+"</span></div>"})).join(""),d=$.map(s,(function(e,a){var s=t[e.columnIndex];if(!e.className.includes("detail-hidden")&&e.className.includes("lv ")){var n=s.name,c=n.concat("_notes"),d=n.concat("_notes_tap"),o=n.concat("_notes_hold"),p=n.concat("_notes_slide"),v=n.concat("_notes_air"),u=n.concat("_notes_flick"),m=n.concat("_designer"),h=n.concat("_chart_link");return'<div class="row '+e.className+'" data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><span class="row-label"><span>'+s.displayTitle+'</span></span> <span class="content-col"><span class="main-info-wrap">'+(r?'<div class="inner-wrap"><span class="lv-num-simple">'+l.we_kanji+'</span><span class="lv-num-precise">'+function(e){const a={1:"☆",3:"☆☆",5:"☆☆☆",7:"☆☆☆☆",9:"☆☆☆☆☆"};return a.hasOwnProperty(e)?a[e]:e}(l.we_star)+"</span></div>":e.data)+'</span><span class="sub-info-wrap">'+(i(l,c)?'<span class="notes-detail-wrap"><span class="notes"><span class="label">Notes</span><span>'+l[c]+'</span></span><span class="notes-sub-detail-wrap">'+(i(l,d)?'<span class="notes_tap"><span class="label">tap</span><span>'+l[d]+"</span></span>":"")+(i(l,o)?'<span class="notes_hold"><span class="label">hold</span><span>'+l[o]+"</span></span>":"")+(i(l,p)?'<span class="notes_slide"><span class="label">slide</span><span>'+l[p]+"</span></span>":"")+(i(l,v)?'<span class="notes_air"><span class="label">air</span><span>'+l[v]+"</span></span>":"")+(i(l,u)?'<span class="notes_flick"><span class="label">flick</span><span>'+l[u]+"</span></span>":"")+"</span></span>":"")+(i(l,m)?'<span class="designer"><span class="label">Designer</span><span>'+l[m]+"</span></span>":"")+"</span></span>"+(i(l,h)?'<span class="chart-link">'+_(l[h])+"</span>":"")+"</div>"}})).join(""),o=$('<div class="table-wrapper"/>').append($('<div class="details-table chart-details '+r+n+'"/>').append('<div class="table-header"><span class="th-label">CHART</span></div>').append(d)).append($('<div class="details-table misc-details"/>').append('<div class="table-header"><span class="th-label">SONG METADATA</span></div>').append(c));return o||!1}}},rowGroup:{dataSrc:"date",startRender:flat_view||""!=n?null:function(e,a){return"<div>"+h(a,"JP")+" 追加</div>"}},scrollX:!0,initComplete:function(){var e=this.api().rows().data(),a=this.api();a.columns().every((function(){var s=a.order(),l=this,r=l.data(),i=t[l.index()];if("filterable"in i&&1==i.filterable){var c=$('<div class="select-wrap"><span class="label">'+i.displayTitle+"</span></div>").appendTo($(".toolbar.filters")),d=$('<select id="'+i.name+'"><option value="" data-default>——</option></select>');if(d.appendTo(c),d.on("change",(function(){var e=$(this).val(),a=$.fn.dataTable.util.escapeRegex($(this).val());appendSelectboxStateClass($(this),e),27===l.index()||""===a&&27===s[0][0]?l.rowGroup().enable():l.rowGroup().disable(),updateQueryStringParameter(i.name,e),l.search(a?"^"+a+"$":"",!0,!1).draw()})),r=i.customDropdownSortSource?r.map((function(e,a){return a})).sort((function(a,s){var l=e[a],n=e[s];return"function"==typeof i.customDropdownSortSource?i.customDropdownSortSource(l,n):l[i.customDropdownSortSource].localeCompare(n[i.customDropdownSortSource])})).map((function(e){return r[e]})):r.sort(),i.reverseSortOrder&&r.reverse(),r.unique().each((function(e,a){""!=e&&d.append('<option value="'+e+'">'+e+"</option>")})),"URLSearchParams"in window){var o=n.get(i.name);if(null!==o){var p=unescapeSlashes(o);r.unique().each((function(e){d.val(p)})),appendSelectboxStateClass(d,p)}}}})),"URLSearchParams"in window&&(n.forEach((function(e,s){a.columns().every((function(){var e=t[this.index()],a=n.get(e.name),s=$.fn.dataTable.util.escapeRegex(decodeURIComponent(a));null!==a&&this.search(a?"^"+s+"$":"",!0,!1)}))})),a.draw()),a.on("order.dt",(function(){var e=a.order(),s=a.columns().search(),l=!1;for(let e=0;e<s.length;e+=1)if(e in s&&""!==s[e]){l=!0;break}return 27!==e[0][0]?void a.rowGroup().disable():27!==e[0][0]||l?void 0:void a.rowGroup().enable()})),$("#table").addClass("loading-done"),$("html").removeClass("table-loading")}})})),$("#table").on("column-visibility.dt",(function(){$.fn.dataTable.tables({visible:!0,api:!0}).columns.adjust()})),$("select#chart_lev").on("change",(function(){var e=$("#table").DataTable(),a=$(this),s=$(this).val(),l=$.fn.dataTable.util.escapeRegex($(this).val());"filter"==a.data("type")?(e.column("chart_lev:name").search(l?"^"+l+"$":"",!0,!1),updateQueryStringParameter("chart_lev",s),e.draw()):window.location.href="./lv?chart_lev="+encodeURIComponent(s)})),"URLSearchParams"in window){var f=n.get("chart_lev");if(null!==f){var w=unescapeSlashes(f);$("select#chart_lev").val(w)}}$("button.reset-search").on("click",(function(){$("#table").DataTable().order(r).search("").columns().search("").draw(),clearQueryStringParameter(),$(".toolbar.filters select").prop("selectedIndex",0).removeClass("changed"),console.log("search reset")}))}));
