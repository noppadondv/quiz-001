import { useEffect, useState } from 'react';
import "./quiz-section-2-01.css"

function App() {
    const [number, setNumber] = useState(0)
    const [type, setType] = useState("isPrime")
    const [result, setResult] = useState("")

    const isPrime = (num: number) => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    function fibonacci(num: number) {
        let a = 1, b = 0, temp;

        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    }

    useEffect(() => {
        setResult("Calculating...")
        setTimeout(() => {
            if (type === "isPrime") {
                setResult(String(isPrime(number)))
            } else {
                let temp = fibonacci(number);
                setResult(String(temp === number))
            }
        }, 100);
    }, [number, type])

    return (
        <div className="App">
            <div className="one-col">
                <input type="number"
                    value={number}
                    onChange={e => {
                        let number = Math.ceil(parseInt(e.target.value));
                        let isPositive = Math.sign(number);
                        setNumber(isPositive >= 0 ? number : 1)
                    }} />
            </div>
            <div className="two-col">
                <select
                    defaultValue={type}
                    onChange={e => setType(e.target.value)}
                >
                    <option value="isPrime">isPrime</option>
                    <option value="isFibonacci">isFibonacci</option>
                </select>
            </div>
            <div className="three-col">
                {result}
            </div>
        </div>
    );
}

export default App;
