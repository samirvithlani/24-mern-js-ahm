const generateQuestions = ()=>{


    const questions = [
        {
            question: 'What is your name?',
            answer: 'My name is John Doe'
        },
        {
            question: 'What is your age?',
            answer: 'I am 25 years old'
        }
    ]

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(questions)
        },3000)
    })


}

const generateExam = (questionsData)=>{



    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                message: 'Exam has been created',
                questions: questionsData
            })
        },2000)
    })


}

const generateResult = (examData)=>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message: 'Result has been generated',
                exam: examData
            })
        },4000)
    })
}

// const startExam = ()=>{


//     generateQuestions().then((questions)=>{
//         console.log(questions)
//         generateExam(questions).then((exam)=>{
//             console.log(exam)
//             generateResult(exam).then((result)=>{
                
//                 console.log(result)
//             })
//         })
//     })


// }


const startExam = async ()=>{


    const questions  = await generateQuestions()
    console.log("question has been gener..",questions)
    const exam = await generateExam(questions)
    console.log("exam has been gener..",exam)
    const result = await generateResult(exam)
    console.log("result has been gener..",result)


}

startExam()