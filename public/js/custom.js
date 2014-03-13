//used only for place.handlebars.
//this will update the last updated time in the list
$(document).ready(function(){
//alert("page refreshed");
  if( window.localStorage )
  {
    if( !localStorage.getItem( 'firstLoad' ) )
    {
      localStorage[ 'firstLoad' ] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem( 'firstLoad' );
  }

});