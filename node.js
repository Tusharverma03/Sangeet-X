

  function save(params) 
  {

        if(songName.value!="" && artistName.value!="" )
            {
                
                newDefault.src= URL.createObjectURL(poster.files[0]);
                addedSongName.innerText= songName.value;
                addedArtistName.innerText= artistName.value;
                const songName1= songName.value;
                const artistName1=artistName.value;
                const newSong= {
                    name: songName1,
                    singer: artistName1,
                    poster: newDefault.src,
                    audio: URL.createObjectURL(songAudio.files[0]),
                }
                newlyAddedSongs.push(newSong);
                console.log(songs);
                
                
               
             
                alert("saved");
            
                
                  poster.value= "";
                  songName.value= "";
                  artistName.value= "";
            }
            else{
                alert("Fufill all the requirements");
            }
      }




let defaultPic= document.querySelector('.pic');
let playButton= document.querySelector("#run");
let trash= "0";
let music,a,storeSetInterval;
let p=0;
let ClickedDiv
let musicPlayer= document.querySelector(".player");
let controller= document.querySelector(".slider");
let allSongs= document.querySelectorAll(".song");
controller.value= 0;
let songsMenuDiv= document.querySelector('.songs-menu');
let menuBody= document.querySelector('.menu-body');
let searchBar, searchedSongDiv, songList, newDefault, poster, songName, artistName, audioSong, data, poster1, addedSongName, addedArtistName;
let b;
let sum=0;
let audioFile, url;
let toStoreNameOfSong= [];
let audioPlayer= document.querySelector("#audioPlayer");
let songs= [
      {
        name: "Lag Ja Gale",
        singer: "Lata Mangeshkar",
        poster: "resources/lagJaGale.jpg",
        audio: "resources/lagJaGale.mp3",
    },
    {
        name: "Imagine",
        singer: "John Lennon",
        poster: "resources/imagine.jpg",
        audio: "resources/imagine.mp3",
    },
    {
        name: "Pal Pal Dil Ke Paas",
        singer: "Kishore Kumar",
        poster: "resources/pal_pal_dil_ke_paas.jpg",
        audio: "resources/pal_pal_dil_ke_paas.mp3",
    },
    {
        name: "Stand by Me",
        singer: "Ben E. King",
        poster: "resources/stand_by_me.jpg",
        audio: "resources/stand_by_me.mp3",
    },
    {
        name: "Kabhi Kabhie Mere Dil Mein",
        singer: "Mukesh",
        poster: "resources/kabhi_kabhie_mere_dil_mein.jpg",
        audio: "resources/kabhi_kabhie_mere_dil_mein.mp3",
    },
    {
        name: "Hotel California",
        singer: "The Eagles",
        poster: "resources/hotel_california.jpg",
        audio: "resources/hotel_california.mp3",
    },
    {
        name: "Chura Liya Hai Tumne",
        singer: "Asha Bhosle",
        poster: "resources/chura_liya_hai_tumne.jpg",
        audio: "resources/chura_liya_hai_tumne.mp3",
    },
    {
        name: "Let It Be",
        singer: "The Beatles",
        poster: "resources/let_it_be.jpg",
        audio: "resources/let_it_be.mp3",
    },
    {
        name: "Yeh Shaam Mastani",
        singer: "Kishore Kumar",
        poster: "resources/yeh_sham_mastani.jpg",
        audio: "resources/yeh_sham_mastani.mp3",
    },
    {
        name: "Suspicious Minds",
        singer: "Elvis Presley",
        poster: "resources/suspicious_minds.jpg",
        audio: "resources/suspicious_minds.mp3",
    },
    {
        name: "Tere Bina Zindagi Se",
        singer: "Lata Mangeshkar",
        poster: "resources/tere_bina_zindagi_se.jpg",
        audio: "resources/tere_bina_zindagi_se.mp3",
    },
    {
        name: "Careless Whisper",
        singer: "George Michael",
        poster: "resources/careless_whisper.jpg",
        audio: "resources/careless_whisper.mp3",
    },
    {
        name: "Roop Tera Mastana",
        singer: "Kishore Kumar",
        poster: "resources/roop_tera_mastana.jpg",
        audio: "resources/roop_tera_mastana.mp3",
    },
    {
        name: "My Way",
        singer: "Frank Sinatra",
        poster: "resources/my_way.jpg",
        audio: "resources/my_way.mp3",
    },
    {
        name: "Ek Pyar Ka Nagma Hai",
        singer: "Lata Mangeshkar",
        poster: "resources/ek_pyar_ka_nagma_hai.jpg",
        audio: "resources/ek_pyar_ka_nagma_hai.mp3",
    },
    {
        name: "Summer of '69",
        singer: "Bryan Adams",
        poster: "resources/summer_of_69.jpg",
        audio: "resources/summer_of_69.mp3",
    },
    {
        name: "Aaj Phir Jeene Ki Tamanna Hai",
        singer: "Lata Mangeshkar",
        poster: "resources/aaj_phir_jeene_ki_tamanna_hai.jpg",
        audio: "resources/aaj_phir_jeene_ki_tamanna_hai.mp3",
    },
    {
        name: "Bohemian Rhapsody",
        singer: "Queen",
        poster: "resources/bohemian_rhapsody.jpg",
        audio: "resources/bohemian_rhapsody.mp3",
    },
    {
        name: "Mera Mann Tera Pyaasa",
        singer: "Mohammed Rafi",
        poster: "resources/mera_mann_tera_pyaasa.jpg",
        audio: "resources/mera_mann_tera_pyaasa.mp3",
    },
    {
        name: "Can’t Help Falling in Love",
        singer: "Elvis Presley",
        poster: "resources/cant_help_falling_in_love.jpg",
        audio: "resources/cant_help_falling_in_love.mp3",
    },
        {
            name: "capital",
            singer: "nanku",
            poster: "resources/capital.jpg",
            audio: "resources/capital.mp3",
        },
        {
            name: "101",
            singer: "seedhe maut",
            poster: "resources/101.jpg",
            audio: "resources/101.mp3",
        },
        {
            name: "11k",
            singer: "seedhe maut",
            poster: "resources/11k.jpg",
            audio: "resources/11k.mp3",

        },{
            name: "heeriye",
            singer: "nanku",
            poster: "resources/heeriye.jpg",
            audio: "resources/heeriye.mp3",

        },{
            name: "kamikaze",
            singer: "nanku",
            poster: "resources/kamikaze.jpg",
            audio: "resources/kamikaze.mp3",

        },{
            name: "namastute",
            singer: "seedhe maut",
            poster: "resources/namastute.jpg",
            audio: "resources/namastute.mp3",

        },{
            name: "aajkal",
            singer: "nanku",
            poster: "resources/aajkal.jpg",
            audio: "resources/aajkal.mp3",

        },{
            name: "nanchaku",
            singer: "mc stan",
            poster: "resources/nanchaku.jpg",
            audio: "resources/nanchaku.mp3",
        },
]
let newlyAddedSongs= [];

