const Pessoa={
     Nome:"Lucio",
     Age:"12",
     Nationality:"Angolana"
}

function ShowData({Nome, Age, Nationality}=Pessoa){
     console.log(`Nome: ${Nome}, Idade: ${Age}, Nacionalidade: ${Nationality}`)
}

ShowData()