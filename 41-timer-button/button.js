define(["jquery"],function(d){return function(t){var n,e=t,i=e.enabled,r=e.duration,a=d('<input class="timer-button" type="button">');function u(){i=!1,a.attr("disabled","disabled"),c(),n=window.setInterval(function(){r--,c(),0===r&&o()},1e3)}function o(){i=!0,r=e.duration,clearInterval(n),c(),a.removeAttr("disabled")}function c(){var t=i?e.text:e.text+" ("+r+" s)";a.val(t)}return d(e.container).append(a),(e.enabled?o:u)(),a.click(function(){a.trigger("timer-button-click"),e.enabled&&u()}),a}});