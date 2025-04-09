// Preguntas y respuestas
const quizData = [
    {
        question: "1. ¿Qué es el virus del papiloma humano (VPH)?",
        options: [
            "Una bacteria que causa resfriados",
            "Un hongo que afecta la piel",
            "Un virus de transmisión sexual que puede causar verrugas y cáncer",
            "Un parásito intestinal"
        ],
        correct: 2 // Índice de la respuesta correcta
    },
    {
        question: "2. ¿Cómo se transmite el VPH?",
        options: [
            "Por compartir cubiertos",
            "Por contacto sexual (vaginal, anal u oral)",
            "Por picaduras de insectos",
            "Por contacto con superficies contaminadas"
        ],
        correct: 1
    },
    {
        question: "3.¿Cuáles son los principales tipos de VPH responsables de causar verrugas genitales (bajo riesgo)?",
        options: [
            "VPH 6 y 11",
            "VPH 16 y 18",
            "VPH 31 y 33",
            "VPH 45 y 52"
        ],
        correct: 0
    },
    {
        question: "4.¿A qué edad se recomienda iniciar la vacunación contra el VPH?",
        options: [
            "A partir del primer año de vida",
            "Entre los 3 y 5 años",
            "Entre los 9 y 14 años",
            "Después de los 25 años"
        ],
        correct: 2
    },
    {
        question: "5.¿Consideras que todos los jóvenes deberían recibir la vacuna del VPH, tanto chicos como chicas?",
        options: [
            "Sí",
            "No",
            "Solo las chicas",
            "Solo los chicos"
        ],
        correct: 0
    },
    {
            question: "6.¿Cuáles son genotipos del VPH de alto riesgo?",
            options: [
                "VPH 6 y 11",
                "VPH 16 y 18",
                "VPH 40 y 42",
                "VPH 1 y 2"
            ],
            correct: 1
    },
    {
        question: "7.Menciona algún genotipo adicional de alto riesgo",
        options: [
            "VPH 31",
            "VPH 3",
            "VPH 7",
            "VPH 9"
        ],
        correct: 0
    },
    {
        question: "8.¿En quiénes es más frecuente el VPH?",
        options: [
            "En hombres",
            "En mujeres",
            "En niños pequeños",
            "En personas mayores de 70 años"
        ],
        correct: 1
    },
    {
        question: "9.¿Cuáles son las principales manifestaciones clínicas al contraer VPH?",
        options: [
            "Fiebre y tos",
            "Verrugas genitales y lesiones en el cuello uterino",
            "Dolor de estómago y diarrea",
            "Dolor muscular y fatiga"
        ],
        correct: 1
    },
    {
        question: "10.¿Qué pruebas o exámenes se realizan para detectar VPH?",
        options: [
            "Radiografía de tórax",
            "Prueba de Papanicolaou y prueba de ADN del VPH",
            "Examen de sangre general",
            "Ecografía"
        ],
        correct: 1
    },
    {
        question: "11.¿El consumo de tabaco puede aumentar el riesgo de cáncer de cuello uterino y cáncer oral?",
        options: [
            "Sí ",
            "No",
            "Solo en hombres",
            "Solo en personas mayores"
        ],
        correct: 0
    }
    // Agrega más preguntas aquí...
];

let currentQuestion = 0; // Índice de la pregunta actual
let score = 0; // Puntuación del usuario

// Selecciona elementos del DOM
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("nextButton");

// Cargar pregunta
function loadQuestion() {
    const currentData = quizData[currentQuestion];
    questionTitle.innerHTML = `<b>${currentData.question}</b>`;
    optionsContainer.innerHTML = ""; // Limpia las opciones anteriores

    currentData.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("quiz-option");
        optionDiv.textContent = option;

        // Agrega evento de clic a cada opción
        optionDiv.addEventListener("click", () => {
            // Limpia clases anteriores
            document.querySelectorAll(".quiz-option").forEach(opt => opt.classList.remove("correct", "incorrect"));

            // Verifica si es correcta
            if (index === currentData.correct) {
                optionDiv.classList.add("correct");
                score++; // Incrementa la puntuación
            } else {
                optionDiv.classList.add("incorrect");
            }

            // Muestra el botón "Siguiente"
            nextButton.style.display = "block";
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Oculta el botón "Siguiente" hasta que se seleccione una opción
    nextButton.style.display = "none";
}

// Evento para el botón "Siguiente"
nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion(); // Carga la siguiente pregunta
    } else {
        showScoreModal(); // Muestra el modal con la puntuación
    }
});

// Mostrar la primera pregunta al cargar la página
loadQuestion();

function showScoreModal() {
    const scoreText = document.getElementById("scoreText");
    scoreText.textContent = `Tu puntuación es ${score} de ${quizData.length}.`;

    const scoreModal = new bootstrap.Modal(document.getElementById("scoreModal"));
    scoreModal.show();
}