descriptions = ['royal', 'poor', 'stunning', 'tempting', 'formidable', 'old', 'barbaric', 'sad', 'gorgeous'];

function describeName() {
    const userName = prompt('Enter your name');
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    console.log(userName + ' is a ' + description + ' name!');
}

describeName();
