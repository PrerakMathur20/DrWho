var arr = [0,0,0,0,0,0,0,0,0];
var i = 0;
var flag = false;
var questions = ["The sun is shining and the temperature is just right. What are you going to do today?",
                "Choose a color:",
                "Do you worry a lot?", 
                "It's Monday morning and you have to go to work. You:", 
                "If you had enough money, you would:",
                "When is the last time you took a vacation/time for yourself?", 
                "If you could do anything you wanted, right now, you would:", 
                "In your opinion, how are you feeling today?"];

var option1s = ["Get outside and do something great!", 
                "Blue", 
                "Only about the big stuff!",
                "Go in!", 
                "Buy a new house for your family.", 
                "It's been so long, I can't remember",
                "Go home to be with your family", 
                "Pretty good"];

var option2s = ["Watch TV, play on my phone, nothing too exciting", 
                "Black", 
                "All of the time!", 
                "Go in late", 
                "Go on a vacation alone", 
                "A few months ago", 
                "Go on a walk alone", 
                "Tired and ready for the day to end"];

var option3s = ["The same thing I do every day", 
                "Gray", 
                "No - who cares?", 
                "Call off sick", 
                "Live how I want", 
                "Whenever I want", 
                "Sleep", 
                "Like there's no point"
                ];
var option4s = ["Who knows - I'm sure someone will come along and ruin my day", 
                "Red", 
                "Only about myself!", 
                "Quit!", 
                "Quit your job", 
                "I don't take time for myself", 
                "Scream at the top of your lungs", 
                "Pissed off!"];
//"url(\"\")"
var link = ["url(\"res/sunny.jpeg\")","url(\"res/colors.jpeg\")" , "url(\"res/worry.jpeg\")", "url(\"res/monday.jpeg\")", "url(\"res/money.gif\")", "url(\"res/vacation.jpeg\")", "url(\"res/anything.jpeg\")", "url(\"res/mood.jpeg\")"]

var freq = [0,0,0,0];
var mx = 0;

function decider(){
    for(let j=1;j<9;j++){
        freq[arr[j]-1]++;
        if(freq[arr[j]-1] > mx) mx = freq[arr[j]-1]
    }
    if(freq[2]>=6){
        ans=3;
    }
    else if(freq[0]>6){
        ans=1;
    }
    else if(freq[1]>6){
        ans=2;
    }
    else if(freq[3]>6){
        ans=4;
    }
    else if(mx<4){
        ans=5;
    }
    else{
        let k=0;
        if(mx<6){
            arr[0]=2;
            k=Math.floor(Math.random()*9)%9;
        }
        else{
            k = (Math.floor(Math.random()*8)%8) + 1;
        }
        ans = arr[k];
    }
    //alert(ans +" mx "+mx);
    switch (ans) {
        case 1:
            window.location.replace("../happy/happy.html");
            break;
        case 2:
            window.location.replace("../anxious/anxious.html");
            break;
        case 3:
            window.location.replace("../sad/sad.html");
            break;
        case 4:
            window.location.replace("../angry/angry.html");
            break;
        default:
            window.location.replace("../bored/bored.html")
            break;
    }
}


function nextques()
{
    flag=false;
    if (document.getElementById("op1b").checked) {
        arr[i] = 1;
        document.getElementById("op1b").checked = false;
    }
    else if (document.getElementById("op2b").checked) {
        arr[i] = 2;
        document.getElementById("op2b").checked = false;
    }
    else if (document.getElementById("op3b").checked) {
        arr[i] = 3;
        document.getElementById("op3b").checked = false;
    }
    else if (document.getElementById("op4b").checked) {
        arr[i] = 4;
        document.getElementById("op4b").checked = false;
    }
    else{
        flag = true;
        alert("Please choose an option")
    }
    if(!flag || i==0){
        i++;
        if(i==9) decider();
        else{
            //document.getElementById("container").style.backgroundImage = link[i-1];
            document.getElementById("ques").innerHTML = questions[i-1];
            document.getElementById("op1").innerHTML = option1s[i-1];
            document.getElementById("op2").innerHTML = option2s[i-1];
            document.getElementById("op3").innerHTML = option3s[i-1];
            document.getElementById("op4").innerHTML = option4s[i-1];
            document.getElementById("qno").innerHTML = i + " of 8";
        }
    }
}

function prevquestion(){
    if(i>1){
        i--;
        //document.getElementById("container").style.backgroundImage = link[i-1];
        document.getElementById("ques").innerHTML = questions[i-1];
        document.getElementById("op1").innerHTML = option1s[i-1];
        document.getElementById("op2").innerHTML = option2s[i-1];
        document.getElementById("op3").innerHTML = option3s[i-1];
        document.getElementById("op4").innerHTML = option4s[i-1];
        document.getElementById("qno").innerHTML = i + " of 8";
        document.getElementById("op1b").checked = false;
        document.getElementById("op2b").checked = false;
        document.getElementById("op3b").checked = false;
        document.getElementById("op4b").checked = false;
    }
}
