let student_names = ['joe','jim','jen'];

for(let i = 0; i<3; i++){
    let new_name = prompt('enter name');
    student_names.push(new_name)
};

for(let x = 0; x< student_names.length; x++){
    console.log(student_names[x]);
}