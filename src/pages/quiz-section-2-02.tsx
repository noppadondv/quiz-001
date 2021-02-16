import { useEffect, useState } from "react";
import "./quiz-section-2-02.css"

function App() {
    const [data, setData] = useState<string[]>([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetch("https://api.publicapis.org/categories")
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                className="input-search"
                onChange={e => setFilter(e.target.value.toUpperCase())}
            />
            <table>
                <thead >
                    <tr className="header">
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data
                            .filter(item => item.toUpperCase().indexOf(filter) > -1)
                            .map((item, i) => (
                                <tr key={i}>
                                    <td>{item}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default App;
