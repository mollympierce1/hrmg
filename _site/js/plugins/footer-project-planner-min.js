function isValidEmailAddress(e){var n=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;return n.test(e)}jQuery(document).ready(function($){function e(){var e=new FormData(r.get(0));$("#project--planner-nav").hide(),$(".project--planner-review").fadeIn(),jQuery.ajax({action:"footer_project_planner",type:"POST",url:t,data:e,cache:!1,contentType:!1,processData:!1,dataType:"json",success:function(e){$(".project--planner-review").removeClass("loading"),1==e.error?(r.find(".error-message").remove(),$("#project--planner-nav").fadeIn(300),$('*[data-input-name="'+e.error_field_id+'"]').parents(".project--planner-section").fadeIn(300).addClass("active").append('<span class="error-message" style="display:none;">'+e.error_message+"</span>"),$('*[data-input-name="'+e.error_field_id+'"]').parents(".project--planner-section").find(".error-message").fadeIn(300)):($(".ty-message").fadeIn(300),ga("send","pageview","/contact-us-success-"+s))},error:function(){alert("Error. Please, contact the webmaster!")}})}var n="This field is required.",a=[],r=$("#project--planner-form"),t=r.attr("action");$('input[type="range"]').rangeslider({polyfill:!1,onSlide:function(e,n){var a=Number(n).toLocaleString("en");$(".range--placeholder .value").html(a)}}),$('input[type="range"]').on("change",function(e){$('input[name="budget-skip"]').val("0")}),$("#agree").on("change",function(e){1==$(this).prop("checked")?$(".send").removeClass("inactive"):$(".send").addClass("inactive")}),$(".input--span").keydown(function(e){var r=e.keyCode||e.which,t=$(this).parents(".project--planner-section"),s=$(this).parents(".project--planner-section"),i=s.find(".input--container").data("input-name");if($(".input--span").text().length>0&&(s.find(".error-message").remove(),s.find(".input--container").removeClass("has-error")),s.find(".input--placeholder-radio.active").length>0&&s.find(".error-message").remove(),13==r){var p=$(".project--planner-section.active").next(".project--planner-section");if(e.preventDefault(),setTimeout(function(){$(p).find(".note").fadeIn(),setTimeout(function(){$(p).find(".note").fadeOut()},3e3)},500),s.find(".error-message").remove(),s.find(".input--container").removeClass("has-error"),s.find(".input--container.required")&&s.find(".input--container.required .input--span:empty").length>0)return s.append('<span class="error-message" style="display:none;">'+n+"</span>"),s.find(".error-message").fadeIn(300),s.find(".input--container").addClass("has-error"),!1;if(s.find(".input--container.required")&&s.find(".input--placeholder-radio").length>0&&s.find(".input--placeholder-radio.active").length<=0)return s.append('<span class="error-message" style="display:none;">'+n+"</span>"),s.find(".error-message").fadeIn(300),s.find(".input--container").addClass("has-error"),!1;if("email-address"==i){var o=s.find(".input--span").text();if(!isValidEmailAddress(o))return s.append('<span class="error-message" style="display:none;">Please enter a valid email address.</span>'),s.find(".error-message").fadeIn(300),s.find(".input--container").addClass("has-error"),!1}if(s.find(".input--container.required")&&"agree"==i&&0==$("#agree").prop("checked"))return s.append('<span class="error-message" style="display:none;"> Please agree to our Privacy Policy.</span>'),s.find(".error-message").fadeIn(300),!1;s.is("#project--planner-budget")||s.is("#project--planner-services")||$('input[name="'+i+'"]').val(s.find(".input--span").text()),s.is("#project--planner-services")&&(s.find(".input--placeholder-radio.active").each(function(e,n){a.push($(this).text())}),$('input[name="'+i+'"]').val(a)),$(t).next().is("#project--planner-budget")||$(t).next().is("#project--planner-phone")?$(".skip").show():$(".skip").hide(),$(t).next(".project--planner-section").length?($(t).hide().removeClass("active"),$(t).next().fadeIn().addClass("active"),$("#project--planner-nav a").removeClass("disabled")):(e.preventDefault(),$("#project--planner-nav .send").trigger("click")),$(t).next(".project--planner-section").next(".project--planner-section").length?$("#project--planner-nav .next").removeClass("disabled"):$("#project--planner-nav .next").addClass("disabled send inactive")}}),$(".input--placeholder-radio").click(function(){$(this).toggleClass("active")}),$("#project--planner-services .input--placeholder-radio").click(function(){var e=$(this).html().toLowerCase();$("#project--planner-services .input--placeholder-radio.active").length>0&&$("#project--planner-services").find(".error-message").remove(),$(this).hasClass("active")?$("#review--services").append('<span id="'+e+'">'+e+"</span>"):$("#"+e).remove();var n=$("#review--services span").length;$("#review--services span").attr("class","").addClass("service--1of"+n)}),$(".next--section").click(function(){var e=$(this).parents(".project--planner-section"),n=$(this).parents(".project--planner-section").next(".project--planner-section");$(e).next(".project--planner-section").length&&($(e).hide().removeClass("active"),$(e).next().fadeIn().addClass("active"),$("#project--planner-nav a").removeClass("disabled")),$("#project--planner-nav").removeClass("hide"),setTimeout(function(){$(n).find(".note").fadeIn(),setTimeout(function(){$(n).find(".note").fadeOut()},3e3)},500),$(e).next(".project--planner-section").next(".project--planner-section").length?$("#project--planner-nav .next").removeClass("disabled"):$("#project--planner-nav .next").addClass("disabled send inactive")}),$.fn.firstWord=function(){var e=this.text().trim().split(" "),n=e.shift();return e.length>0?"<span class='firstWord'>"+n+"</span>":n},$("#project--planner-nav .next, .skip").click(function(){var r=$(".project--planner-section.active"),t=$(".project--planner-section.active"),s=t.find(".input--container").data("input-name");if(t.find(".error-message").remove(),t.find(".input--container").removeClass("has-error"),t.find(".input--container.required")&&t.find(".input--container.required .input--span:empty").length>0)return t.append('<span class="error-message" style="display:none;">'+n+"</span>"),t.find(".error-message").fadeIn(300),t.find(".input--container").addClass("has-error"),!1;if(t.find(".input--container.required")&&t.find(".input--placeholder-radio").length>0&&t.find(".input--placeholder-radio.active").length<=0)return t.append('<span class="error-message" style="display:none;">'+n+"</span>"),t.find(".error-message").fadeIn(300),!1;if("email-address"==s){var i=t.find(".input--span").text();if(!isValidEmailAddress(i))return t.append('<span class="error-message" style="display:none;">Please enter a valid email address.</span>'),t.find(".error-message").fadeIn(300),t.find(".input--container").addClass("has-error"),!1}if(t.find(".input--container.required")&&"agree"==s&&0==$("#agree").prop("checked"))return t.append('<span class="error-message" style="display:none;"> Please agree to our Privacy Policy.</span>'),t.find(".error-message").fadeIn(300),!1;if(t.is("#project--planner-budget")||t.is("#project--planner-services")||$('input[name="'+s+'"]').val(t.find(".input--span").text()),t.is("#project--planner-services")&&(t.find(".input--placeholder-radio.active").each(function(e,n){a.push($(this).text())}),$('input[name="'+s+'"]').val(a)),$(r).next().is("#project--planner-budget")||$(r).next().is("#project--planner-phone")?$(".skip").show():$(".skip").hide(),$(this).hasClass("skip")&&$('input[name="budget-skip"]').val("1"),$(this).hasClass("send")){e();var p=$('*[data-input-name="name"]').find(".input--span"),o=p.firstWord();$("#review--name").html(o),$(r).hide().removeClass("active")}$(r).next(".project--planner-section").length&&($(r).hide().removeClass("active"),$(r).next().fadeIn().addClass("active"),$("#project--planner-nav a").removeClass("disabled")),$(r).next(".project--planner-section").next(".project--planner-section").length?$("#project--planner-nav .next").removeClass("disabled"):$("#project--planner-nav .next").addClass("disabled send inactive"),setTimeout(function(){$(r).next(".project--planner-section").find(".note").fadeIn(),setTimeout(function(){$(r).next(".project--planner-section").find(".note").fadeOut()},3e3)},500)}),$("#project--planner-nav .prev").click(function(){var e=$(".project--planner-section.active");$(e).prev().is("#project--planner-budget")||$(e).prev().is("#project--planner-phone")?$(".skip").show():$(".skip").hide(),$(e).prev(".project--planner-section").length&&($(e).hide().removeClass("active"),$(e).prev().fadeIn().addClass("active"),$("#project--planner-nav a").removeClass("disabled")),$("#project--planner-nav a").removeClass("send inactive"),$(e).prev(".project--planner-section").prev(".project--planner-section").length?($("#project--planner-nav").removeClass("hide"),$("#project--planner-nav .prev").removeClass("disabled")):($("#project--planner-nav").addClass("hide"),$("#project--planner-nav .prev").addClass("disabled"))}),$(".input--placeholder").not("#textarea--toggle").click(function(){$(this).hide(),$(this).siblings(".input--span").get(0).focus(),$(this).siblings(".input--span").fadeTo("fast",1,function(){})}),$("#textarea--toggle").click(function(e){e.preventDefault();var n=$(this).parents(".project--planner-section").children(".textarea--container");$(n).fadeTo("fast",1,function(){$(this).children("textarea").focus()})});var s=$("#ga-page").val()});
