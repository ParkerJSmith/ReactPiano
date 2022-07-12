const Key = ({ tone }) => {
    var context = new AudioContext()
    var o = context.createOscillator()
    var  g = context.createGain()
    o.connect(g)
    g.connect(context.destination)

    const playNote = () => {
        o.start(0)
    };

    const stopNote = () => {
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 3);
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
