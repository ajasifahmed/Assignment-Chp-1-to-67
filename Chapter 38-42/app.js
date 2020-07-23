// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a,b)
// {
//     return Math.pow(a,b);
// } 
// document.write(power(3,2));

//Leap year

// function leapYear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// document.write(leapYear(2016));

//Area of circle
// function area(a,b,c)
// {
//  function S(a,b,c)
// {
// return ( a + b + c ) / 2
// }   
// var S=S(a,b,c);

//     return S*((S-a)*(S-b)*(S-c))
// }
// document.write(area(2,4,1));

//Perecentage and Average

// function mainFunction(math,urdu,phy)
// {

//     var avg=getAvg(math,urdu,phy);
//     var per=getPercentage(avg);

//     return {avg:avg,per:per}

//     function getAvg(math,urdu,phy)
//     {
//         var avg=(math+urdu+phy)/3;
//         return avg;
//     }
//     function getPercentage(avg)
//     {
//         return (avg/100)*30;
//     }
// }
// var a=parseFloat(prompt("enter one"));
// var b=parseFloat(prompt("enter two"));
// var c=parseFloat(prompt("enter three"));
// var result=(mainFunction(a,b,c));
// document.write("Average="+result.avg.toFixed(2)+"<br/>"+"Percentage="+result.per.toFixed(2)+"%");

//DELETE VOWELS
// function deleteV()
// {
//     var text="this is the text containing some vowels";
//     var split_text=text.split("");
//     split_text=split_text.map(x=>x.replace(/[aeiou]/g,''));
//     var newtext=split_text.join("");
//     document.write(newtext);
// }
// deleteV();

//2nd method
// function deleteV()
// {
//     var text="this is the text containing some vowels and";
//     var split_text=text.split("");

//     for(var i=0;i<=split_text.length;i++)
//     {
//         if(split_text[i]==='a'||split_text[i]==='i'||split_text[i]==='e'||split_text[i]==='o'||split_text[i]==='u')
//             {
//                 split_text[i]="";
//             }
//     }
//     var newtext=split_text.join("");
//     document.write(newtext);
// }
// deleteV();

//Cashier

// function denomination(amount)
// {
// document.write("you will have "+parseInt(amount/100)+" hundred notes, "+parseInt((amount % 100) / 50)+" fifty note(s), "+parseInt((((amount % 100) % 50)/10))+"ten note(s),and "+parseInt((((amount % 100)%50)%10))+" rupes" );
// }
// denomination(1271);