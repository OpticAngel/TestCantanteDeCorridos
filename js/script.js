new Vue({
    el: '#sabe',
    data: {
        name: '', 
        userName: false, 
        currentQuestion: 0,
        answers: { A: 0, B: 0, C: 0 },
        result: '',
        resultImage: '',
        questions: [
            {
                text: "¿Qué tema prefieres en tus canciones?",
                options: [
                    { text: "Historias de superación y esfuerzo", value: 'A' },
                    { text: "Reflexiones sobre la vida", value: 'B' },
                    { text: "La vida de éxito y lujos", value: 'C' }
                ]
            },
            {
                text: "¿Qué estilo de ropa te identifica más?",
                options: [
                    { text: "Estilo urbano", value: 'A' },
                    { text: "Estilo vaquero", value: 'B' },
                    { text: "Estilo llamativo", value: 'C' }
                ]
            },
            {
                text: "¿Cuál es tu bebida favorita para acompañar una buena canción?",
                options: [
                    { text: "Cerveza", value: 'A' },
                    { text: "Tequila", value: 'B' },
                    { text: "Whisky", value: 'C' }
                ]
            },
            {
                text: "¿Qué es lo más importante en tu vida?",
                options: [
                    { text: "Familia", value: 'A' },
                    { text: "Mis tradiciones", value: 'B' },
                    { text: "Lograr éxito y reconocimiento", value: 'C' }
                ]
            },
            {
                text: "¿Dónde prefieres escuchar música?",
                options: [
                    { text: "En casa relajado", value: 'A' },
                    { text: "En una fiesta con amigos", value: 'B' },
                    { text: "En el auto a todo volumen", value: 'C' }
                ]
            },
            {
                text: "¿Qué actividad prefieres en tu tiempo libre?",
                options: [
                    { text: "Hacer deporte", value: 'A' },
                    { text: "Salir al campo o rancho", value: 'B' },
                    { text: "Salir de fiesta", value: 'C' }
                ]
            },
            {
                text: "¿Con quién prefieres compartir tus éxitos?",
                options: [
                    { text: "Con mi familia", value: 'A' },
                    { text: "Con mis amigos de siempre", value: 'B' },
                    { text: "Con todos en redes sociales", value: 'C' }
                ]
            },
            {
                text: "¿Cuál sería tu accesorio ideal?",
                options: [
                    { text: "Una gorra", value: 'A' },
                    { text: "Un sombrero de vaquero", value: 'B' },
                    { text: "Una cadena o reloj", value: 'C' }
                ]
            },
            {
                text: "¿Qué valor consideras más importante?",
                options: [
                    { text: "La lealtad", value: 'A' },
                    { text: "El respeto", value: 'B' },
                    { text: "El reconocimiento y éxito", value: 'C' }
                ]
            },
            {
                text: "¿Cuál es tu red social favorita?",
                options: [
                    { text: "Instagram", value: 'A' },
                    { text: "Facebook", value: 'B' },
                    { text: "TikTok", value: 'C' }
                ]
            }
        ]
    },
    methods: {
        startQuiz() {
            if (this.name) {
                this.userName = true; 
                this.currentQuestion = 0; 
                this.answers = { A: 0, B: 0, C: 0 }; 
                this.result = '';
                this.resultImage = '';
            }
        },
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
                this.resultImage = "assets/imagen1.jpg"; 
            } else if (this.answers.B > this.answers.A && this.answers.B > this.answers.C) {
                this.result = "Luis R Conríquez";
                this.resultImage = "assets/imagen2.jpg"; 
            } else {
                this.result = "Natanael Cano";
                this.resultImage = "assets/imagen3.jpg"; 
            }
        },
        restartQuiz() {
            this.currentQuestion = 0;
            this.answers = { A: 0, B: 0, C: 0 };
            this.result = '';
            this.resultImage = '';
            this.userName = false; 
            this.name = ''; 
        }
    }
});