function PicChanger(event) {
    if (p===1) 
        {
        ClickedDiv= event.querySelector('#image');
      if (trash=== "1") 
        {
            music.pause();        
        }
      music= event.querySelector('#song');
      defaultPic.src= ClickedDiv.src;
      a= ClickedDiv.src.toString();
      playButton.classList.remove("fa-play");
      playButton.classList.add("fa-pause");
      trash= "1";
      musicPlayer.style.backgroundImage= `url("${a}")`;
      musicPlayer.style.backgroundRepeat= "no-repeat";
      musicPlayer.style.backgroundSize= "cover";
      musicPlayer.style.backgroundBlendMode= "Hard-light"
      
      music.play();
      music.currentTime=0;
      controller.max= music.duration;
      p=0;
    }
    else{
        ClickedDiv = event.currentTarget.querySelector('#image');
        if (trash=== "1") 
        {
            music.pause();        
        }
        music= event.currentTarget.querySelector('#song');
        defaultPic.src= ClickedDiv.src;
        a= ClickedDiv.src.toString();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        trash= "1";
        musicPlayer.style.backgroundImage= `url("${a}")`;
        musicPlayer.style.backgroundRepeat= "no-repeat";
        musicPlayer.style.backgroundSize= "cover";
        musicPlayer.style.backgroundBlendMode= "Hard-light"
        music.play();
        music.currentTime=0;
       
        controller.max= music.duration;
        storeSetInterval= setInterval(() => {
            controller.value= music.currentTime;
            if(controller.value>=(music.duration-5))
                {
                changeSong('next');
                }
        }, 200);
    }
    
}

