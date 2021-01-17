alert('eliya');

            // תרגיל 3- שיעורי בית.
            //כתבו פונקציה שמקבלת מחרוזת ועושה רווח לפני כל אות גדולה.
            //יצירת פונקציה מחבל סטרינג
            //להשתמש בלולאה שתרוץ על כל האותיות
            //  בדיקת אות גדולה
            // לשים רווח לפני


            function spaceForCap(str){
                let tepStr =' ';
                //for(אתחול, תנאי עצירה,התקדמות)   
                   for(let i =0; i< str.length ; i++){
                       let newStr = str.charAt(i);
                       
                       if( newStr >= 'A'  && newStr <= 'Z'){
                       // if(newStr == newStr.toUpperCase()) אופציה נוספת
                       tepStr += ' '+ newStr;
                       
                        }
                    else{
                       tepStr+= newStr;
                   }
   
                   }
                   return tepStr;
               };
              
                let res = spaceForCap('akKKkloO');
                console.log(res);
                

                //5
                function countStrInSen(short,long){
                    
                    let counter = 0;
                    // long str =fgckcgh
                    //short str =jkl

                    for( let i = 0; i< long.length; i++){

                        let checkStr =long.substring(i, short.length+i);
                        if(checkStr== short){
                            counter++;
                        }
                        
                    }
                    return counter;

                };
                countStrInSen('ABC', 'jkABCjkABCjj');



            //6
            
            let sumGrade= 0;
            counter=0;
            
            function addGrade(){
                let input = document.getElementById('score').value;

                    if(isNaN(input)|| input == ''){
                        alert('please enter a vaild number');
                    }
                    else {
                        alert('valid number');
                    }
                    if(input >0 && input<=100){
                        sumGrade += Number(input);
                        counter++
                        document.getElementById('score').value=' ';
                        console.log(('add grade');
                        console.log(sumGrade);
                        console(counter);
                    
                    }
                    else{
                        alert('error');
                    }
                

            }

            function clacGrade(){
                



            } 
            document.getElementById('result').innerHTML;