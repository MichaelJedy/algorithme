var Tutor=require('./Tutorial.js') ;

exports.NodeTutorial=function(){
    console.log( "Node tutorial" ) ;

    function pTutor(){
        var PTutor = Tutor;
        PTutor.tutorial();
    }
} ;