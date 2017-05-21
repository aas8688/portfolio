$(document).ready(
    function() {

        var topping = $(".topping");
        var price_size;
        topping.addClass("hideTopping");

        // $('.selectpicker').selectpicker({
        //     style: 'btn-warning',
        //     size: 4
        // });
        var image_pizza = $("#image");
        var price_size;


        image_pizza.css("display", "block");

        $("#config-size").change(
            function() {
                var size = $("#config-size").val();

                if (size == "s") {
                    price_size = 11.30;

                    image_pizza.addClass("small");
                    image_pizza.removeClass("large medium");

                    topping.addClass("small");
                    topping.removeClass("large medium");

                    return price_size;

                }
                if (size == "m") {
                    price_size = 13.25;

                    image_pizza.addClass("medium");
                    topping.addClass("medium");

                    image_pizza.removeClass("small large");
                    topping.removeClass("small large");


                }
                if (size == "l") {
                    price_size = 16.00;


                    image_pizza.addClass("large");
                    topping.addClass("large");

                    image_pizza.removeClass("small medium");
                    topping.removeClass("small medium");
                }

            }
        );
        $("#config-crust").change(
            function() {
                var crust = $("#config-crust").val();

                if (crust == 1) {
                    image_pizza.attr("src", "./images/pan.png");
                }
                if (crust == 2) {
                    image_pizza.attr("src", "./images/handToss.png");
                }
                if (crust == 3) {
                    image_pizza.attr("src", "./images/stuffCrust.png");
                }
            }
        );
        $("#promot1").click(
            function() {
                topping.addClass("hideTopping");
                $(":checkbox").prop('checked', false);
                $("#pepperoni").prop('checked', true);
                $(".pepperoni").removeClass("hideTopping");
                $("#cart").html("<h2>Cart</h2>");
                var price = $(this).attr("data-price");
                var labelId = $(this).attr("data-id");
                $("#cart").append("<p class='cartPrice'>" + labelId + "<span> $" + price + "</span></p>");
                $("#cart").append("<hr>");
                $("#cart").append("<p class='cartTotal'>TOTAL: $" + price + "</p>");

            });
        $("#promot2").click(
            function() {
                topping.addClass("hideTopping");

                $(":checkbox").prop('checked', false);
                $("#chicken").prop('checked', true);

                $("#onions").prop('checked', true);
                $("#pepper").prop('checked', true);

                $(".chicken").removeClass("hideTopping");
                $(".pepper").removeClass("hideTopping");
                $(".onions").removeClass("hideTopping");

                $("#cart").html("<h2>Cart</h2>");
                $(".chicken").removeClass("hideTopping");
                var price = $(this).attr("data-price");
                var labelId = $(this).attr("data-id");
                $("#cart").append("<p class='cartPrice'>" + labelId + "<span> $" + price + "</span></p>");
                $("#cart").append("<hr>");
                $("#cart").append("<p class='cartTotal'>TOTAL: $" + price + "</p>");


            });
        $("#promot3").click(
            function() {
                topping.addClass("hideTopping");

                $(":checkbox").prop('checked', false);
                $("#steak").prop('checked', true);
                $("#tomato").prop('checked', true);
                $(".steak").removeClass("hideTopping");
                $(".tomato").removeClass("hideTopping");

                $("#cart").html("<h2>Cart</h2>");
                var price = $(this).attr("data-price");
                var labelId = $(this).attr("data-id");
                $("#cart").append("<p class='cartPrice'>" + labelId + "<span> $" + price + "</span></p>");
                $("#cart").append("<hr>");
                $("#cart").append("<p class='cartTotal'>TOTAL: $" + price + "</p>");

            });
        $("#promot4").click(
            function() {
                topping.addClass("hideTopping");

                $(":checkbox").prop('checked', false);
                $("#pepperoni").prop('checked', true);
                $("#tomato").prop('checked', true);
                $("#pepper").prop('checked', true);

                $(".pepperoni").removeClass("hideTopping");
                $(".pepper").removeClass("hideTopping");
                $(".tomato").removeClass("hideTopping");

                $("#cart").html("<h2>Cart</h2>");
                var price = $(this).attr("data-price");
                var labelId = $(this).attr("data-id");
                $("#cart").append("<p class='cartPrice'>" + labelId + "<span> $" + price + "</span></p>");
                $("#cart").append("<hr>");
                $("#cart").append("<p class='cartTotal'>TOTAL: $" + price + "</p>");

            });

        $("input").click(
            function() {

                var items = "";
                topping.addClass("hideTopping");
                // var total = 12.99;

                var total;
                price_size = 16.00;

                $("#cart").html("<h2>Cart</h2>");
                $("input").each(
                    function() {

                        var labelId = $(this).attr("data-label-id");

                        if ($(this).is(":checked")) {
                            var price = $(this).attr("data-price");

                            $("#cart").append("<p class='cartPrice'>" + labelId + "<span> $" + price + "</span></p>");

                            var toppingImage = $(this).attr("data-image");
                            $(toppingImage).removeClass("hideTopping");

                            total = parseFloat(price_size) + parseFloat(price);

                            items += $(this).attr("id") + " ";
                            $("#" + labelId).addClass("boldText");

                        } else {
                            $("#" + labelId).removeClass("boldText");

                        }

                    }
                );

                $("#cart").append("<hr>");
                $("#cart").append("<p class='cartTotal'>TOTAL: $" + total.toFixed(2) + "</p>");
            }

        );
    }
);
13
