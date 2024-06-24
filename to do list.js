let mylist = []


    function writeto(){
        let mylisthtml=''
        let item = document.querySelector(".enter").value;
        let time = document.querySelector(".time").value;
        mylist.push([item,time]);
        console.log(mylist);
        document.querySelector(".enter").value="";
        for(let i = 0 ; i<mylist.length;i++){
            const item = mylist[i][0];
            const time = mylist[i][1];
            const itemnum = i;
            const html = `<div class = "mainunder">
                <div class = "itemdiv">${item}</div>
                <div class = "timediv">${time}</div>
                <div><button class = "del" onclick = "dele(${itemnum});">delete</button>
                </div>
                </div>`;
            
            mylisthtml+=html;
        }

        document.querySelector(".main1").innerHTML=mylisthtml;
        
    
    }

    function dele(i){
        mylist.splice(i,1);
        console.log(mylist);
        let mylisthtml=''
        for(let i = 0 ; i<mylist.length;i++){
            const item = mylist[i][0];
            const time = mylist[i][1];
            const itemnum = i;
            const html = `<div class = "mainunder">
                <div class = "itemdiv">${item}</div>
                <div class = "timediv">${time}</div>
                <div><button class = "del" onclick = "dele(${itemnum});">delete</button>
                </div>
                </div>`;
            
            mylisthtml+=html;
        }

        document.querySelector(".main1").innerHTML=mylisthtml;
        
    }
