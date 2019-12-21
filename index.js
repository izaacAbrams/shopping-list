//main function to run when page loads
$(function() {
//add new items to the list
$('#js-shopping-list-form').submit('click', function(e){
    e.preventDefault();
    const newItem = $('#shopping-list-entry').val();
    //prevents empty input, adds items to top of list
    if (newItem !== "") {
        $('.shopping-list').prepend(`<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    }
})
    //toggles the checked on items
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked'); 
})
    //removes items from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        $(this).closest('li').remove()
})
});