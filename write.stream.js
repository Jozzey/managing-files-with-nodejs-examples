const {createReadStream, createWriteStream} = require('fs');

const stream = createReadStream('./data/app.log', {
    highWaterMark: 95,
    encoding: "utf8"
});

const writer = createWriteStream("./data/output.log");

let interation = 0;
stream.on('data', data => {
    stream.pause();
    console.log(++interation);

    writer.write(data);

    setTimeout(() => {
        stream.resume();
    }, 1000);
});
