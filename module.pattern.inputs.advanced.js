(() => {
    var App = {

        htmlElements: {
            studentForm: document.getElementById('student_form'),
            studentsList: document.getElementById('students_list')
        },

        data: {
            row: 0
        },

        init: () => {
            // Bind events
            App.htmlElements.studentForm.addEventListener('submit', App.events.studentFormOnSubmit);

        },

        events: {
            studentFormOnSubmit: (event) => {

                event.preventDefault();

                const { 
                    student_name: studentNameInput,
                    student_age: studentAgeInput,
                    student_hobbies: studentHobbiesInput
                } = event.target.elements;

                const studentId = App.data.row;
                const studentName = studentNameInput.value;
                const studentAge = studentAgeInput.value;
                const studentHobbies = studentHobbiesInput.value;

                App.utils.addStudentToList({ 
                    
                    tableBody: App.htmlElements.studentsList,
                    studentId,
                    studentName,
                    studentAge,
                    studentHobbies,
                    
                }

                
                );

                App.data.row = App.data.row + 1;

            },

            studentFormOnDelete:(event) => {

                const btnRemove = event.target;
                const rowRemove = btnRemove.parentNode.parentNode;
                rowRemove.parentNode.removeChild(rowRemove);

            },

            studentFormOnUpdate:(event) =>{

                const btnUpdate = event.target;
                const rowUpdate = btnUpdate.parentNode.parentNode.getElementsByTagName("td");
                App.htmlElements.studentForm.student_name.value = rowUpdate[0].innerHTML;
                App.htmlElements.studentForm.student_age.value = rowUpdate[1].innerHTML;
                App.htmlElements.studentForm.student_hobbies.value = rowUpdate[2].innerHTML;
                App.supportingVariables.studentSubmitEvent = btnUpdate;
            }

        },
        utils: {
            addStudentToList: ({ tableBody, studentId, studentName, studentAge, studentHobbies }) => {

                if (App.htmlElements.studentForm.student_form_submit.textContent == "Actualizar") {
                    
                    const submitEvent = App.supportingVariables.studentSubmitEvent.parentNode.parentNode;
                    const submitEventUpdate = document.createElement('tr');
                    submitEventUpdate.innerHTML = newRow;
                    tableBody.replaceChild(submitEventUpdate, submitEvent);


                } else{

                const newRow = `<tr><td>${studentId}</td><td>${studentName}</td><td>${studentAge}</td><td>${studentHobbies}</td><td><button id='delete'>Eliminar</button><td/><button id='edit'>Editar</button></tr>`;
                
                tableBody.innerHTML += newRow;

                console.log(tableBody);

                }


                if (document.getElementById("delete") == 'delete') {
                    btn.addEventListener('click', App.events.studentDeleteTable);
                } else {
                    btn.addEventListener('click', App.events.studentUpdateTable);
                }


                App.utils.putButtonListen(document.querySelectorAll('.edit'));
                App.utils.putButtonListen(document.querySelectorAll('.delete'));

            },
        }
    }
    App.init();
})();