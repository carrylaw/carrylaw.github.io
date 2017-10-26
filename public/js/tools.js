/**
 * encode the keyword before submit
 */
function encodeKeyword() {
	var keywordStr = $('input.js-typeahead').val();
	$('input.js-typeahead').val(encodeURI(keywordStr));
}

/**
 * get the bottom offset of an element
 */
function getOffsetBottom(selector){
	var offsetTop = $(selector).offset().top;
	var documentHeight = $(selector).height();
	var offsetBottom = $(window).height()-(offsetTop+documentHeight);
	return offsetBottom;
}
