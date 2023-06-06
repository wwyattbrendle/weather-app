const changeImg = async (target, input) => {
    const response = await fetch(`https://pixabay.com/api/?key=37058055-a0c4c667672ac8c0985e34ce8&q=${input}`);
    const result = await response.json();
    target.src = result.hits[0].webformatURL;
}

export {changeImg};