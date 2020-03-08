const maxMultiple = (divisor, bound) => {
    while (bound % divisor) {
      bound--;
    }
    
    return bound;
}