function pause(params) {
    let value= playButton.classList[1].toString();

    if (value==="fa-pause") {
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
        if(trash=== "1")
        {
            music.pause();
        }
    }

    else if(value==="fa-play")
    {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        if(trash==="1")
        {
            music.play();
        }
    }
}

function ward(word) {
    if (word==="forward") {
        if(music.currentTime<=music.duration)
        {
            music.currentTime= music.currentTime+10;        
                if (music.currentTime==music.duration) {
                    playButton.classList.remove("fa-pause");
                    playButton.classList.add("fa-play");
                }
        }
    }
    else{
        music.currentTime= music.currentTime-10;
    }
}
function manual(params) {
    clearInterval(storeSetInterval);
    music.currentTime= controller.value;
    storeSetInterval= setInterval(() => {
        controller.value= music.currentTime;
        if(controller.value>=(music.duration-5))
            {
            changeSong('next');
            }
    }, 200);
}
function changeSong(params) {
       if(params==='next')
        {
            for (let index = 0; index < allSongs.length; index++)
                {
               let element = allSongs[index];
               let x= element.querySelector('#image');
               let y= x.src.toString();
               
               if(a===y){
                    if (index==7) {
                        break;
                    }
                   p=1;
                   PicChanger(allSongs[index+1]);
                   break;
               }
               } 
        }
        else{
            for (let index = 0; index < allSongs.length; index++)
                {
               let element = allSongs[index];
               let x= element.querySelector('#image');
               let y= x.src.toString();
               
               if(a===y){
                if (index==0) {
                    break;
                }
                   p=1;
                   PicChanger(allSongs[index-1]);
                   break;
               }
               }
        }
}
function addHomePage(params) {
    if(songsMenuDiv.classList.contains("d1") )
        {
            songsMenuDiv.classList.remove("d1") 
        }
    else if(songsMenuDiv.classList.contains("d2") )
    {
        songsMenuDiv.classList.remove("d2") 
    }
    else if(songsMenuDiv.classList.contains("d3") )
    {
        songsMenuDiv.classList.remove("d3") 
    }
    songsMenuDiv.innerHTML= `    <div class="songs-menu">
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/lagJaGale.jpg" id="image" alt="">
                                        <h1>Lag Ja Gale</h1>
                                        <p>Lata Mangeshkar</p>
                                        <audio src="resources/" id="song"></audio>
                                    </div>

                                    <!-- 2 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/imagine.jpg" id="image" alt="">
                                        <h1>Imagine</h1>
                                        <p>John Lennon</p>
                                        <audio src="resources/imagine.mp3" id="song"></audio>
                                    </div>

                                    <!-- 3 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/pal_pal_dil_ke_paas.jpg" id="image" alt="">
                                        <h1>Pal Pal Dil Ke Paas</h1>
                                        <p>Kishore Kumar</p>
                                        <audio src="resources/pal_pal_dil_ke_paas.mp3" id="song"></audio>
                                    </div>

                                    <!-- 4 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/stand_by_me.jpg" id="image" alt="">
                                        <h1>Stand by Me</h1>
                                        <p>Ben E. King</p>
                                        <audio src="resources/stand_by_me.mp3" id="song"></audio>
                                    </div>

                                    <!-- 5 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/kabhi_kabhie_mere_dil_mein.jpg" id="image" alt="">
                                        <h1>Kabhi Kabhie Mere Dil Mein</h1>
                                        <p>Mukesh</p>
                                        <audio src="resources/kabhi_kabhie_mere_dil_mein.mp3" id="song"></audio>
                                    </div>

                                    <!-- 6 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/hotel_california.jpg" id="image" alt="">
                                        <h1>Hotel California</h1>
                                        <p>The Eagles</p>
                                        <audio src="resources/hotel_california.mp3" id="song"></audio>
                                    </div>

                                    <!-- 7 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/chura_liya_hai_tumne.jpg" id="image" alt="">
                                        <h1>Chura Liya Hai Tumne</h1>
                                        <p>Asha Bhosle</p>
                                        <audio src="resources/chura_liya_hai_tumne.mp3" id="song"></audio>
                                    </div>

                                    <!-- 8 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/let_it_be.jpg" id="image" alt="">
                                        <h1>Let It Be</h1>
                                        <p>The Beatles</p>
                                        <audio src="resources/let_it_be.mp3" id="song"></audio>
                                    </div>

                                    <!-- 9 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/yeh_sham_mastani.jpg" id="image" alt="">
                                        <h1>Yeh Shaam Mastani</h1>
                                        <p>Kishore Kumar</p>
                                        <audio src="resources/yeh_sham_mastani.mp3" id="song"></audio>
                                    </div>

                                    <!-- 10 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/suspicious_minds.jpg" id="image" alt="">
                                        <h1>Suspicious Minds</h1>
                                        <p>Elvis Presley</p>
                                        <audio src="resources/suspicious_minds.mp3" id="song"></audio>
                                    </div>

                                    <!-- 11 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/tere_bina_zindagi_se.jpg" id="image" alt="">
                                        <h1>Tere Bina Zindagi Se</h1>
                                        <p>Lata Mangeshkar</p>
                                        <audio src="resources/tere_bina_zindagi_se.mp3" id="song"></audio>
                                    </div>

                                    <!-- 12 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/careless_whisper.jpg" id="image" alt="">
                                        <h1>Careless Whisper</h1>
                                        <p>George Michael</p>
                                        <audio src="resources/careless_whisper.mp3" id="song"></audio>
                                    </div>

                                    <!-- 13 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/roop_tera_mastana.jpg" id="image" alt="">
                                        <h1>Roop Tera Mastana</h1>
                                        <p>Kishore Kumar</p>
                                        <audio src="resources/roop_tera_mastana.mp3" id="song"></audio>
                                    </div>

                                    <!-- 14 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/my_way.jpg" id="image" alt="">
                                        <h1>My Way</h1>
                                        <p>Frank Sinatra</p>
                                        <audio src="resources/my_way.mp3" id="song"></audio>
                                    </div>

                                    <!-- 15 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/ek_pyar_ka_nagma_hai.jpg" id="image" alt="">
                                        <h1>Ek Pyar Ka Nagma Hai</h1>
                                        <p>Lata Mangeshkar</p>
                                        <audio src="resources/ek_pyar_ka_nagma_hai.mp3" id="song"></audio>
                                    </div>

                                    <!-- 16 -->
                                    <div class="song" onclick="PicChanger(event)">
                                        <img src="resources/summer_of_69.jpg" id="image" alt="">
                                        <h1>Summer of '69</h1>
                                        <p>Bryan Adams</p>
                                        <audio src="resources/summer_of_69.mp3" id="song"></audio>
                                    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/capital.jpg" id="image" alt="" srcset="">
        <h1>Capital</h1>
        <p>Nanku</p>
        <audio src="resources/capital.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/101.jpg" id="image"  alt="" srcset="">
        <h1>101</h1>
        <p>Seedhe Maut</p>
        <audio src="resources/101.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/11k.jpg" id="image"  alt="" srcset="">
        <h1>11k</h1>
        <p>Seedhe Maut</p>
        <audio src="resources/11k.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/heeriye.jpg" id="image"  alt="" srcset="">
        <h1>Heeriye</h1>
        <p>Nanku</p>
        <audio src="resources/heeriye.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/kamikaze.jpg" id="image"  alt="" srcset="">
        <h1>Kamikaze</h1>
        <p>Nanku</p>
        <audio src="kamikaze.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/namastute.jpg" id="image"  alt="" srcset="">
        <h1>Namastute</h1>
        <p>Seedhe Maut</p>
        <audio src="resources/namastute.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/aajkal.jpg" id="image"  alt="" srcset="">
        <h1>Aajkal</h1>
        <p>Nanku</p>
        <audio src="resources/aajkal.mp3" id="song"></audio>
    </div>
    <div class="song" onclick="PicChanger(event)">
        <img src="resources/nanchaku.jpg" id="image"  alt="" srcset="">
        <h1>Nanchaku</h1>
        <p>MC Stan</p>
        <audio src="resources/nanchaku.mp3" id="song"></audio>
    </div>
    </div>`;
}

