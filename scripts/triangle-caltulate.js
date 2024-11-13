/**
 * Objective:get base,height of triangle.Calculate the area by using the provided formula.And then display the area.
 * step-1
 */

function calculateTriangleArea(){
    //get triangle base value
    const triangleBaseInput=document.getElementById('triangle-base')
    const triangleBaseText=triangleBaseInput.value
    const base=parseFloat(triangleBaseText)
    console.log(base)

    //get triangle height value
    const triangleHeightInput=document.getElementById('triangle-height')
    const triangleHeightText=triangleHeightInput.value
    const height=parseFloat(triangleHeightText)
    console.log(height)
    
    //calculate triangle area
    const areaOfTriangle=0.5*base*height;
    console.log('Area of triangle is:',areaOfTriangle)

    //display triangle area
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText=areaOfTriangle;
}