         
         
         // ES5

// declaracion de las variables

/*var [teachersTeam, members] = [
  'formacion',
     ['Amalia',
      'Karla', 
      'Silvana', 
      'Manu', 
      'Jonh',
      'Mike'
    ],
];

var formatTeamMessage = function (teachersTeam, members) {
  var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
  console.log(message)
  return message;
};  

formatTeamMessage(teachersTeam, members);*/

// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables 

/*const [teamName, product] = [
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];


const formatTeamMessage = (teamName, product) => {
// escribe tu código en ES6 aqui...
  const array = product.join(``);
  const newArray = product.map(item => item);
  let message = 'Hay ' + newArray.length + " " + 'personas en el equipo de' + " " + teamName + "\n" + "Ellos son" + " " + product.join(` `) + ".";
  console.log(message);
  return message;
};

formatTeamMessage(teamName, product);
*/

/*  it('a normal string can`t span across multiple lines', function() {
    var normalString = 'line1' +
                       'line2';
    assert.equal(normalString, 'line1line2');
  });*/
  
/*  const capitalize = str => {
 const array = str.split(``);
 const newArray = array.map(item => item.toUpperCase());
 let newStr = newArray.join(``);
 return newStr 
};*/

// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables 

const [teamName, product] = [
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];


const formatTeamMessage = (teamName, people) => {
  let message= (`Hay ${people.length} personas en el equipo de ${teamName}. Ellos son ${people}.`);
  console.log(message)

}

formatTeamMessage(teamName, product);



