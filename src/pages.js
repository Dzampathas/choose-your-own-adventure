export function pageInfo(data){
    var name = "";
    if(data.name){
        name = data.name;
    }

    var pages = {
        start:{
            content:
                "A strange person walks up to you in a dimly lit tavern...",
            label1: "Continue",
            page1: "A1",
        },
        A1:{
            content:
                "Stranger: I've never seen you in these parts... \r Whats your name?",
            input: {
                    type: "text",
                    saveKey: "name"
            },
            label1: "Continue",
            page1: "A2",
        },
        A2:{
            content:
                "Stranger: " + name + "? Thats a strange name!",
            label1: "No it's not!",
            page1: "B1",
            label2: "Yeah.. it is.",
            page2: "C1",
        },
        C1:{
            content:
                " Stranger: Have confidence in yourself weirdo. \r the stranger leaves your table scoffing at your insecurities.",
            label1: "Continue",
            page1: "gameOver",
        },
        gameOver:{
            content: 
                "You're left alone in the pub for hours until you pass out in your beer.",
            label1: "Game over...",
            page1: "start"
        },
        B1:{
            content:
                "Stranger: Confidence! I like it. So what brings you here stranger?",
            label1: "I was fighting a Dragon and decided to rest here. (lie)",
            page1: "B2_a",
            label2: "I opened some students CP2 homework. (Tell the truth)",
            page2: "B2_b"
        },
        B2_a:{
            content:
                "Stranger: Oh, so like every other adventurer out there. BORING.. Have a good life " + name,
            label1: "continue",
            page1: "gameOver"
        },
        B2_b:{
            content:
                "Stranger: You what now?",
            label1: "run before he finds out you're a wizard",
            page1: "B2_b_a",
            label2: "Well you see, computers are...",
            page2: "B2_b_b"
        },
        B2_b_a:{
            content:
                "You run away until you trip and fall off a cliff.",
            label1: "GameOver..",
            page1: "start"
        },
        B2_b_b:{
            content: 
                "Stranger: WOW that is amazing! I can't believe all of that!! HEY GUYS COME CHECK OUT THIS MAGIC PERSON",
            label1: "I DON'T LIKE ATTENTION RUN!",
            page1: "B2_b_a",
            label2: "PRAISE? YES PLEASE!",
            page2: "FINAL",
        },
        FINAL:{
            content:
                "Lifted up in excitement the people in the room cheer your name. " + name + ", " + name + " YOU'RE SO COOL... \n You died. \n Your head hit the ceiling",
            label1: "GameOver",
            page1: "start"
            
        }
      };
    if(data.name){
        if(data.name.includes("d") || data.name.includes("D")){
            pages.FINAL = {
                content:
                    "Lifted up in excitement the people in the room cheer your name." + name + "," + name + " YOU'RE SO COOL! AS you're carried out of the building and onto a pile of gold.",
                label1: "YOU WIN",
                page1: "start"
            }
        }
    }
    


    return pages;
}