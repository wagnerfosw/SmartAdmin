define(["modules/forms/module","bootstrap-validator"],function(a){"use strict";a.registerDirective("bootstrapMovieForm",function(){return{restrict:"E",replace:!0,templateUrl:"build/modules/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html",link:function(a,b){b.bootstrapValidator({feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{title:{group:".col-md-8",validators:{notEmpty:{message:"The title is required"},stringLength:{max:200,message:"The title must be less than 200 characters long"}}},genre:{group:".col-md-4",validators:{notEmpty:{message:"The genre is required"}}},director:{group:".col-md-4",validators:{notEmpty:{message:"The director name is required"},stringLength:{max:80,message:"The director name must be less than 80 characters long"}}},writer:{group:".col-md-4",validators:{notEmpty:{message:"The writer name is required"},stringLength:{max:80,message:"The writer name must be less than 80 characters long"}}},producer:{group:".col-md-4",validators:{notEmpty:{message:"The producer name is required"},stringLength:{max:80,message:"The producer name must be less than 80 characters long"}}},website:{group:".col-md-6",validators:{notEmpty:{message:"The website address is required"},uri:{message:"The website address is not valid"}}},trailer:{group:".col-md-6",validators:{notEmpty:{message:"The trailer link is required"},uri:{message:"The trailer link is not valid"}}},review:{validators:{stringLength:{max:500,message:"The review must be less than 500 characters long"}}},rating:{validators:{notEmpty:{message:"The rating is required"}}}}})}}})});