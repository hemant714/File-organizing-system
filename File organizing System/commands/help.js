function helpfn(){
    console.log(`List of all commands :-
                    1. Tree Command -node fo.js tree <dirname>
                    2. Organize Command -node fo.js organize <dirname>
                    3. Help Command - node fo.js help`)
}

module.exports={
    helpKey : helpfn
}