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

// Add Order CSS Property To Game Blocks.
gameBlocks.forEach((block, index) => {
    block.style.order = 
})