function togglePassword() {
	var x = document.getElementById("identity_password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}


$(function () {
	$("#upload_link").on('click', function (e) {
		e.preventDefault();
		$("#upload:hidden").trigger('click');
	});
});


$(function () {
	$('.single-item').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});


$(function () {
	$("#country, #companyCountry").countrySelect({
		initialCountry: 'auto',
		geoIpLookup: function (callback) {
			$.get('http://ipinfo.io', function () {}, "jsonp").always(function (resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
			});
		}
	});
});


var input = document.querySelector("#phoneNumber, #contactPhoneNumber,#companyPhoneNumber");
var locale = window.intlTelInput(input, {
	initialCountry: "auto",
	geoIpLookup: function (callback) {
		$.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
			var countryCode = (resp && resp.country) ? resp.country : "";
			callback(countryCode);
		});
	},
	utilsScript: "js/utils.js" // just for formatting/placeholders etc
});


var input = document.querySelector("#contactPhoneNumber");
window.intlTelInput(input, {
	initialCountry: "auto",
	geoIpLookup: function (callback) {
		$.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
			var countryCode = (resp && resp.country) ? resp.country : "";
			callback(countryCode);
		});
	},
	utilsScript: "js/utils.js" // just for formatting/placeholders etc
});
