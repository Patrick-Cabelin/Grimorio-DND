

const folhaDePergaminho = document.getElementById("pergaminhos")
const staffDireita = document.getElementById("staff-direita");
const staffEsquerda = document.getElementById("staff-esquerda");
let   capa = true;
const grimorio = document.getElementById("grimorio");
const folha = document.getElementById("papeis");
const pagEsquerda = folhaDePergaminho.children[0];
const pagDireita = folhaDePergaminho.children[1];
let NumeradorDaMagia = -1


class BuscarMagia {
  pontoDeBusca = 'https://www.dnd5eapi.co/api/spells/'

  buscaMagia() {
    return fetch(this.pontoDeBusca)
      .then(response => response.json())
      .then(data => {
        const magias = data.results
        return magias
      })
  }
}



class Magias extends BuscarMagia{
 
    async CriarPergaminho(){
      const Pergaminho = await buscarMagia.buscaMagia()
      return Pergaminho
    }

   

    async EscreverOsPergaminhos(){
      if(NumeradorDaMagia <=-1){
        
        NumeradorDaMagia= -1
        return
      }
      let pergaminhos = []
      await this.CriarPergaminho().then(Pergaminho => {
             this.pergaminhos = Pergaminho.map( () =>
          { 
            
            return pergaminhos = Pergaminho
          }
    )
    }).catch(error => {
      console.error(error)
    })
    this.SlotDaMagia(pergaminhos)

  }
  
  SlotDaMagia(pergaminhos ) {
    
      // 
      // let magiaIndex = NumeradorDaMagia
      // let magiaIndex = 0
     
      const indentificadorMagia = pergaminhos?.[NumeradorDaMagia]?.index
      const pontoMagico= this.pontoDeBusca+indentificadorMagia
      
      // 
      this.MoldarPergaminho(pontoMagico)
      
  
    }
   
    
    async MoldarPergaminho(pontoMagico) {
     
      
      if(pontoMagico == 'https://www.dnd5eapi.co/api/spells/undefined'){
        
        return
      }
      const magica = await fetch(pontoMagico)?.then(resposta => {
        let transmute = resposta.json()
        
        return transmute
      })  
      const { name, school, classes, ...rest } = magica

      const Magika = {
        nome: name,
        escola: school?.name,
        classes
      }
      
      
      
      return this.MostrarMagika(Magika)
    } 
    

    MostrarMagika(Magika){
     
      let escreveMagika = ({Magika}) => {
    
        return `
          <h1>${Magika.nome}</h1>
          <p>Escola: ${Magika.escola}</p>
          <p>Classes:</p>
          <ul>
            ${Magika.classes.forEach(classe => 
              `<li>${classe.name}</li>)}
              <li>${classe.name}</li>)}
              <li>${classe.name}</li>`)}
          </ul>

          `
      }
      if(this.capa){
        pagDireita.classList.add('aberto')
        pagEsquerda.classList.add('aberto')
      }
    
      pagEsquerda.innerHTML =  escreveMagika({Magika})
      pagDireita.innerHTML = escreveMagika({Magika})

      let pergaminhoEsquerdo= pagEsquerda.querySelector('h1')
      let pergaminhoDireito= pagDireita.querySelector('h1')
      
     
    
    }
  }


  
  
  
class ForjaGrimorio extends Magias{

  
  async abrirGrimorio() {
    NumeradorDaMagia++
    await TrazMagika()
    if (capa) {
      grimorio.classList.add("aberto");
      
      folha.classList.remove("aberto");
      folhaDePergaminho.classList.remove("aberto");
      pagEsquerda.classList.remove("aberto");
      pagDireita.classList.remove("aberto");
      capa = false;
      
    }
    
    
    
  }
   
  async fecharGrimorio() {
  
   
    NumeradorDaMagia--
   
         
         
    await TrazMagika()
    if (!capa && NumeradorDaMagia < 0) {
      grimorio.classList.remove("aberto");
      
      folha.classList.add("aberto");
      folhaDePergaminho.classList.add("aberto");
      pagEsquerda.classList.add("aberto");
      pagDireita.classList.add("aberto");
      capa = true;
      NumeradorDaMagia = 0
    }
    
    
  }
  
  passaPagina() {
    const folha = new Audio(
      "https://blobsound.com/wp-content/uploads/2020/03/Som-de-pagina-virando-Sons-Trilhas-e-efeitos-sororos-gr%C3%A1tis.mp3"
    );

    folha.play();
  }


  
}

async function TrazMagika(){
  return await magia.EscreverOsPergaminhos() 
}

const magia = new Magias()
const buscarMagia = new BuscarMagia()
const forja= new ForjaGrimorio()


staffDireita.addEventListener('click', () => forja.abrirGrimorio())
staffEsquerda.addEventListener('click', () =>{
  // NumeradorDaMagia--
  forja.fecharGrimorio()})

