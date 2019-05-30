export default function getCharacters() {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to Throw Characters';

      return json;
    })
    .then(json => json.map(character => ({
      id: character.id,
      name: character.name,
      img: character.photoUrl || 'https://inthe80sblog.files.wordpress.com/2017/12/in-the-80s-rick-astley.jpg?w=1784&h=1003&crop=1'
    })));
}

