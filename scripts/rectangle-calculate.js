function calculateRectangleArea(){
    //for wide 
    const rectangleWideInput=document.getElementById('rectangle-wide');
    const rectangleWideText=rectangleWideInput.value;
    const wide=parseFloat(rectangleWideText)
    console.log(wide)

    //for length
    const rectangleLengthInput=document.getElementById('rectangle-length');
    const rectangleLengthText=rectangleLengthInput.value;
    const length=parseFloat(rectangleLengthText)
    console.log(length)
    
    //calculate area
    const areaOfRectangle=wide*length

    //display rectange area
    const rectangleAreaSpan=document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText=areaOfRectangle
}