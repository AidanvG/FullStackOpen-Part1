const Statistics = ({good, neutral, bad, all}) => {
    if (all === 0) {
        return <p>No feedback given</p>
    }
    return (
        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {(good-bad)/all}</p>
            <p>positive {(good/all)*100}%</p>
        </div>
    )
}

export default Statistics;