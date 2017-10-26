    var app = {
 
          initialize: function() {
              this.bindEvents();
              // Call onDeviceReady when PhoneGap is loaded.
              //
              // At this point, the document has loaded but phonegap-1.0.0.js has not.
              // When PhoneGap is loaded and talking with the native device,
              // it will call the event `deviceready`.
              // 
              document.addEventListener("deviceready", app.onDeviceReady, false);

              
          },
            // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
              //
         onDeviceReady: function () {
              // Now safe to use the PhoneGap API
              if(window.MobileAccessibility){
                window.MobileAccessibility.usePreferredTextZoom(false);
              }
              alert('ok');
          },
         
          bindEvents: function() {
              var takePhoto = document.getElementById('takePhoto');
              takePhoto.addEventListener('click', app.takePhoto, false);
              var sendPhoto = document.getElementById('sendPhoto');
              sendPhoto.addEventListener('click', app.sendPhoto, false);
          },
 
          sendPhoto: function() {

              alert('Imagen enviada al servidor');
          },
 
          takePhoto: function(){
              navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
                  allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
          },
 
          onPhotoDataSuccess: function(imageData) {
         
            var photo = document.getElementById('photo');
 
            photo.style.display = 'block';
 
            photo.src = "data:image/jpeg;base64," + imageData;
 
            var sendPhotoBtn = document.getElementById('sendPhoto');
            sendPhotoBtn.style.display = 'block';
            
          },
 
          onFail: function(message) {
            alert('Failed because: ' + message);
          }
 
      };