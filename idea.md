
## porque desse exercicio 

- treinar conceito inicial de consumo de api
- incentivo ao prpojeto pessoal
- fixar as ideias

## oque estou em mente

- usar api do dnd5e das magias : https://www.dnd5eapi.co/api/spells
- brincar um pouco com api e json
- quero pegar nome da magia , escola e classe

- uma especie de grimorio ou enciclopedia

++ ideia 1: 

- click no invocar 
- vai gerar um numero aleatorio com
[ () =>{
    return Math.floor(Math.random()*1000/3) ]
 ja que o json das spell tem cout 319

- pegar esse numero e pegar a magia que repesenta
- Colocar nome da magia no visor


## oque vou precisar

- de um cara que vai buscar na api
- um cara que vai colocar na tela

### parte um

- buscar o json [x]
- colocar pelo menos o nome da magia na div visor

+ Molde da magia

-- (index) == name : nome da magia
-- school obj {index==nome}
-- classes arry de object {index==nome}

======================================================================

## Design visual UX/UI

-- School = simbolo para cada uma, que as represente
---- Classes também
-- icone pra:
--- components
--- concentration
-- A aplicação será um grimorio 

- Composto por = [
  - nome da magia ||| simbolo da escola
  - escola
  - ]

{
    [] Classes
        [x] Bardo;
        [x] Clérigo;
        [x] Druida;
        [x] Paladino;
        [x] Ranger;
        [x] Feiticeiro;
        [x] Warlock;
        [x] Mago
    [] componentes e concentração
        [x] Verbal 
        [x] Gestual
        [x] Material

    [] Escolas
        [x] Advinhação
        [x] Abjuração
        [x] Conjuração
        [x] Encantamento
        [x] Evocação
        [x] Ilusão
        [x] Necromancia
        [x] Transmutação
     
}
++++++++++ Agradecimento pelas arts ++++++++++ 

- <a href="https://www.flaticon.com/free-icons/folklore" title="folklore icons">Folklore icons created by DinosoftLabs - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/rpg-game" title="rpg game icons">Rpg game icons created by Ken111 - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/rpg-game" title="rpg game icons">Rpg game icons created by Ken111 - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/fantasy" title="fantasy icons">Fantasy icons created by max.icons - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/manuscript" title="manuscript icons">Manuscript icons created by Enrique Valle - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/fantasy" title="fantasy icons">Fantasy icons created by Freepik - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/fantasy" title="fantasy icons">Fantasy icons created by max.icons - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/fairy-tale" title="fairy tale icons">Fairy tale icons created by POD Gladiator - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/beast" title="beast icons">Beast icons created by max.icons - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/dwarf" title="dwarf icons">Dwarf icons created by Enrique Valle - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/crystal-ball" title="crystal ball icons">Crystal ball icons created by Smashicons - Flaticon</a><a href="https://www.flaticon.com/free-icons/thunderbolt" title="thunderbolt icons">Thunderbolt icons created by max.icons - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/voice-recording" title="voice recording icons">Voice recording icons created by bearicons - Flaticon</a>
-<a href="https://www.flaticon.com/free-icons/wand" title="wand icons">Wand icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/magic" title="magic icons">Magic icons created by Vitaly Gorbachev - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fantasy" title="fantasy icons">Fantasy icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/music-and-multimedia" title="music and multimedia icons">Music and multimedia icons created by Freepik - Flaticon</a>
