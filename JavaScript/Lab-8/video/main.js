const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let image = new Image();
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
}) //zapytanie o media typu video
    .then(mediaStream => {
        let track = mediaStream.getVideoTracks()[0];        //pobranie ścieżki kamery
        let imageCapture = new ImageCapture(track);         //obiekt przechwytywania obrazu
        video.srcObject = mediaStream;                      //przekazanie strumienia z podglądem do obiektu video
        imageCapture.takePhoto()                            //wykonanie migawki, zwraca Promise z obiektem typu Blob
            .then(blob => {

                createImageBitmap(blob, 0, 0, 800, 600)//tworzymy obraz, który zostanie zwrocony przez Promise
                    .then(image =>
                context.drawImage(image, 0, 0, canvas.width, canvas.height));//wyświetlenie w canvas obrazu z kamery

                const src = URL.createObjectURL(blob);      //utworznie obiektu URL z obrazem migawki
                console.log(blob.type);                     //w polu type jest rozszerzenie pliku
                const link = document.getElementById("download");
                link.href = src;                            //wstawienie do atrybutu href URL obrazu
                link.download = "captured.png";   //nazwa pliku z rozszerzeniem
            });
        setTimeout(() => {
            track.stop();                                   //zatrzymuje przekaz strumieniowy z kamery
        }, 1000);
    })
    .catch(error => console.error(error));                  //jeśli nie ma urządzeń, lub brak zgody użytkownika

