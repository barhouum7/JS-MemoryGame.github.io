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

    // Add A Click Event
    block.addEventListener('click', () => {
        // Trigger The flipBlock Function
        flipBlock(block)
    })
})

// Add Flip Block Function
function flipBlock(selectedBlock) {
    // Add Class is-flipped
    selectedBlock.classList.add('is-flipped')
    // Collect All Flipped Cards
    let allFlippedBlocks = gameBlocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'))
    // Checking If There's Two Selected Blocks THEN Stop It And Check.
    if (allFlippedBlocks.length === 2){
        // console.log('Two Cards Selected !')

        // Adding Stop Clicking Function
        stopClicking()

        // Adding Check Matched Block Function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])
    }

}

// Adding Stop Clicking Function
function stopClicking() {
    // Adding Class No Clicking On Main Container
    blocksContainer.classList.add('no-clicking')

    // Removing Class No Clicking After A Specific Duration
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking')
    }, duration)
}

function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span')

    if (firstBlock.dataset.technology === secondBlock.dataset.technology){
        
        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')

        firstBlock.classList.add('is-match')
        secondBlock.classList.add('is-match')

    }else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) +1

        setTimeout(() => {
            firstBlock.classList.remove('is-flipped')
            secondBlock.classList.remove('is-flipped')
        }, duration)
    }
}

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