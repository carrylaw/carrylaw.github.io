/**
 * encode the keyword before submit
 */
function encodeKeyword() {
	var keywordStr = $('input.js-typeahead').val();
	$('input.js-typeahead').val(encodeURI(keywordStr));
}
