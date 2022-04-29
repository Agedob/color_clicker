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


    $( ".boxes, #container, #box_2" ).click(function(event) {
        console.log("clicked " + $(this)[0]['id']);
        event.stopPropagation(); // just google it 
    }); 

    $( "#box_2" ).click(function(){
        $( this ).parent().css("background", random_color())
    });
    
    $( ".boxes" ).click(function() {
        console.log($(this))
        $( this ).siblings().css("background", random_color());
            // console.log("you clicked " + $(this)[0]['id']);
    });
    
    $( "#container" ).click(function(){

        $(this).css("background", random_color());
        $(this).children().css("background", random_color()); 

    });

})