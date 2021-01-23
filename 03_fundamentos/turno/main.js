let alumnos = [
    'Arguiñena Giménez,DABI',
    'Aznar Martínez,JAIME',
    'Bengoechea Cuadrado,DANIEL',
    'Berlín González,ANDREA',
    'Cabrera Martínez,SAMIR ARMANDO',
    'Campomanes Lombardero,ANTONIO',
    'Cebollero García,DIEGO',
    'Falcón Casas,MARCOS',
    'Fernández Abuelo,ADRIáN',
    'Gimeno Castañosa,SAUL',
    'Gómez Lahera,PABLO',
    'Gracia Vijuesca,PABLO',
    'Gutiérrez Sánchez,CéSAR',
    'Muñoz Villanova,JORGE',
    'Portolés Bayod,DIEGO',
    'San Román Salvador,IVáN',
    'Valero Gil,RUBéN',
    'Martínez Sancho,Isabel',
    'Petrus Petrus, Vladyslav',
    'Gutiérrez Montorio,MARIO'
]

function next() {
    let index = parseInt(Math.random() * alumnos.length)
    return alumnos[index]
}

console.log(next())