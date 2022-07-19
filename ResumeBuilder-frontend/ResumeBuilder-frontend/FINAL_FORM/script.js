$(function() {
    // Remove button click
    $(document).on(
        'click',
        '[data-role="dynamic-fields"] > .form-inline [data-role="remove"]',
        function(e) {
            e.preventDefault();
            $(this).closest('.form-inline').remove();
        }
    );
    // Add button click
    $(document).on(
        'click',
        '[data-role="dynamic-fields"] > .form-inline [data-role="add"]',
        function(e) {
            e.preventDefault();
            var container = $(this).closest('[data-role="dynamic-fields"]');
            new_field_group = container.children().filter('.form-inline:first-child').clone();
            new_field_group.find('input').each(function(){
                $(this).val('');
            });
            container.append(new_field_group);
        }
    );
});














$(function() {
    // Remove button click
    $(document).on(
        'click',
        '[data-role="dynamic-fields-2"] > .form-inline-2 [data-role="remove"]',
        function(e) {
            e.preventDefault();
            $(this).closest('.form-inline-2').remove();
        }
    );
    // Add button click
    $(document).on(
        'click',
        '[data-role="dynamic-fields-2"] > .form-inline-2 [data-role="add"]',
        function(e) {
            e.preventDefault();
            var container = $(this).closest('[data-role="dynamic-fields-2"]');
            new_field_group2 = container.children().filter('.form-inline-2:first-child').clone();
            new_field_group2.find('input').each(function(){
                $(this).val('');
            });
            container.append(new_field_group2);
        }
    );
});