$('#category').click(function () {
        $('.products-nav-caterogy').slideToggle('slow');
            $('.products-nav-brand').hide('slow');
                $('.products-nav-designer').hide('slow')
});

$('#brand').click(function () {
        $('.products-nav-brand').slideToggle('slow');
                $('.products-nav-caterogy').hide('slow');
                        $('.products-nav-designer').hide('slow')
});

$('#designer').click(function () {
        $('.products-nav-designer').slideToggle('slow');
                $('.products-nav-brand').hide('slow');
                         $('.products-nav-caterogy').hide('slow')
});
