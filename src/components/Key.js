const Key = ({ tone }) => {
    var context = new AudioContext()
    var o = context.createOscillator();
    o.type = "sine";
    var g = context.createGain();
    var firstNote = true;
    var frequency;
    switch (tone) {
        case "c":
            frequency = 261.6;
            break;
        case "c#":
            frequency = 277.2;
            break;
        case "d":
            frequency = 293.7;
            break;
        case "d#":
            frequency = 311.1;
            break;
        case "e":
            frequency = 329.6;
            break;
        case "f":
            frequency = 349.2;
            break;
        case "f#":
            frequency = 370;
            break;
        case "g":
            frequency = 392;
            break;
        case "g#":
            frequency = 415.3;
            break;
        case "a":
            frequency = 440;
            break;
        case "a#":
            frequency = 466.2;
            break;
        case "b":
            frequency = 493.9;
            break;
    }
    o.connect(g);
    g.connect(context.destination);

    const playNote = () => {
        //if (firstNote) {
        //    o.start(0);
        //    firstNote = false;
        //} else {
        //    g.gain.exponentialRampToValueAtTime(1.00000, context.currentTime + 0.1);
        //}
        //if (!firstNote) {
        //    o.stop();
        //    firstNote = false;
        //}
        o = context.createOscillator();
        g = context.createGain();
        o.connect(g);
        g.connect(context.destination);
        o.frequency.value = frequency;
        o.start();
    };

    const stopNote = () => {
        g.gain.exponentialRampToValueAtTime(0.000001, context.currentTime + 3.1);
        //o.stop();
    };

    return (
        <div className="key">
            <div
                className={(tone.includes('#') ? 'black-key' : 'white-key') + ' ' + tone.replace('#', '-sharp')}
                onMouseDown={playNote}
                onMouseUp={stopNote}
            >
                {tone}
            </div>
        </div>
    )
}

export default Key
