/**Qui chiama la funzione imagePopup sull'id imageGallery
 * imagePopup è stata definita in jquery.image-popup.js
 * #imageGallery è stato definito in index.html
 */

//invio quest'oggetto con la properties overlay, quindi quest'ultimo valore rimpiazzerà quello definito in jquery.image-popup.js
$("#imageGallery").imagePopup({
    //overlay: "rgba(0, 100, 0, 0.5)"

    imageBorder: "0px solid #ffffff",
    borderRadius: "0px",
    imageWidth: "500px",
    imageHeight: "400px",
    imageCaption: {
        exist: false,
        color: "#ffffff",
        fontSize: "40px"
    },
    open: function(){
        console.log("opened");
    },
    close: function(){
        console.log("closed");
    }
});

//Per testare se possiamo aggiungere più gallerie al nostro plugin
//$("#imageGallery2").imagePopup();