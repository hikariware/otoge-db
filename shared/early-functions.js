function updateChartLevelSelectboxValue(e){var t=e.get("chart_lev");if(null!==t){var a=unescapeSlashes(t);document.querySelector("select#chart_lev").value=a}}function unescapeSlashes(e){if(null!==e){let t=e.replace(/(^|[^\\])(\\\\)*\\$/,"$&\\");try{t=JSON.parse(`"${t}"`)}catch(t){return e}return e.replace(/(^|[^\\])(\\\\)*\\$/,"$&\\")}return e}document.addEventListener("DOMContentLoaded",(function(){updateChartLevelSelectboxValue(new URLSearchParams(window.location.search))}));