document.querySelector('button').addEventListener('click', getRapName)

async function getRapName(){
  const rapName = document.querySelector('input').value
  try{
    const res = await fetch(`https://devs100rap-api.herokuapp.com/api/rappers/${rapName}`)
    const data = await res.json()
    console.log(data)
    document.querySelector('h2').innerText = data.birthName
  }catch(err){
    console.log(err)
  }

}
