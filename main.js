var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
  var txt1 = "Hi Meri Panda.....!  <<               I m really sorry<<<                I have something for you, read it carefully...!                                                                           > I know meri wajah se aap hurt ho gaye ho<   uske liye apne bandar ko maaf kardo..  <<                  Aap mere dil ke sabse close ho... < Aur mujhe aapko khone ka bohot zyada dar hai...<   aap apni narazgi door karke, Mujhe maaf kardo <<                           Me aapki baat maanne ko ready hu, Me hu aapke sath 100% comfortable...!                                                     > Aap humesha meri favourite rahengi aur aap ki jagah koi nahi le sakta...!                     <<Mujhe aapki har baat pasand hai...<  Aapki sari aadatein pasand hai... < bas Aap roya mat karo...!                 >I Love U So Much <Meri pyari Madam ji, Panda.....! |                  <<<< Ye Jo background me flowers hai wo aapke liye <inhi ki tarah muskurate raho humesha...!    << ~Aapka Bandar";
  var speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {}
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }