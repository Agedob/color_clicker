// function color_combinator (){
//     value = 'rgb ('
//     for (x = 0; x < 3; x++){
//     i = Math.floor(Math.random() * 256)
//         value += (' ' + i)
//         console.log(value)
//     }
//     value = value + " )"
//     console.log( value)
//     return value
// }

function random_color()
{
   var rgb = ['a','b','c','0','1','2','3','4'];
   color = '#'  //this is what we'll return!
   for(var i = 0; i < 6; i++) 
   {
      x = Math.floor((Math.random()* 8))
      color += rgb[x]; 
   }
   return color;
}


$(document).ready(function(){


    $( ".boxes, #container" ).click(function(event) {
        console.log("clicked " + $(this)[0]['id']);
        event.stopPropagation(); 
    })   

    $( ".boxes, #container" ).click(function() {
        // console.log($(this))
        $( this ).css("background", random_color());
            // console.log("you clicked " + $(this)[0]['id']);
    })

})


//  $(document).ready(function(){
//    //  $('#large_box').click(function(){
//    //     alert('you clicked the big box!');  
// //comment this out when you have figured out what event.stopPropagation is used for
//     // })
//     $('.side_box').click(function(event){
//        event.stopPropagation();
//     })
//     $('.middle_box').click(function(event){
//        event.stopPropagation();
//     });
//     $('#large_box').click(function(){
//        $('#large_box').children().css('background', random_color());
//         $('#large_box').css('background', random_color());
//     })
//     $('.middle_box').click(function(){
//        $('.middle_box').parent().css('background', random_color());
//     })
//     $('.side_box').click(function(){
//        $('.side_box').siblings().css('background', random_color());
//     })
//  });