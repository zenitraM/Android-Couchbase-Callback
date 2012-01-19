function(e, r) {
	if(e.db != 'welcome') {
		$('#noapps').remove();
		$(this).append('<tr><td>' + e.db + '</td><td><a href="' + e.appPath + '">' + e.appName + '</a></td></tr>');
	}
};