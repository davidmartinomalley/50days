function loadInitialImage(){

}

function toggleMainImage(){
    //alert('got here'&document.getElementById('mainActionImage').getAttribute('src'))
    if (document.getElementById('mainActionImage').getAttribute('src') == "checkMarkOff.png")
    {
        mainActionImage.src='checkMark.png';
    }
    else{
            mainActionImage.src='checkMarkOff.png';
    //alert('path2'&mainActionImage.src)
    };
    //alert('ended')
}