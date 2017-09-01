serviceModule.factory('dashboardService', ['$http', '$q', function($http, $q) {

    var dashboardData = {
        getPoints: function() {
            return [{
                    title: "Title1",
                    date: "21/8/2017",
                    content: "pavan",
                    points: [{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    }]
                },
                {
                    title: "Title2",
                    date: "21/8/2017",
                    content: "content1",
                    points: [{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    }]
                },
                {
                    title: "Title3",
                    date: "21/8/2017",
                    content: "content1",
                    points: [{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    }]
                },
                {
                    title: "Title4",
                    date: "21/8/2017",
                    content: "content1",
                    points: [{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    },{
                    	notes: "Stareted preparation"	
                    }]
                }
            ];
        }
    };

    return dashboardData;

}]);