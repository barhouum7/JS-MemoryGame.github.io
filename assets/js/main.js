const btn = document.querySelector('.control-buttons button');

btn.addEventListener('click', () => {
    yourName = prompt('Enter Your Name:','Jhon');
    if(yourName == null || yourName == ""){
        document.querySelector('.name span').innerHTML = 'Anonym';
    }else{
        document.querySelector('.name span').innerHTML = yourName;
    }
    document.querySelector('.control-buttons').remove();
});

const duration = 1000

const blocksContainer = document.querySelector('.game-imgs-blocks')

const gameBlocks = Array.from(blocksContainer.children)

const gBlocksOrderRange = [...Array(gameBlocks.length).keys()]

// console.log(gBlocksOrderRange)
shuffle(gBlocksOrderRange)
// console.log(gBlocksOrderRange)

// Add Order CSS Property To Game Blocks.
gameBlocks.forEach((block, index) => {
    block.style.order = gBlocksOrderRange[index]
})

// Shuffle Function
function shuffle(array){
    // Settings Vars
    let current = array.length, temp, random

    while (current > 0){
        // Get The Random Number
        random = Math.floor(Math.random() * current)
        //Decrease The Array's Length By One
        current--

        // [1] Save Current Element In Stash
        temp = array[current]
        // [2] Current Element = Random Element
        array[current] = array[random]
        // [3] Random Element = Get Element From Stash
        array[random] = temp
    }
    return array
} 