function search(params) {
    if(songsMenuDiv.classList.contains("d2"))
        {
            songsMenuDiv.classList.remove("d2");
        }
        else if(songsMenuDiv.classList.contains("d3"))
            {
                songsMenuDiv.classList.remove("d3");
            }
        songsMenuDiv.classList.add("d1");

        songsMenuDiv.innerHTML= 
        
        `<div class= "searchBarDiv">
            <div class= "searchBarBorder">
                <input type="search" name="" id="searchBar" onchange= "searchSong()" autocomplete="off" />
            </div>
        </div>
        <div class= "songList">

        </div>
        `
        searchBar= document.querySelector("#searchBar");
        songList= document.querySelector(".songList");
        b=0;
}

function searchSong(params)
 {

    if(songList.children.length>0)
        {
            songList.removeChild(searchedSongDiv);
        }
        for (let index = 0; index < songs.length; index++) 
            {
            const element = songs[index].name;
            let value= searchBar.value.toString();
            if (value[value.length-1]==" ") 
            {
                value= value.slice(0, -1);
            }
           
            if(element.toLowerCase()===(value.toLowerCase()))
                {
                    searchedSongDiv= document.createElement("div");
                    let image= document.createElement("img");
                    let title= document.createElement("h1");
                    let artistName= document.createElement("p");
                    let songAudio= document.createElement("audio");
                    songAudio.src=songs[index].audio;
                    songAudio.id= "song";
                    image.src= songs[index].poster;
                    image.id= "image";
                    title.innerText= songs[index].name;
                    artistName.innerText= songs[index].singer;
                    searchedSongDiv.className= "song";
                    searchedSongDiv.addEventListener('click', (event)=>{
                        PicChanger(event);
                    });
                    searchedSongDiv.appendChild(image);
                    searchedSongDiv.appendChild(title);
                    searchedSongDiv.appendChild(artistName);
                    searchedSongDiv.appendChild(songAudio);
                    songList.appendChild(searchedSongDiv)
                    b=1;
                }
                
        }
}
function addSongs(params) {
    if(songsMenuDiv.classList.contains("d1"))
        {
            songsMenuDiv.classList.remove("d1");
        }
        else if(songsMenuDiv.classList.contains("d3"))
            {
                songsMenuDiv.classList.remove("d3");
            }
    songsMenuDiv.classList.add("d2");
    songsMenuDiv.innerHTML=`
    <div class="borderForNewSong">
        <div class="newSong">
            <img src= "resources/default1.jpg" id="newDefault">
            <h1 id="addedSongName">Song</h1>
            <p id="addedArtistName" > artist</p>
        </div>
    </div>
    <div class="essentials">
        <h1>Poster:</h1>
        <input type="file" class="choose-file" id="posterImage" name="choose-file" accept="image/*" />
        <h1>Audio:</h1>
        <input type="file" name="" class="choose-file" id="audioSong" accept="audio/*"/>   
        <h1>Song Name:</h1>
        <input type="text" name="" class="songNamePad" id="songName" />
        </br>
        <h1>Artist Name:</h1>
        <input type="text" name="" class="songNamePad" id="artistName" />
        </br>
        <div class="submitDiv">
                <button class="submit" onclick="save()">
                    Submit
                </button>
        </div>
    </div>
        
    `;
    newDefault= document.querySelector("#newDefault");
    poster= document.querySelector("#posterImage");
    songAudio= document.querySelector("#audioSong");
    songName= document.querySelector("#songName");
    artistName=document.querySelector("#artistName");
    addedSongName= document.querySelector("#addedSongName");
    addedArtistName= document.querySelector("#addedArtistName");
    
}

