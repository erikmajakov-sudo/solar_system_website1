function togglePlanetJump(planetId) {
    
    const targetWrapper = document.getElementById(planetId);
    
    const isAlreadyExpanded = targetWrapper.classList.contains('jumped');

 
    const allWrappers = document.querySelectorAll('.planet-wrapper');
    allWrappers.forEach(wrapper => {
        wrapper.classList.remove('jumped');
    });

    
    if (!isAlreadyExpanded) {
    
        targetWrapper.classList.add('jumped');
    }
}
