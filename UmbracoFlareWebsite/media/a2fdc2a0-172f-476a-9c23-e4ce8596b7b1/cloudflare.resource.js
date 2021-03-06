﻿angular.module('umbraco.resources').factory('cloudflareResource', function ($q, $http) {
    //the factory object returned
    return {
        //call the Cloudflare Umbraco APi Controller that we created on the backend under the controllers folder
        purgeCacheForUrls: function (urls) {
            return $http({
                url: "backoffice/UmbracoFlare/CloudflareUmbracoApi/PurgeCacheForUrls",
                method: "POST",
                data: urls
            });
        },

        purgeAll: function () {
            /*
            return $http({
                url: "backoffice/ScyllaPlugins/CloudflareUmbracoApi/PurgeAll",
                method: "POST",
                data: { '': domain }
            });*/
            return $http.post(
                "backoffice/UmbracoFlare/CloudflareUmbracoApi/PurgeAll"
                );
        },


        purgeStaticFiles: function(staticFiles){
            return $http.post(
                "backoffice/UmbracoFlare/CloudflareUmbracoApi/PurgeStaticFiles",
                staticFiles
            );
        },

        getConfigurationStatus: function () {
            return $http({
                url: "backoffice/UmbracoFlare/CloudflareUmbracoApi/GetConfig",
                method: "GET"
            });
        },

        purgeCacheForNodeId: function (nodeId) {
            return $http({
                url: "backoffice/UmbracoFlare/CloudflareUmbracoApi/PurgeCacheForContentNode",
                method: "POST",
                data: nodeId
            });
        },

        updateConfigurationStatus: function(on){
            return $http({
                url: "backoffice/UmbracoFlare/CloudflareUmbracoApi/UpdateConfigStatus",
                method: "POST",
                data: on
            });
        },

        getUmbracoDomains: function () {
            return $http({
                url: "backoffice/UmbracoFlare/CloudflareUmbracoApi/GetDomainsRegisteredWithUmbraco",
                method: "GET"
            });
        }
    }
});