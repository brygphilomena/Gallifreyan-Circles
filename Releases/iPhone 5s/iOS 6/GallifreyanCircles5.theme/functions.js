
/* dont change anything below this line unless you know what you are doing :-) */

	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();	

function initiate() {
	
	if (hours > 12) hours360 = hours - 12;
	else hours360 = hours; 
	
	minutesDeg = 6 * minutes;
	hoursDeg   = 30 * hours360;
	secondsDeg = 6 * (seconds + 2);
	
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;

	
	//circles
	$('#minutes-c > img').css({'-webkit-transform' : 'rotate(' + minutesDeg + 'deg)'});
	$('#hours-c > img').css({'-webkit-transform' : 'rotate(' + hoursDeg + 'deg)'});
	$('#seconds-c > img').css({'-webkit-transform' : 'rotate(' + secondsDeg + 'deg)'});
	
	
	//center
	$('#am_pm').html(hours + ':' + minutes);
	$('#day').html(Day());
	
	date = d.getDate();
	month = d.getMonth() + 1;
	year = new String(d.getFullYear());
	
	if (date < 10) date = '0' + date; 
	if (month < 10) month = '0' + month; 
	year = year.substr(2, 2);
	
	$('#date').html(date + '.' + month + '.' + year);
	
	setTimeout(no_animation_delay, 2000); // removes animation delay and lowers current clock animations from 2 seconds to 1
}

function no_animation_delay() {
	$('#circles > img').css({'-webkit-transition-delay' : '0s', '-webkit-transition' : 'all 1s ease-in-out'});
	$('#seconds-c > img').css({'-webkit-transition-delay' : '0s', '-webkit-transition' : 'all 0.3s linear'});
	
	update(); // starts normal clock updating process
}

function update() {	
	d = new Date();
	hours = d.getHours();
	minutes = d.getMinutes();
	seconds = d.getSeconds();	

	if (hours > 12) hours360 = hours - 12;
	else hours360 = hours; 	
	
	minutesDeg = 6 * minutes;
	hoursDeg   = 30 * hours360;
	secondsDeg = 6 * seconds;	

	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	
	//circles
	$('#minutes-c > img').css({'-webkit-transform' : 'rotate(' + minutesDeg + 'deg)'});
	$('#hours-c > img').css({'-webkit-transform' : 'rotate(' + hoursDeg + 'deg)'});
	
	if (seconds == 0) {
		$('#seconds-c > img').css({'-webkit-transition' : 'all 1s ease-in-out'});
	} else if (seconds == 1) {
		$('#seconds-c > img').css({'-webkit-transition' : 'all 0.3s linear'});
	}
	
	$('#seconds-c > img').css({'-webkit-transform' : 'rotate(' + secondsDeg + 'deg)'});	
	
	//center
	$('#am_pm').html(hours + ':' + minutes);
	$('#day').html(Day());
	
	date = d.getDate();
	month = d.getMonth() + 1;
	year = new String(d.getFullYear());
	
	if (date < 10) date = '0' + date; 
	if (month < 10) month = '0' + month; 
	year = year.substr(2, 2);
	
	$('#date').html(date + '.' + month + '.' + year);
	
	setTimeout(update, 1000);
}	

function Day() {
    day = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");
    return day[d.getDay()];
}
