function(cb) {
	
	$(this).empty();
	$(this).append('<tr id="noapps"><td colspan="2">No Couchapps Found</td></tr>');
	
	$.couch.allDbs({
	      success : function(dbs) {

	    	  dbs.forEach( function(db) {
	    		  
		    	  $.couch.db(db).allApps({
		    		    eachApp: function(appName, appPath, ddoc) {
		    		    	var app = new Object;
		    		    	app.db = db;
		    		    	app.appName = appName;
		    		    	app.appPath = appPath;
		    		    	app.ddoc = ddoc;
		    		    	cb(app);
		    		    }
		    		});
	    		  
	    	  });
	        }
	      });

}