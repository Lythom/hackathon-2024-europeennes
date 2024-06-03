import {useEffect, useState} from 'react'
import './App.css'
import {Button} from "@/components/ui/button.tsx";
import questions from "./questions.json";
import Chart from './components/Chart';

function App() {
    const [started, setStarted] = useState(false)
    const [answers, setAnswers] = useState<Array<"yes" | "no" | "unsure">>([])

    // Function to update the URL with the current answers
    function updateURL(answers: Array<"yes" | "no" | "unsure">) {
        const params = new URLSearchParams(window.location.search);
        params.set('answers', answers.join(','));
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }

    // Function to add an answer and update the URL
    function addAnswer(a: "yes" | "no" | "unsure") {
        const newAnswers = [...answers, a];
        setAnswers(newAnswers);
        updateURL(newAnswers);
    }

    // Read answers from URL on initial load
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const answersFromURL = params.get('answers');
        if (answersFromURL) {
            setAnswers(answersFromURL.split(',') as Array<"yes" | "no" | "unsure">);
            setStarted(true);
        }
    }, []);


    const question = answers.length >= questions.length ? null : questions[answers.length];

    const weights: { [key: string]: number } = {}
    for (let i = 0; i < answers.length; i++) {
        const a = answers[i]
        const q = questions[i]
        const matches = a === "yes" ? q.yes : a === 'no' ? q.no : []
        for (const match of matches) {
            if (weights[match] == null) weights[match] = 1
            else weights[match]++
        }
    }

    return (
        <>
            <div className="max-w-[50rem] flex flex-col mx-auto size-full">
                <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
                    <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                         aria-label="Global">
                        <div className="flex items-center justify-between">
                            <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                               href="#" aria-label="Brand">Mon europe 2024</a>
                        </div>
                    </nav>
                </header>
                <main id="content">
                    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                        <h1 className="block text-2xl font-bold text-white sm:text-4xl">Mon europe 2024</h1>
                        {!started && <>
                            <p className="mt-3 text-lg text-gray-300">Répondez à une suite de questions, nous
                                identifierons les listes les plus à même de vous plaire.</p>
                            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                                <Button onClick={() => setStarted(true)}
                                        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                    Démarrer !
                                </Button>
                            </div>
                        </>}
                        {started && question != null && <>
                            <p className="mt-3 text-lg text-gray-300">{question.question}</p>
                            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                                <Button onClick={() => addAnswer("no")}
                                        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                    Non
                                </Button>
                                <Button onClick={() => addAnswer("unsure")}
                                        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                    Je ne sais pas
                                </Button>
                                <Button onClick={() => addAnswer("yes")}
                                        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                                    Oui
                                </Button>
                            </div>
                        </>}
                        {started && question == null && <>
                            <p className="mt-3 text-lg text-gray-300">Résultat</p>
                            <p className="italic text-md text-gray-300">Voici les listes avec lesquelles vous semblez avoir le plus d'affinité.</p>
                            <Chart dataObject={weights}/>
                        </>}
                    </div>
                </main>
                <footer className="mt-auto text-center py-5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-sm text-gray-400">Réalisé lors du hackathon Lonestone 2024</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