function addedSongs(params) {
    if(songsMenuDiv.classList.contains("d1"))
        {
            songsMenuDiv.classList.remove("d1");
        }
        else if(songsMenuDiv.classList.contains("d2"))
            {
                songsMenuDiv.classList.remove("d2");
            }
   songsMenuDiv.innerHTML= ``;
    for (let index = 0; index < newlyAddedSongs.length; index++) 
        {
        
                searchedSongDiv= document.createElement("div");
                let image= document.createElement("img");
                let title= document.createElement("h1");
                let artistName= document.createElement("p");
                let songAudio= document.createElement("audio");
                songAudio.src=newlyAddedSongs[index].audio;
                songAudio.id= "song";
                image.src= newlyAddedSongs[index].poster;
                image.id= "image";
                title.innerText= newlyAddedSongs[index].name;
                artistName.innerText= newlyAddedSongs[index].singer;
                searchedSongDiv.className= "song";
                searchedSongDiv.addEventListener('click', (event)=>{
                    PicChanger(event);
                });
                searchedSongDiv.appendChild(image);
                searchedSongDiv.appendChild(title);
                searchedSongDiv.appendChild(artistName);
                searchedSongDiv.appendChild(songAudio);
                songsMenuDiv.appendChild(searchedSongDiv)
                b=1;

    }
    
}