new Vue({
    el: '#sabe',
    data: {
        currentQuestion: 0,
        answers: { A: 0, B: 0, C: 0 },
        result: '',
        resultImage: '',
        questions: [
            {
                text: "¿Qué tema prefieres en tus canciones?",
                options: [
                    { text: "Historias de superación y esfuerzo", value: 'A' },
                    { text: "Reflexiones sobre la vida en el rancho", value: 'B' },
                    { text: "La vida de éxito y lujos", value: 'C' }
                ]
            },
            {
                text: "¿Qué estilo de ropa te identifica más?",
                options: [
                    { text: "Estilo urbano y relajado", value: 'A' },
                    { text: "Estilo vaquero con botas y sombrero", value: 'B' },
                    { text: "Ropa de diseñador y accesorios llamativos", value: 'C' }
                ]
            },
            {
                text: "¿Cuál es tu bebida favorita para acompañar una buena canción?",
                options: [
                    { text: "Cerveza", value: 'A' },
                    { text: "Tequila o mezcal", value: 'B' },
                    { text: "Whisky", value: 'C' }
                ]
            },
            {
                text: "¿Qué es lo más importante en tu vida?",
                options: [
                    { text: "El apoyo de mi familia y amigos", value: 'A' },
                    { text: "Mis raíces y tradiciones", value: 'B' },
                    { text: "Lograr éxito y reconocimiento", value: 'C' }
                ]
            }
        ]
    },
    methods: {
        answerQuestion(index, answer) {
            this.answers[answer]++;
            this.currentQuestion++;

            if (this.currentQuestion === this.questions.length) {
                this.calculateResult();
            }
        },
        calculateResult() {
            if (this.answers.A > this.answers.B && this.answers.A > this.answers.C) {
                this.result = "Junior H";
                this.resultImage = "assets/imagen1.jpg"; // Ruta de la imagen de Junior H
            } else if (this.answers.B > this.answers.A && this.answers.B > this.answers.C) {
                this.result = "Luis R Conríquez";
                this.resultImage = "assets/imagen2.jpg"; // Ruta de la imagen de Luis R Conríquez
            } else {
                this.result = "Natanael Cano";
                this.resultImage = "assets/imagen3.jpg"; // Ruta de la imagen de Natanael Cano
            }
        },
        restartQuiz() {
            this.currentQuestion = 0;
            this.answers = { A: 0, B: 0, C: 0 };
            this.result = '';
            this.resultImage = '';
        }
    }
});
