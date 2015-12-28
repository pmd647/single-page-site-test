
  $(function() {
    var states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District Of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
	  "Michigan",
	  "Minnesota",
	  "Mississippi",
	  "Missouri",
	  "Nebraska",
	  "Nevada",
	  "New Hampshire",
	  "New Jersey",
	  "New Mexico",
	  "New York",
	  "North Carolina",
	  "North Dakota",
	  "Ohio",
	  "Oklahoma",
	  "Oregon",
	  "Pennsylvania",
	  "Rhode Island",
	  "South Carolina",
	  "South Dakota",
	  "Tennessee",
	  "Texas",
	  "Utah",
	  "Vermont",
	  "Virginia",
	  "Washington",
	  "West Virginia",
	  "Wisconsin",
	  "Wyoming"  
    ];
    $("#states").autocomplete({
      source: states,

	  select: function(event, ui) {
	  	
		var selectstate = ui.item.value;
		
		$("#statemodal").modal("show");
		$("h4.modal-title").text(selectstate);

	  }

    });
  });
  
  
var products = [
        {
            id : 1,
            order: 1,
            'title' : 'Product Title 1',
            'price' : 'Starting at $500',
            'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
                +'<ul>'
                        + '     <li class=one>Non porta dui euismod nec</li>'
                        + '     <li class=two>Ut tristique ipsum velit</li>'
                                        + '     <li class=three>Quisque mollis justo</li>'
                +'</ul>',
            'linktarget'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'images/cereal_b.jpg'
        },
        {
            id : 2,
            order: 2,
            'title' : 'Product Title 2',
            'price' : 'Starting at $1900',
            'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
            'linktarget'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'images/flower_b.jpg'
        },
       {
            id : 3,
            order: 3,
            'title' : 'Product Title 3',
            'price' : 'Staring at $2730',
            'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
            'linktarget'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'images/machine_b.jpg'
        },
       {
            id : 4,
            order: 4,
            'title' : 'Product Title 4',
            'price' : 'Starting at $731',
            'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
            'linktarget'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                            'src'        : 'images/candy_b.jpg'
        }

 ]
	
$(document).ready(function(){
	 
 
	$("select.filterby").change(function(){
		var filters = $.map($("select.filterby").toArray(), function(e){
			return $(e).val();
		}).join(".");
		$("div#productfilter").find("div").hide();
		$("div#productfilter").find("div." + filters).show();	
	});



	var i=1;
	products.forEach(function(product) {
	
		
		var output = "<div class='row'" + " " + "id=" + product.id + ">" + "<div class='productdetailwrapper'>" + "<div class='col-md-12'>" + "<img src='images/close.png' id='closeproduct' alt='Close'>" + "</div>";
		output += "<div class='col-md-6'>" + "<h4>" + product.title + "</h4>" + "<p class='price'>" + product.price + "</p>" + "<p>" + product.desc + "</p>" + "<p><a class='btn btn-default buyonlinebtn' role='button' href='" + product.linktarget + "'>Buy Online</a>" + "</div>" + "<div class='col-md-6" + " " + "prod" + i + "'>" + "<div class='prodlistitem1'>" + "</div>" + "<div class='prodlistitem2'>" + "</div>" + "<div class='prodlistitem3'>" + "</div>" + "</div>" + "<div class='clear'></div></div>";
		output += "</div>" + "</div>";
		i++;
	$("#productdetail").append(output);
	});



	$("#productdetailcontainer .container .row").hide();

	$(".prodlistitem1, .prodlistitem2, .prodlistitem3").hide();

	$("#one h4, #one img, #one .learnmoretext").click(function () {
		$("#1").show();
		$("#2, #3, #4").hide();
		$(".prodlistitem1, .prodlistitem2, .prodlistitem3").show();
	});

	$("#two h4, #two img, #two .learnmoretext").click(function () {
		$("#2").show();
		$("#1, #3, #4").hide();
		$(".prodlistitem1, .prodlistitem2, .prodlistitem3").hide();
	});

	$("#three h4, #three img, #three .learnmoretext").click(function () {
		$("#3").show();
		$("#1, #2, #4").hide();
		$(".prodlistitem1, .prodlistitem2, .prodlistitem3").hide();
	});

	$("#four h4, #four img, #four .learnmoretext").click(function () {
		$("#4").show();
		$("#1, #2, #3").hide();
		$(".prodlistitem1, .prodlistitem2, .prodlistitem3").hide();
	});

	$("#1 #closeproduct, #2 #closeproduct, #3 #closeproduct, #4 #closeproduct").click(function () {
		$("#productdetailcontainer .container .row").hide();
		
	});
	

	$("#productdetail ul li.one").hover(
	  function() {
		$(".prodlistitem1").addClass("addproductborder");
	  }, function() {
		$(".prodlistitem1").removeClass("addproductborder");
	  }
	);

	$(".prodlistitem1").hover(
	  function() {
		$("#productdetail ul li.one").addClass("addproductborder");
	  }, function() {
		$("#productdetail ul li.one").removeClass("addproductborder");
	  }
	);

	$("#productdetail ul li.two").hover(
	  function() {
		$(".prodlistitem2").addClass("addproductborder");
	  }, function() {
		$(".prodlistitem2").removeClass("addproductborder");
	  }
	);

	$(".prodlistitem2").hover(
	  function() {
		$("#productdetail ul li.two").addClass("addproductborder");
	  }, function() {
		$("#productdetail ul li.two").removeClass("addproductborder");
	  }
	);

	$("#productdetail ul li.three").hover(
	  function() {
		$(".prodlistitem3").addClass("addproductborder");
	  }, function() {
		$(".prodlistitem3").removeClass("addproductborder");
	  }
	);

	$(".prodlistitem3").hover(
	  function() {
		$("#productdetail ul li.three").addClass("addproductborder");
	  }, function() {
		$("#productdetail ul li.three").removeClass("addproductborder");
	  }
	);

});
  