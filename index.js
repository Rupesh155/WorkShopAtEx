// const { promises } = require("dns");

// function step1(fn){


//     setTimeout(()=>{
//         console.log('select ho gyii imageee');
//         fn()
//         // console.log(fn);

//     },5000)
   

//   }

//   function step2(fn){

//     setTimeout(()=>{
//         console.log('filteredddd');
//         fn()

//     },4000)
   
//   }


//   function step3(){

//     setTimeout(()=>{
//         console.log('captionssssss');

//     },3000)

//   }


 

//   step1( ()=>{
//     step2(  ()=>{
//         step3()
//     })

//   }    )

// promises

      


    //   let promise=    new Promise((resolve,reject)=>{
    //     // resolve()
    //     reject()

    //      })

    //      promise.then(()=>{
    //         console.log('hello');

    //      }).catch(()=>{
    //         console.log('hiii');

    //      })



        // //  console.log(promise);




        // function step1(){
        //     return  new Promise((resolve,reject)=>{
        //         setTimeout(()=>{
        //             console.log('selectttt');
        //             resolve()

        //         },5000)

        //     })

        // }

        // function step2(){
        //    return new Promise((resolve,reject)=>{
        //         setTimeout(()=>{
        //             console.log('filtereddddd');
        //             resolve()

        //         },5000)

        //     })

        // }


 

        // step1().
        // then(()=>{
        //     return step2()

        // }).
        // then(()=>{

        // // })







        // NodeJS   ,    ExpressJs  ,    DB


        // npm  


        // console.log('hello');


          let express=   require('express')
              let app=   express()

              app.get('/',(req,res)=>{
                res.send('hello')
                
              })
              app.get('/about',(req,res)=>{
                res.send('abouttttttt  ')
                
              })

              app.listen( 3000,   ()=>{
                console.log('Server running on port no 3000');

              })




     



        //    1    npm init
        //      2  npm i express
   









  