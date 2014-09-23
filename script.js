$('#search').keyup(function()
{
    var search_field = $('#search').val();
    var myExp = new RegExp(search_field,"i");
    $.getJSON('data.json',function(data)
    {
        var output = '<ul>';
        $.each(data,function(key, val)
        {
            if((val.name.search(myExp) != -1)||(val.bio.search(myExp) != -1))
            {
                output += '<li>';
                output += '<h2>'+val.name+'</h2>';
                output += '<img src="images/'+val.shortname+'_tn.jpg"/>';
                output += '<p>'+val.bio+'</p>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });
});
