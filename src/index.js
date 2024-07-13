
/* *This file is for make css corrections in our page components */

//* *This is for adjust the slider images
document.getElementById('webAppImage').style.marginTop = '9.5%';

document.getElementById('phoneAppImage').style.marginTop = '-10%';

document.getElementById('phoneAppImage').style.marginRight = '34%';

document.getElementById('phoneAppImage').style.marginLeft = '16%';


//* *This is for adjust the page logo hover: 
document.getElementById('logoContainer').onmouseover = () => {

    document.getElementById('pageLogoSpan').style.color = '#079cff';

}

document.getElementById('logoContainer').onmouseout = () => {

    document.getElementById('pageLogoSpan').style.color = '#ffffff';

}

