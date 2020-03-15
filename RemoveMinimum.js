const removeSmallest = (numbers) => {
    const x = numbers.reduce((m, n, i) => n < numbers[m] ? i : m, 0)
    return numbers.filter((n, i) => i !== x)
}