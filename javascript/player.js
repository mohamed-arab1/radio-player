class player{
    constructor(){
        var height_main1 =document.getElementById("main1");
        height_main1.style.height=screen.height +"px";
        if(screen.width<620){
            height_main1.style.width=screen.width +"px";
            var button_display=document.getElementById("button_images");
            button_display.style.display="none";
            document.body.style.backgroundImage="linear-gradient(to left,rgb(94, 255, 0),rgb(0, 255, 60),rgb(12, 79, 90))";
        }
        var height_div1 =document.getElementById("div1");
        height_div1.style.height=screen.height -300 +"px";
        if(screen.width<620){
            height_div1.style.width=screen.width +"px";
        }
    }
}
onload =new player();
// class audio
class myplayer{
    constructor(){
        this.buttons_play_pause =document.getElementById("button_pause_play");
        this.my_music=document.getElementById("audio_music1");
        this.titel_radio=document.getElementById("radio_live");
        this.isplayer;
        this.buttons_play_pause.addEventListener("click",()=>{
            this.player_play_pause();
        });
        this.name_radio=[];
        this.name_radio[0]="radio1";
        this.name_radio[1]="radio2";
        this.name_radio[2]="radio3";

        this.source_radio=[];
        this.source_radio[0]="http://www.quran-radio.org:8080/;stream.mp3";
        this.source_radio[1]="https://adrar.ice.infomaniak.ch/01.aac";
        this.source_radio[2]="http://www.quran-radio.org:8080/;stream.mp3";

        this.counter=0;
        
        this.change_name_radio();

        document.getElementById("nextradio").addEventListener("click",()=>{
            if(this.counter<this.source_radio.length -1){
                ++this.counter;
                this.isplayer =false;
            }
            else{
                this.counter=0;
            }
            this.change_name_radio();
            
        });
        document.getElementById("back_radio").addEventListener("click",()=>{
            if(this.counter>0){
                --this.counter;
                this.isplayer =false;
                
            }else{
                this.counter=this.source_radio.length-1;
            }
            this.change_name_radio();
        });
    }
    change_name_radio(){
        this.titel_radio.innerHTML=this.name_radio[this.counter];
        this.my_music.src=this.source_radio[this.counter];
        this. player_play_pause();
    }
    player_play_pause(){
        if(this.isplayer == false){
            this.buttons_play_pause.src="./style/pause.png";
            this.my_music.play();
            this.isplayer =true;
        }
        else{
            this.buttons_play_pause.src="./style/play.png";
            this.my_music.pause();
            this.isplayer=false;
        }
    }
}
onload =new myplayer();
//class volume and speed
class volume{
    constructor(){
        this.volume_file=document.getElementById("audio_music1");
        this.volume_file.volume=50/100;
        this.range_volume=document.getElementById("leavel_volume");
       
        this.range_volume.addEventListener("change",()=>{
            this.volume_file.volume=this.range_volume.value/100;   
            
        });
         this.button_speed=document.getElementById("leavel_speed");
         this.volume_file.playbackRate=1;
         this.button_speed.addEventListener("change",()=>{
            this.volume_file.playbackRate=this.button_speed.value/100;
         });
    }
}
onload =new volume();
// class background images
class background_images{
    constructor(){
     this.button_photo1=document.getElementById("button_images1");
     this.button_photo1.addEventListener("click",()=>{
        this.change_photo("photo1");
     });
     this.button_photo2=document.getElementById("button_images2");
     this.button_photo2.addEventListener("click",()=>{
        this.change_photo("photo2");
     });
     this.button_photo3=document.getElementById("button_images3");
     this.button_photo3.addEventListener("click",()=>{
        this.change_photo("photo3");
     });
     this.button_photo4=document.getElementById("button_images4");
     this.button_photo4.addEventListener("click",()=>{
        this.change_photo("photo4");
     });
     this.button_photo=document.getElementById("button_image");
     this.button_photo.addEventListener("click",()=>{
        this.change_photo("photo");
     });
     this.button_photo_q=document.getElementById("button_image_q");
     this.button_photo_q.addEventListener("click",()=>{
        this.change_photo("photo_q");
     });
    }
    change_photo(photos){
     if(photos =="photo1"){
        document.body.style.backgroundImage="url(./style/music_image1.jpg)";
     }
     else if(photos =="photo2"){
        document.body.style.backgroundImage="url(./style/music_image2.jpg)";
     }
     else if(photos =="photo3"){
        document.body.style.backgroundImage="url(./style/music_image3.jpg)";
     }
     else if(photos =="photo4"){
        document.body.style.backgroundImage="url(./style/music_image4.jpg)";
     }
     else if(photos =="photo"){
        document.body.style.backgroundImage="url(./style/music_image.jpg)";
     }
     else if(photos =="photo_q"){
        document.body.style.backgroundImage="url(./style/image1.jpg)";
     }
    }
}
onload =new background_images();


// class colors body
class buttons_colors{
    constructor(){
        this.button_color1=document.getElementById("button_color1");
        this.button_color1.addEventListener("click",()=>{
            this.change_color("colors1");
        });
        this.button_color2=document.getElementById("button_color2");
        this.button_color2.addEventListener("click",()=>{
            this.change_color("colors2");
        });
        this.button_color3=document.getElementById("button_color3");
        this.button_color3.addEventListener("click",()=>{
            this.change_color("colors3");
        });
        this.button_color4=document.getElementById("button_color4");
        this.button_color4.addEventListener("click",()=>{
            this.change_color("colors4");
        });
        this.button_color5=document.getElementById("button_color5");
        this.button_color5.addEventListener("click",()=>{
            this.change_color("colors5");
        }); 
        this.button_color6=document.getElementById("button_color6");
        this.button_color6.addEventListener("click",()=>{
            this.change_color("colors6");
        });
    }
    change_color(colors){
        if(colors=="colors1"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(94, 255, 0),rgb(0, 255, 60),rgb(12, 79, 90))";
        }
        else if(colors == "colors2"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(255, 0, 0),rgb(255, 0, 64),rgb(255, 0, 242))";
        }
        else if(colors == "colors3"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(195, 0, 255),rgb(0, 76, 255),rgb(0, 242, 255))";
        }
        else if(colors == "colors4"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(0, 255, 187),rgb(0, 255, 21),rgb(149, 255, 0))";
        }
        else if(colors == "colors5"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(255, 230, 0),rgb(255, 94, 0),rgb(255, 0, 0))";
        }
        else if(colors == "colors6"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(215, 235, 236),rgb(45, 41, 41),rgb(10, 10, 10))";
        }
    }
}
onload =new buttons_colors();