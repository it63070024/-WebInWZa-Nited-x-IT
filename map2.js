
            var y = 0;
            var m = 0;
            const character = document.querySelector(".cha")
            const map2m = document.getElementById("map1")
            
            document.addEventListener('keydown', function(event) {

                if((y==1621 && m<-55)){
                    setTimeout(newmap, 3000);
                }
                
                /*D*/
                if((event.keyCode == 68 || event.keyCode == 39) && m<-55 && y<1618){
                    y += 10;
                    py = y+'%';
                    character.style.setProperty('--moveset',py);
                    character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
                }
                 

                else if((event.keyCode == 68 || event.keyCode == 39) && y < 910) { 
                    y += 10;
                    py = y+'%';
                    character.style.setProperty('--moveset',py);
                    character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
                
        }       
                else if((event.keyCode == 68 || event.keyCode == 39) && y >= 910 && y < 1618){
                    m -= 0.3;
                    my = m+'%';
                    map2m.style.setProperty('--map2move', my)
                    character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
                }

                
                /*A*/
                if((event.keyCode == 65 || event.keyCode == 37) && y >= 930 && m<-55){
                    y -= 10;
                    py = y+'%';
                    character.style.setProperty('--moveset',py)
                    character.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
                }
                
                else if((event.keyCode == 65 || event.keyCode == 37) && y >= 0 && m<-1){
                    m += 0.3;
                    my = m+'%';
                    map2m.style.setProperty('--map2move', my)
                    character.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
                }
                else if((event.keyCode == 65 || event.keyCode == 37)) {
                    if (y > 1) {
                        y -= 10;
                            py = y+'%';
                            character.style.setProperty('--moveset',py);
                        
                    }
                    character.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")        
                }

                if (m==0 && y==620) {
                    y+=1; /* เพิ่ม y 1 เพื่อออก if นี้ */
                }

                
    })

    function newmap() {
        location.replace("map3.html")
      }

