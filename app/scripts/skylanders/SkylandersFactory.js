app.factory('skylandersFactory', function ($http) {
            return {
                getSkylanders: function () {
                    return $http.get(app.url);
                },
                addSkylander: function (skylander) {
                    return $http.post(app.url, skylander);
                },
                deleteSkylander: function (skylander) {
                    return $http.delete(app.url +"/"+skylander._id);
                },
                updateSkylander: function (skylander) {
                    return $http.put(app.url + "/"+skylander._id, skylander);
                }
            };
        });
        