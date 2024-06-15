$(document).ready(function () {

    // HEADER

    $(document).on('click', '#search', function () {
        $(this).next().toggle();
    })

    $(document).on('click', '#mobile-navbar-close', function () {
        $(this).parent().removeClass("active");

    })
    $(document).on('click', '#mobile-navbar-show', function () {
        $('.mobile-navbar').addClass("active");

    })

    $(document).on('click', '.mobile-navbar ul li a', function () {
        if ($(this).children('i').hasClass('fa-caret-right')) {
            $(this).children('i').removeClass('fa-caret-right').addClass('fa-sort-down')
        }
        else {
            $(this).children('i').removeClass('fa-sort-down').addClass('fa-caret-right')
        }
        $(this).parent().next().slideToggle();
    })









//Basket Add

  
    $(document).on("click", ".add-product-basket", function () {

        let id = parseInt($(this).attr("data-id"));


        $.ajax({
            url: `home/AddProductToBasket?id=${id}`,
            type: "Post",
            success: function (response) {
                $(".rounded-circle").text(response.count)
                $(".basket-total-price").text(`CART($${response.total})`);
            },
        });
    })


    //remove basket


    $(document).on("click", ".delete-basket-data", function () {

        let id = parseInt($(this).attr("data-id"));
        console.log(id)
        $.ajax({
            url: `cart/DeleteProductFromBasket?Id=${id}`,
            type: "Post",
            success: function (response) {

                $(".rounded-circle").text(response.count)
                $(".basket-total-price").text(`CART($${response.total})`);
                $(".cart-total").text(`Total : ${response.total}`)

                if (response.total == 0) {
                    $(".cart-body").html(`<div class="alert alert-warning" role="alert"> Cart page is empty!  </div>`)
                }

                else {
                $(`[data-id =${id}]`).parent().parent().remove()
                }
            },
        });
    });






    //delete image


    $(document).on("click", ".delete-image-btn", function () {

        let imageId = parseInt($(this).attr("data-image-id"));
        let productId = parseInt($(this).attr("data-product-id"));

        let request = {imageId,productId}


        $.ajax({
            url: `/admin/product/DeleteProductImage`,
            type: "Post",
            data:request,
            success: function (response) {
              $(`[data-image-id = ${imageId}]`).parent().remove()
                
            },
        });
    })









  
    // SLIDER

    $(document).ready(function(){
        $(".slider").owlCarousel(
            {
                items: 1,
                loop: true,
                autoplay: true
            }
        );
      });

    // PRODUCT

    $(document).on('click', '.categories', function(e)
    {
        e.preventDefault();
        $(this).next().next().slideToggle();
    })

    $(document).on('click', '.category li a', function (e) {
        e.preventDefault();
        let category = $(this).attr('data-id');
        let products = $('.product-item');
        
        products.each(function () {
            if(category == $(this).attr('data-id'))
            {
                $(this).parent().fadeIn();
            }
            else
            {
                $(this).parent().hide();
            }
        })
        if(category == 'all')
        {
            products.parent().fadeIn();
        }
    })

    // ACCORDION 

    $(document).on('click', '.question', function()
    {   
       $(this).siblings('.question').children('i').removeClass('fa-minus').addClass('fa-plus');
       $(this).siblings('.answer').not($(this).next()).slideUp();
       $(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
       $(this).next().slideToggle();
       $(this).siblings('.active').removeClass('active');
       $(this).toggleClass('active');
    })

    // TAB

    $(document).on('click', 'ul li', function()
    {   
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        let dataId = $(this).attr('data-id');
        $(this).parent().next().children('p.active').removeClass('active');

        $(this).parent().next().children('p').each(function()
        {
            if(dataId == $(this).attr('data-id'))
            {
                $(this).addClass('active')
            }
        })
    })

    $(document).on('click', '.tab4 ul li', function()
    {   
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        let dataId = $(this).attr('data-id');
        $(this).parent().parent().next().children().children('p.active').removeClass('active');

        $(this).parent().parent().next().children().children('p').each(function()
        {
            if(dataId == $(this).attr('data-id'))
            {
                $(this).addClass('active')
            }
        })
    })

    // INSTAGRAM

    $(document).ready(function(){
        $(".instagram").owlCarousel(
            {
                items: 4,
                loop: true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                }
            }
        );
      });

      $(document).ready(function(){
        $(".say").owlCarousel(
            {
                items: 1,
                loop: true,
                autoplay: true
            }
        );
      });
})