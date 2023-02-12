var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)]

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();

function listTopics(){
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

// for (i = 0; i < topics.length; i++){
//     console.log(topics[i]);
// }

function selectTopic(){
    if (randomTopic === 'HTML'){console.log("Let's study HTML!")}
    else if (randomTopic  ==='CSS'){console.log("Let's study CSS!")}
    else if (randomTopic  ==='Git'){console.log("Let's study Git!")}
    else if (randomTopic ==='JavaScript'){console.log("Let's study JavaScript!")}
    else {console.log('Please try again!')};
}



// (===) is the strict equality operator which checks if the values given are true