/**
 * Created by Buddhi on 3/19/2017.
 */
(function () {
    'use strict';

    angular.module('aduwata').directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    };
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]).controller('ItemController', ItemController);

    ItemController.$inject = ['webservice'];

    function ItemController(webservice) {
        var vm = this;

        vm.submitItem = submitItem;

        vm.itemName = "";
        vm.itemPrice = 20;
        vm.itemColor = "asd";
        vm.itemSize = "M";
        vm.itemUsed = 0;
        vm.itemDescription = "";
        vm.uploadFile = null;
        vm.dataValues = {};
        vm.detailsDataList = {};


        vm.changeSubCategory = changeSubCategory;
        vm.changeItemDetails = changeItemDetails;
        vm.changeDetailList0Values = changeDetailList0Values;

        vm.districts = ["Colombo", "Kandy", "Galle", "Ampara", "Anuradhapura", "Badulla", "Batticaloa",
            "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kegalle", "Kilinochchi", "Kurunegala",
            "Mannar", "Matale", "Matara", "Moneragala", "Mullativu", "Nuwara Eliya", "Polonnaruwa",
            "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];

        initCategoriesWithSubCategories();


        function submitItem() {
            var sendObj = {
                "district":vm.district,
                "category_id": vm.selectedCategory.category_id,
                "subCategory_id": vm.selectedSubCategory.id,
                "title": vm.title,
                "description": vm.description,
                "price": vm.price,
                "contact": vm.contact,
                "details":vm.detailsDataList
            };

            // formData.append("file",vm.uploadFile);

            webservice.call('/item/save_advertisement', 'POST', sendObj).then(function (response) {
                vm.hiddenId = response.data.advertisement_id;


                var form = document.getElementById('form-id');
                form.action = 'http://localhost:8080/rest/advertisement/save_image?id=' + vm.hiddenId;
                console.log("Come before form submit");
                form.submit();
                console.log("Come after form submit");

                // var formData = new FormData(form);
                /*var request = new XMLHttpRequest();
                 var boundary=Math.random().toString().substr(2);
                 request.open('POST', '/item/save_image');
                 request.setRequestHeader("content-type",
                 "multipart/form-data; charset=utf-8; boundary=" + boundary);
                 request.send(formData);*/

            });
        }


        function initCategoriesWithSubCategories() {
            var search = "";
            var size = 10;
            var page = 0;
            var column = "Name";
            var asc = "false";

            var url = "/category" + "?" + "search=" + search + "&size=" + size + "&page=" + page + "&column=" + column + "&asc=" + asc;
            webservice.call(url, 'GET').then(function (response) {
                vm.categoryList = response.data.dataRows;
            });
        }

        function changeSubCategory() {
            vm.subCategoryList = vm.selectedCategory.subCategoryList;
        }

        function changeItemDetails() {
            if (vm.selectedSubCategory != null) {
                vm.subCategoryDetailList = vm.selectedSubCategory.scdetailList;
            }
        }

        function changeDetailList0Values(name,value) {
            vm.detailsDataList[name] = value;
        }

    }
})();
