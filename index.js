function loadInitialImage(){

}

function toggleMainImage(){
    //alert('got here'&document.getElementById('mainActionImage').getAttribute('src'))
    if (document.getElementById('mainActionImage').getAttribute('src') == "checkMarkOff.png")
    {
        mainActionImage.src='checkMark.png';
        giveFeedback();
    }
    else{
            mainActionImage.src='checkMarkOff.png';
            removeFeedback();
    //alert('path2'&mainActionImage.src)
    };
    //alert('ended')
}

function giveFeedback(){
    $('#feedback').html("Great work, keep it up!")
}

function removeFeedback(){
    $('#feedback').html("")
}