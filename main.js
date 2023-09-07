const URL = "http://localhost:5215/api/Gasoductos";

async function getGasoducto() {
  try {
    const reponse = await fetch(URL);
    const characters = await reponse.json();

    console.log(characters);
  } catch (error) {
    console.log(error);
  }
}

getGasoducto();
