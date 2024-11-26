export function change_lang(value)
{
	console.log(value);
	var current = getCookie('ft-lang');

	if (value !== current)
	{
		updateCookie('ft-lang', value);
		location.reload();
	}
}

function initCookie()
{
	window.cookieMap = document.cookie.split(';').map('=');
}	

window.change_lang = change_lang;

function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function updateCookie(name, value, days)
{
	var cookieMap = document.cookie.split(';').map(v => v.split("="));
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	var cookieString;
	cookieMap[name] = (value || "") + expires + "; path=/";
	window.cookie = "";
	for (var key in cookieMap)
	{
		console.log(key);
	}
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}